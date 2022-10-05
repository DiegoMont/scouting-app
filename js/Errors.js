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

class PossibleTooLargeTextError extends Error {
    constructor() {
        super("An answer with this length could cause visualization problems, it's better to use a TextQuestion instead")
    }
}