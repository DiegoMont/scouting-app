class MediaUpload extends Question {
    is_optional;
    constructor(question, name, is_optional=true) {
        super(question, name, language.questionError8);
        this.is_optional = is_optional;
        const input = this.getInput(name);
        this.inputs.push(input);
        this.questionContainer = input;
    }

    validate() {
        if(this.is_optional)
            return this.is_optional;
        else {
            
        }
    }

    getInput(name) {
        const input = document.createElement('input');
        input.type = 'file';
        input.name = name;
        input.id = name;
        return input;
    }
}