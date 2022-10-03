class Question {
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
        const validHTMLNameRegex = new RegExp(/^[-A-Za-z\d_]+$/)
        if(validHTMLNameRegex.test(name))
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
}