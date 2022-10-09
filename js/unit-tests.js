const VALID_HTML_NAME = 'aSAbc_bc-123'
const question = new Question('Pregunta', VALID_HTML_NAME, 'Error')
console.assert(question.name === VALID_HTML_NAME, 'Should be a valid HTML name')

let nameError
try {
    new Question('Question', 'nombre invalido', 'Error')
} catch (error) {
    nameError = error
}
console.assert(nameError instanceof InvalidHTMLNameError, 'Should throw an exception')

let emptyErrorMsgError
try {
    question.addErrorMessage('')
} catch (e) {
    emptyErrorMsgError = e
}
console.assert(emptyErrorMsgError instanceof EmptyErrorMessageError)

const powerPlay = new Season('Power Play', ['Monterrey', 'Fresno', 'Toluca'])