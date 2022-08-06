class BigTextArea extends Question {

    maxValueLength;
    minValueLength;
    errorMinLength;

    constructor(question, name, minLength, error='Ingresa más información'){
        super('', name, error);
        this.minValueLength = minLength;
        this.errorMinLength = error;
        this.maxValueLength = 300;
        this.questionContainer = document.createElement('div');
        this.questionContainer.classList.add('big-text-question');
        const input = this.getInput(name);
        const label = this.getLabel(question, name);
        this.inputs.push(input);
        this.questionContainer.appendChild(label);
        this.questionContainer.appendChild(input);
    }

    getInput(name){
        const input = document.createElement('textarea');
        input.name = name;
        input.id = name;
        return input;
    }

    getLabel(question, name){
        const label = document.createElement('label');
        label.htmlFor = name;
        label.innerText = question;
        return label;
    }

    validate(){
        const textLength = this.inputs[0].value.length;
        if(textLength < this.minValueLength)
            this.error.innerText = this.errorMinLength;
        else if(textLength > this.maxValueLength)
            this.error.innerText = 'Resume la información un poco más';
        else {
            this.hideError();
            return true;
        }
        this.showError();
        return false;
    }
}