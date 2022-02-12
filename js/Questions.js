class NumericText extends Question {
    constructor(question, name, error, placeholder, minValue, maxValue){
        super('', name, error);
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
        label.for = this.name;
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
}


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
}


class RegionalSelector extends Question {

    static REGIONALES = [
        ['monterrey', 'Monterrey']
    ];

    constructor(){
        super('', 'regional', '');
        this.questionContainer = document.createElement('div');
        this.inputs[0] = this.getSelect();
        const label = this.getLabel();
        this.questionContainer.appendChild(label);
        this.questionContainer.appendChild(this.inputs[0]);
    }

    addToContainer(container){
        container.appendChild(this.questionContainer);
    }

    getLabel(){
        const label = document.createElement('label');
        label.for = this.name;
        label.innerText = 'Regional';
        return label;
    }

    getSelect(){
        const select = document.createElement('select');
        select.name = this.name;
        select.id = this.name;
        for (const regional of RegionalSelector.REGIONALES) {
            const regionalOption = document.createElement('option');
            regionalOption.value = regional[0];
            regionalOption.innerText = regional[1];
            select.appendChild(regionalOption);
        }
        return select;
    }
}


class CheckboxWithImages extends RadioWithImages {
    constructor(question, name, error='Debes seleccionar al menos una opción'){
        super(question, name, error);
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
