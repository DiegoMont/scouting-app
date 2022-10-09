class MultipleOptionQuestion extends Question {
    options

    constructor(text, name) {
        super(text, name)
        this.options = []
    }

    addOption(data) {
        try {
            const isValidHtmlId = Question.HTML_NAME_REGEX.test(data.id)
            const isValidValue = data.value.length > 0
            if(!isValidHtmlId || !isValidValue)
                throw new InvalidOptionDataError()
        } catch (error) {
            throw new InvalidOptionDataError()
        }
    }
}