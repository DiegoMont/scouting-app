class ImageOptionQuestion extends MultipleOptionQuestion {
    constructor(text, name) {
        super(text, name)
    }

    addInput(data) {
        try {
            if(!data.image)
                throw new InvalidInputDataError()
        } catch (error) {
            throw new InvalidInputDataError()
        }
    }
}