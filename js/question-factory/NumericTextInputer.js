class NumericTextInputer extends QuestionInputer {
    constructor() {
        super('Ingresar número');
    }

    formSetter(question, inputsContainer) {
        this.addQuestionPropertyInput(inputsContainer, 'Texto placeholder', question.inputs[0].placeholder, 'placeholder', 100);
        this.addQuestionPropertyInput(inputsContainer, 'Límite menor del número', question.minValue, 'text-count-min-val', 0);
        this.addQuestionPropertyInput(inputsContainer, 'Límite máximo del número', question.maxValue, 'text-count-max-val', 100);
    }

    getNewQuestionInstance() {
        return new NumericText('', '', 100, 0, 100);
    }

    updateQuestionProperties(question, newData) {
        question.inputs[0].placeholder = newData.get('placeholder');
        question.maxValue = newData.get('text-count-max-val');
        question.minValue = newData.get('text-count-min-val');
    }
}