class QuestionInputer {
    questionName;
    questionClass;

    constructor(name, questionClass) {
        this.questionName = name;
        this.questionClass = questionClass;
    }

    renderQuestionEditor(question) {
        const editorContainer = document.querySelector('#question-editor');
        const headerContent = `<div class="question-editor-header flexbox"><h3>${this.questionName}</h3><button class="text-yellow-btn" type="submit">Actualizar</button></div>`;
        editorContainer.innerHTML = headerContent;
        const inputContainer = document.createElement('div');
        inputContainer.classList.add('inputs');
        this.addQuestionInputs(question, inputContainer);
        editorContainer.appendChild(inputContainer);
        const aux = this;
        editorContainer.addEventListener('submit', function(e) {
            e.preventDefault();
            const questionNewValues = new FormData(e.target);
            question.question = questionNewValues.get('question-text');
            question.name = questionNewValues.get('html-name');
            question.error = questionNewValues.get('error-txt');
            aux.updateQuestionProperties(question, questionNewValues);
            formBuilder.renderForm();
        });
    }

    formSetter() {
        throw Error();
    }

    getNewQuestionInstance() {
        throw Error();
    }

    updateQuestionProperties(question, newData) {
        throw Error();
    }

    addQuestionInputs(question, inputsContainer) {
        const questionText = this.getLabelAndInput('Pregunta', question.question.innerText, 'question-text');
        const questionHtmlName = this.getLabelAndInput('Valor de la propiedad name', question.name, 'html-name');
        const questionError = this.getLabelAndInput('Texto de mensaje de error', question.error.innerText, 'error-txt', 'Error');
        inputsContainer.appendChild(questionText[0]);
        inputsContainer.appendChild(questionText[1]);
        inputsContainer.appendChild(questionHtmlName[0]);
        inputsContainer.appendChild(questionHtmlName[1]);
        inputsContainer.appendChild(questionError[0]);
        inputsContainer.appendChild(questionError[1]);
        this.formSetter(question, inputsContainer);
    }

    getLabelAndInput(labelText, value, id, placeholder) {
        const label = document.createElement('label');
        label.htmlFor = id;
        label.innerText = labelText;
        const input = document.createElement('input');
        input.type = 'text';
        input.id = id;
        input.name = id;
        input.value = value;
        input.placeholder = placeholder ? placeholder: labelText;
        return [label, input];
    }
}