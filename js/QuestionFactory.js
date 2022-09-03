const bigTextAreaInputer = new QuestionInputer(
    'Descripción larga',
    function (question, container) {
        const minLength = this.getLabelAndInput('Largo mínimo de la respuesta', question.minValueLength, 'min-ans-length', '10');
        container.appendChild(minLength);
})

const QuestionFactory = [bigTextAreaInputer];