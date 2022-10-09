class Question {
    static HTML_NAME_REGEX = new RegExp(/^[-A-Za-z\d_]+$/)

    text
    _name
    _errorMessages

    constructor(text, name) {
        this.text = text
        this.name = name
        this.errorMessages = {}
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

    getErrorMessage(key) {
        return this._errorMessages[key]
    }

    addErrorMessage(key, errorMsg) {
        if(errorMsg == undefined || errorMsg.length == 0)
            throw new EmptyErrorMessageError()
        this.errorMessages[key] = errorMsg
    }
}