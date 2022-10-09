class TextOptionQuestion extends MultipleOptionQuestion {
    constructor(text, name) {
        super(text, name)
    }

    addOption(data) {
        super.addOption(data)
        if(!data.optionText)
            throw new InvalidOptionDataError()
        this.options.push(data)
    }
}   