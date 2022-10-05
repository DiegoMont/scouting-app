class Question {
    static HTML_NAME_REGEX = new RegExp(/^[-A-Za-z\d_]+$/)

    text
    _name
    _errorMessages

    constructor(text, name, erroMsg) {
        this.text = text
        this.name = name
        this.errorMessages = new Array()
        this.errorMessages.push(erroMsg)
    }

    get name() {
        return this._name
    }

    set name(name) {
        if(Question.HTML_NAME_REGEX.test(name))
            this._name = name
        else
            throw new InvalidHTMLNameError()
    }

    getErrorMessage(index) {
        return this._errorMessages[index]
    }

    addErrorMessage(errorMsg) {
        if(errorMsg == undefined || errorMsg.length == 0)
            throw new EmptyErrorMessageError()
        this.errorMessages.push(errorMsg)
    }

    isValid() {
        return false
    }
}

class SingleInputQuestion extends Question {
    _id
    placeholder
    value

    constructor(text, name, erroMsg) {
        super(text, name, erroMsg)
    }
}

class MultipleInputsQuestion extends Question {
    inputs

    constructor(text, name, erroMsg) {
        super(text, name, erroMsg)
    }

    addInput(data) {
        try {
            const isValidHtmlId = Question.HTML_NAME_REGEX.test(data.id)
            const isValidValue = data.value.length > 0
            if(!isValidHtmlId || !isValidValue)
                throw new InvalidInputDataError()
        } catch (error) {
            throw new InvalidInputDataError()
        }
    }
}