class RadioWithImages extends Question {
    constructor(question, name, error='Debes seleccionar una opción'){
        super(question, name, error);
        this.questionContainer = document.createElement('div');
        this.questionContainer.classList.add('image-label-container', 'flexbox');
    }

    addInput(inputData){
        const input = this.getInput(inputData);
        const label = this.getLabel(inputData);
        this.inputs.push(input);
        this.questionContainer.appendChild(input);
        this.questionContainer.appendChild(label);
    }

    getInput(inputData){
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = this.name;
        input.id = inputData.id;
        input.value = inputData.value;
        return input;
    }

    getLabel(labelData){
        const label = document.createElement('label');
        label.classList.add('btn');
        label.htmlFor = labelData.id;
        const img = document.createElement('img');
        img.src = labelData.img;
        label.appendChild(img);
        return label;
    }

    validate(){
        const isAnyInputSelected = this.inputs.some(input => input.checked);
        if(isAnyInputSelected)
            this.hideError();
        else
            this.showError();
        return isAnyInputSelected;
    }
}

class CheckboxWithImages extends RadioWithImages {
    constructor(question, name, error='Debes seleccionar al menos una opción'){
        super(question, name + '[]', error);
    }

    getInput(inputData){
        const input = super.getInput(inputData);
        input.type = 'checkbox';
        return input;
    }
}

class TrueFalseButtons extends RadioWithImages {
    constructor(question, name, trueVal, falseVal, error){
        super(question, name, error);
        this.addInput({
            id: `${name}yes`,
            value: trueVal,
            img: 'img/tick.svg'
        });
        this.addInput({
            id: `${name}no`,
            value: falseVal,
            img: 'img/cancel.svg'
        });
        this.inputs[0]
    }

    getLabel(labelData){
        const label = super.getLabel(labelData);
        label.classList.add('btn-bool');
        return label;
    }
}
