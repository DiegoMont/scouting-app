class ScoutingForm {

    MAX_IMAGE_DIMENSION = 500;

    errorFooter;
    formElement;
    formType;
    sections;
    submitBtn;
    collectionLabel;

    teamNumberInputName;

    constructor(formQuerySelector, formType, sectionDetails){
        this.teamNumberInputName = `team-number-${formType}`;
        this.formElement = document.querySelector(formQuerySelector);
        this.formType = formType;
        this.setErrorFooter();
        this.setSubmitBtn();
        this.setSectionsAndQuestions(sectionDetails);
        this.addFormHandler();
    }

    renderSections(){
        for (const sectionName in this.sections){
            const section = this.sections[sectionName];
            section.renderQuestions();
            this.formElement.appendChild(section.container);
        }
        this.sections.comments.container.appendChild(this.errorFooter);
        this.sections.comments.container.appendChild(this.submitBtn);
    }

    addFormSpecificSections(senctionDetails){
        senctionDetails.forEach( (detail) => {
            this.sections[detail['sectionName']] = new ScoutingFormSection(detail['sectionClass'], detail['sectionTitle']);
        })  
    }

    setErrorFooter(){
        this.errorFooter = document.createElement('p');
        this.errorFooter.classList.add('ocultar', 'error');
        this.errorFooter.innerText = language.scoutingFormError1;
    }

    setSubmitBtn(){
        this.submitBtn = document.createElement('button');
        this.submitBtn.type = 'submit';
        this.submitBtn.classList.add('submit-btn');
        this.submitBtn.innerText = language.scoutingFormBtn1;
    }

    setSectionsAndQuestions(sectionDetails){
        this.sections = {};
        this.sections.generalInfo = new ScoutingFormSection('info-match');
        this.addFormSpecificSections(sectionDetails);
        this.sections.generalInfo.addQuestion(new RegionalSelector(`regional-${this.formType}`));
        this.sections.generalInfo.addQuestion(new NumericText(language.scoutingFormQuestion1, this.teamNumberInputName, '4010', 1000, 30000, language.scoutingFormError2));
        this.sections.comments = new ScoutingFormSection('comments-submit');
        this.sections.comments.addQuestion(new BigTextArea(language.scoutingFormQuestion2, `comments-${this.formType}`), 0);
        
    }

    addFormHandler(){
        const pointerToThis = this;
        this.formElement.addEventListener('submit', async function(e) {
            e.preventDefault();
            let areAllQuestionsValid = true;
            pointerToThis.errorFooter.classList.add('ocultar');
            for (const sectionName in pointerToThis.sections){
                const section = pointerToThis.sections[sectionName];
                for(const sectionQuestion of section.questions){
                    const isQuestionValid = sectionQuestion.validate();
                    areAllQuestionsValid = areAllQuestionsValid && isQuestionValid;
                }
            }
            if(!areAllQuestionsValid){
                pointerToThis.errorFooter.classList.remove('ocultar');
                return;
            }
            router.displayPage(router.pages.loading);
            const submittedForm = new FormData(e.target);
            const scoutingData = {};
            const scoutingFiles = {};
            for (const input of submittedForm.entries()){
                const key = input[0];
                const keyLastChar = key.charAt(key.length-1);
                const questionResponse = input[1];
                if(questionResponse instanceof File) {
                    scoutingFiles[key] = await pointerToThis.getScaledImage(questionResponse);
                    continue;
                }
                if(keyLastChar === ']') {
                    if(!scoutingData.hasOwnProperty(key))
                        scoutingData[key] = new Array();
                    scoutingData[key].push(questionResponse);
                } else 
                    scoutingData[key] = questionResponse;
            }
            scoutingData['createdAt'] = Date.now();
            scoutingData['createdBy'] = auth.currentUser.displayName;
            const docId = pointerToThis.getCompositeKey(scoutingData);
            const firebaseDoc = db.collection(`${Season.SEASON_NAME}-${pointerToThis.collectionLabel}`).doc(docId);
            const storageFirstEvent = storage.ref().child(storageDir);
            try {
                await firebaseDoc.set(scoutingData);
                // TODO: Fix what happens when more than one file is uploaded
                const teamNumber = pointerToThis.getTeamNumber();
                const picRef = storageFirstEvent.child(`${teamNumber}.jpg`);
                for (const key in scoutingFiles)
                    await picRef.put(scoutingFiles[key]);
                pointerToThis.errorFooter.classList.add('ocultar');
                e.target.reset();
                checkoutPage.loadSuccessPage();
            } catch (error) {
                console.error(error);
                checkoutPage.loadFailPage();
            }
        });
    }

    getTeamNumber() {
        const teamNumberInput = document.querySelector(`#${this.teamNumberInputName}`);
        const teamNumber = teamNumberInput.value;
        return teamNumber;
    }

    getCompositeKey(scoutingData){
        return '';
    }

    async getScaledImage(imgFile) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(imgFile);
            fileReader.addEventListener('load', () => {
                const imageData = fileReader.result;
                const originalImage = new Image();
                originalImage.src = imageData;
                originalImage.addEventListener('load', () => {
                    const isLandscapeImage = originalImage.width > originalImage.height;
                    const targetWidth = isLandscapeImage ? this.MAX_IMAGE_DIMENSION: this.MAX_IMAGE_DIMENSION * originalImage.width / originalImage.height;
                    const targetHeight = isLandscapeImage ? this.MAX_IMAGE_DIMENSION * originalImage.height / originalImage.width: this.MAX_IMAGE_DIMENSION;
                    const canvas = document.createElement('canvas');
                    const canvasCtx = canvas.getContext('2d');
                    canvas.width = targetWidth;
                    canvas.height = targetHeight;
                    canvasCtx.drawImage(originalImage, 0, 0, targetWidth, targetHeight);
                    canvas.toBlob(
                        blob => {
                            if(blob)
                                resolve(blob);
                            else
                                reject('Error scaling image');
                        },
                        'image/jpeg',
                        0.7);
                });
            });
        })
    }
}
