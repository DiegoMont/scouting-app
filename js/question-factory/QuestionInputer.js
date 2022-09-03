class QuestionInputer {
    questionName;
    questionClass;

    constructor(name, questionClass) {
        this.questionName = name;
        this.questionClass = questionClass;
    }

    renderQuestionEditor(question, editorContainer) {
        const headerContent = `<div class="question-editor-header flexbox"><h3>${this.questionName}</h3><button class="text-yellow-btn" type="submit">Actualizar</button></div>`;
        editorContainer.innerHTML = headerContent;
        const inputContainer = document.createElement('div');
        inputContainer.classList.add('inputs');
        this.addQuestionInputs(question, editorContainer);
        editorContainer.appendChild(inputContainer);
    }

    formSetter() {
        throw Error();
    }

    getNewQuestionInstance() {
        throw Error();
    }

    addQuestionInputs(question, inputsContainer) {
        const questionText = this.getLabelAndInput('Pregunta', question.question, 'question-text');
        const questionHtmlName = this.getLabelAndInput('Valor de la propiedad name', question.name, 'html-name');
        const questionError = this.getLabelAndInput('Texto de mensaje de error', question.error, 'error-txt', 'Error');
        inputsContainer.appendChild(questionText);
        inputsContainer.appendChild(questionHtmlName);
        inputsContainer.appendChild(questionError);
        this.formSetter(question, inputContainer);
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