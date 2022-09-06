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

    displaySection(formSectionKey) {
        const formSection = this.editingForm.sections[formSectionKey];
        const sectionContainer = document.createElement('div');
        const newQuestionForm = document.createElement('form');
        const questionBtnsContainer = document.createElement('div');
        newQuestionForm.classList.add('new-question-form', 'flexbox');
        questionBtnsContainer.classList.add('questions');
        this.questionOrderSection.appendChild(sectionContainer);
        sectionContainer.appendChild(newQuestionForm);
        this.setupNewQuestionForm(newQuestionForm, formSectionKey);
        const instancePtr = this;
        newQuestionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const chosenQuestionIndex = e.currentTarget.querySelector('.question-type').value;
            const questionTemplate = QuestionFactory[chosenQuestionIndex];
            const question = questionTemplate.getNewQuestionInstance();
            formSection.addQuestion(question);
            instancePtr.setQuestionOrderSection();
            questionTemplate.renderQuestionEditor(question);
        });
        for(const question of formSection.questions) {
            this.addQuestionMenu(question, questionBtnsContainer);
        }
        sectionContainer.appendChild(questionBtnsContainer);
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
        addQuestionBtn.type = 'submit';
        addQuestionBtn.innerText = 'Añadir pregunta';
        inputContainer.appendChild(questionSelect);
        inputContainer.appendChild(addQuestionBtn);
        form.appendChild(title);
        form.appendChild(inputContainer);
    }

    addQuestionMenu(question, container) {
        const questionMenu = document.createElement('div');
        questionMenu.className = 'question-menu';
        const editBtn = document.createElement('button');
        editBtn.type = 'button';
        editBtn.classList.add('question-text');
        editBtn.innerText = question.question.innerText;
        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.innerHTML = '<img src="../img/trash.png" alt="Delete question">';
        const upBtn = document.createElement('button');
        upBtn.type = 'button';
        upBtn.innerHTML = '<img class="up-caret" src="../img/caret.png" alt="Put question above">';
        const downBtn = document.createElement('button');
        downBtn.type = 'button';
        downBtn.innerHTML = '<img class="down-caret" src="../img/caret.png" alt="Put question below">';
        container.appendChild(questionMenu);
        questionMenu.appendChild(editBtn);
        questionMenu.appendChild(deleteBtn);
        questionMenu.appendChild(upBtn);
        questionMenu.appendChild(downBtn);
    }
}