class NumericText extends Question {

    maxValue;
    minValue;

    constructor(question, name, placeholder, minValue, maxValue, error='Valor no válido'){
        super(question, name, error);
        this.maxValue = maxValue;
        this.minValue = minValue;
        this.questionContainer = document.createElement('div');
        this.inputs[0] = this.getInput(placeholder);
    }

    toFirestore() {
        const questionObject = super.toFirestore();
        questionObject.placeholder = this.inputs[0].placeholder;
        questionObject.maxValue = this.maxValue;
        questionObject.minValue = this.minValue;
        return questionObject;
    }

    addToContainer(container){
        this.questionContainer.innerHTML = '';
        const label = this.getLabel(this.question.innerText);
        this.questionContainer.appendChild(label);
        this.questionContainer.appendChild(this.inputs[0]);
        container.appendChild(this.questionContainer);
        container.appendChild(this.error);
    }

    getLabel(labelTxt){
        const label = document.createElement('label');
        label.htmlFor = this.name;
        label.innerText = labelTxt;
        return label;
    }

    getInput(placeholder){
        const numericInput = document.createElement('input');
        numericInput.type = 'number';
        numericInput.name = this.name;
        numericInput.id = this.name;
        numericInput.placeholder = placeholder;
        numericInput.inputMode = 'numeric';
        return numericInput;
    }

    validate(){
        const num = Number(this.inputs[0].value);
        if(num < this.minValue || num > this.maxValue){
            this.showError();
            return false;
        } else {
            this.hideError();
            return true;
        }
    }
}