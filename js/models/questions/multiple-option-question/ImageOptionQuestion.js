class ImageOptionQuestion extends MultipleOptionQuestion {
    constructor(text, name) {
        super(text, name)
    }

    addOption(data) {
        super.addOption(data)
        if(!data.image)
            throw new InvalidOptionDataError()
        this.options.push(data)
    }
}