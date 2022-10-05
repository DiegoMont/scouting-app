class TextOptionQuestion extends MultipleOptionQuestion {
    constructor(text, name) {
        super(text, name)
    }

    addInput(data) {
        try {
            const isValidOptionText = data.optionText.length > 100
            if(!isValidOptionText)
                throw new InvalidInputDataError()
        } catch (error) {
            throw new InvalidInputDataError()
        }
    }

    getError() {
        return null
    }
}   