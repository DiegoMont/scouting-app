class FormBuilderController {
    editingForm;
    formElement;
    questionOrderSection;

    constructor() {
        this.questionOrderSection = document.querySelector('#section-order');
        this.formElement = document.querySelector('#form-builder .scouting-form form');
    }

    openForm() {
        this.renderForm();
        router.displayPage(router.pages.scoutingFormBuilder);
    }

    renderForm() {
        this.formElement.innerHTML = '';
        this.editingForm.formElement = this.formElement;
        this.editingForm.renderSections();
        this.setQuestionOrderSection();
    }

    setQuestionOrderSection() {
        this.questionOrderSection.innerHTML = '';
        console.log(Object.keys(this.editingForm.sections));
        this.displaySection(Object.keys(this.editingForm.sections)[1]);
        this.displaySection(Object.keys(this.editingForm.sections)[2]);
    }

    displaySection(formSection) {
        const sectionContainer = document.createElement('div');
        const newQuestionForm = document.createElement('form');
        newQuestionForm.classList.add('new-question-form', 'flexbox');
        this.questionOrderSection.appendChild(sectionContainer);
        sectionContainer.appendChild(newQuestionForm);
        this.setupNewQuestionForm(newQuestionForm, formSection);
    }

    setupNewQuestionForm(form, sectionKey) {
        const title = document.createElement('h2');
        title.innerText = this.editingForm.sections[sectionKey].sectionTitle;
        const inputContainer = document.createElement('div');
        const questionSelect = document.createElement('select');
        questionSelect.classList.add('question-type');
        for (let i = 0; i < QuestionFactory.length; i++) {
            const questionType = QuestionFactory[i];
            const option = document.createElement('option');
            option.value = i;
            option.innerText = questionType.questionName;
            questionSelect.appendChild(option);
        }
        const addQuestionBtn = document.createElement('button');
        addQuestionBtn.classList.add('text-yellow-btn');
        addQuestionBtn.type = 'button';
        addQuestionBtn.innerText = 'Añadir pregunta';
        inputContainer.appendChild(questionSelect);
        inputContainer.appendChild(addQuestionBtn);
        form.appendChild(title);
        form.appendChild(inputContainer);
    }
}