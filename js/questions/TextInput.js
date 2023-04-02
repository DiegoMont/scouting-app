class TextInput extends Question {

    MAX_LENGTH_VALUE = 40;

    minValueLength;
    errorMinLength;

    constructor(question, name, placeholder, minAnswerLength, error=language.questionError7){
        super('', name, error);
        this.minValueLength = minAnswerLength;
        this.errorMinLength = error;
        this.questionContainer = document.createElement('div');
        this.questionContainer.classList.add('input-texto');
        const label = this.getLabel(question, name);
        const input = this.getInput(name, placeholder);
        this.inputs.push(input);
        this.questionContainer.appendChild(label);
        this.questionContainer.appendChild(input);
    }

    getLabel(questionTxt, name){
        const label = document.createElement('label');
        label.htmlFor = name;
        label.innerText = questionTxt;
        return label;
    }

    getInput(name, placeholder){
        const input = document.createElement('input');
        input.type = 'text';
        input.name = name;
        input.id = name;
        input.placeholder = placeholder;
        return input;
    }

    validate(){
        const text = this.inputs[0].value;
        if(text.length < this.minValueLength)
            this.error.innerText = this.errorMinLength;
        else if(text.length > this.MAX_LENGTH_VALUE)
            this.error.innerText = language.questionError2;
        else {
            this.hideError();
            return true;
        }
        this.showError();
        return false;
    }
}