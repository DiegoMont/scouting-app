class TextQuestion extends SingleInputQuestion {
    maxTextLength
    minTextLength

    constructor(text, name) {
        super(text, name)
    }

    setMaxLengthAndError(length, error) {
        this.maxTextLength = length
        this.addErrorMessage('max-length', error)
    }

    setMinLengthAndError(length, error) {
        this.minTextLength = length
        this.addErrorMessage('min-length', error)
    }

    getError() {
        if(this.value.length > this.maxTextLength)
            return this.getErrorMessage('max-length')
        else if(this.value.length < this.minTextLength)
            return this.getErrorMessage('min-length')
        else
            return null
    }
}