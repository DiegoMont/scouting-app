class CounterQuestion extends SingleInputQuestion {
    maxValueLimit
    minValueLimit
    
    constructor(text, name) {
        super(text, name)
    }

    getError() {
        return null
    }
}