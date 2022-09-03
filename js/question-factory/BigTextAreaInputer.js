class BigTextAreaInputer extends QuestionInputer {
    constructor() {
        super('Descripción larga');
    }

    formSetter(question, inputsContainer) {
        const minLength = this.getLabelAndInput('Largo mínimo de la respuesta', question.minValueLength, 'min-ans-length', '10');
        container.appendChild(minLength);
    }

    getNewQuestionInstance() {
        return new BigTextArea('', '', 5);
    }
}