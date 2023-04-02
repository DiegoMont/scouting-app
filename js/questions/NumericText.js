class NumericText extends Question {

    maxValue;
    minValue;

    constructor(question, name, placeholder, minValue, maxValue, error=language.questionError3){
        super('', name, error);
        this.maxValue = maxValue;
        this.minValue = minValue;
        this.questionContainer = document.createElement('div');
        this.inputs[0] = this.getInput(placeholder);
        const label = this.getLabel(question);
        this.questionContainer.appendChild(label);
        this.questionContainer.appendChild(this.inputs[0]);
    }

    addToContainer(container){
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