class ScoutingForm {

    errorFooter;
    formElement;
    formType;
    sections;
    submitBtn;
    collectionLabel;

    constructor(formQuerySelector, formType, sectionDetails, regionals){
        this.formElement = document.querySelector(formQuerySelector);
        this.formType = formType;
        this.setErrorFooter();
        this.setSubmitBtn();
        this.setSectionsAndQuestions(sectionDetails, regionals);
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
        this.errorFooter.innerText = "Hay errores en algunas preguntas";
    }

    setSubmitBtn(){
        this.submitBtn = document.createElement('button');
        this.submitBtn.type = 'submit';
        this.submitBtn.classList.add('submit-btn');
        this.submitBtn.innerText = 'Enviar';
    }

    setSectionsAndQuestions(sectionDetails, regionals){
        this.sections = {};
        this.sections.generalInfo = new ScoutingFormSection('info-match');
        this.addFormSpecificSections(sectionDetails);
        this.sections.generalInfo.addQuestion(new RegionalSelector(`regional-${this.formType}`, regionals));
        this.sections.generalInfo.addQuestion(new NumericText('Equipo', `team-number-${this.formType}`, '4010', 1000, 30000, 'El número de equipo no es válido'));
        this.sections.comments = new ScoutingFormSection('comments-submit');
        this.sections.comments.addQuestion(new BigTextArea('Comentarios', `comments-${this.formType}`), 0);
        
    }

    addFormHandler(){
        const pointerToThis = this;
        this.formElement.addEventListener('submit', function(e) {
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
            for (const input of submittedForm.entries()){
                const key = input[0];
                const keyLastChar = key.charAt(key.length-1);
                if(keyLastChar === ']') {
                    if(!scoutingData.hasOwnProperty(key))
                        scoutingData[key] = new Array();
                    scoutingData[key].push(input[1]);
                } else 
                    scoutingData[key] = input[1];
            }
            scoutingData['createdAt'] = Date.now();
            scoutingData['createdBy'] = auth.currentUser.displayName;
            const docId = pointerToThis.getCompositeKey(scoutingData);
            const firebaseDoc = db.collection(`${Season.SEASON_NAME}-${pointerToThis.collectionLabel}`).doc(docId);
            firebaseDoc.set(scoutingData).then(() => {
                pointerToThis.errorFooter.classList.add('ocultar');
                e.target.reset();
                checkoutPage.loadSuccessPage();
            }).catch(error => {
                console.log(error);
                checkoutPage.loadFailPage();
            });
        });
    }

    getCompositeKey(scoutingData){
        return '';
    }
}
