class NumericTextQuestion extends CounterQuestion {
    constructor(text, name) {
        super(text, name)
    }

    setMinLimitAndError(minValue, error) {
        this.minValueLimit = minValue
        this.addErrorMessage('min-limit', error)
    }

    setMaxLimitAndError(maxValue, error) {
        this.maxValueLimit = maxValue
        this.addErrorMessage('max-limit', error)
    }

    /* getError() {
        if(this.value < this.minValueLimit)
            return this.getErrorMessage('min-limit')
        else if(this.value > this.maxValueLimit)
            return this.getErrorMessage('max-limit')
        else
            return null
    } */
}