class SelectQuestion extends MultipleOptionQuestion {
    constructor(text, name) {
        super(text, name)
    }

    addOption(data) {
        if(!data.value)
            throw new InvalidOptionDataError()
        this.options.push(data)
    }
}