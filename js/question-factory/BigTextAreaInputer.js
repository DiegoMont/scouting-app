class BigTextAreaInputer extends QuestionInputer {
    constructor() {
        super('Descripción larga');
    }

    formSetter(question, inputsContainer) {
        const minLength = this.getLabelAndInput('Largo mínimo de la respuesta', question.minValueLength, 'min-ans-length', '10');
        inputsContainer.appendChild(minLength[0]);
        inputsContainer.appendChild(minLength[1]);
    }

    getNewQuestionInstance() {
        return new BigTextArea('', '', 5);
    }

    updateQuestionProperties(question, newData) {
        question.minValueLength = newData.get('min-ans-length');
    }
}