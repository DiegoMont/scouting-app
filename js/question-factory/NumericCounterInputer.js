class NumericCounterInputer extends QuestionInputer {
    constructor() {
        super('Contador numérico');
    }

    formSetter(question, inputsContainer) {
        this.addQuestionPropertyInput(inputsContainer, 'Límite menor del contador', question.minValue, 'counter-min-val', 0);
        this.addQuestionPropertyInput(inputsContainer, 'Límite máximo del contador', question.maxValue, 10);
    }

    getNewQuestionInstance() {
        return new NumericCounter('', '', 0, 5);
    }

    updateQuestionProperties(question, newData) {
        question.minValueLength = newData.get('min-ans-length');
    }
}