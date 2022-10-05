class MultipleInputsQuestion extends Question {
    inputs

    constructor(text, name) {
        super(text, name)
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