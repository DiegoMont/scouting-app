class ShortTextQuestion extends TextQuestion {
    static MAX_TEXT_LENGTH = 40
    constructor(text, name) {
        super(text, name)
    }

    setMaxLimitAndError(maxValue, error) {
        if(maxValue > ShortTextQuestion.MAX_TEXT_LENGTH)
            throw new PossibleTooLargeTextError()
        this.maxValueLimit = maxValue
        this.addErrorMessage('max-limit', error)
    }
}