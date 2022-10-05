class InvalidHTMLNameError extends Error {
    constructor () {
        super('Invalid HTML name')
    }
}

class EmptyErrorMessageError extends Error {
    constructor() {
        super("The error message can't be an empty string")
    }
}

class InvalidInputDataError extends Error {
    constructor() {
        super("There is missing information to create the input")
    }
}