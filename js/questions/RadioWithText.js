class RadioWithText extends Question {

    inputData;

    constructor(question, name, error='Debes seleccionar una opción'){
        super(question, name, error);
        this.questionContainer = document.createElement('div');
        this.questionContainer.classList.add('checkbox-texto');
        this.inputData = new Array();
    }

    toFirestore() {
        const questionObject = super.toFirestore();
        questionObject.inputData = this.inputData;
        return questionObject;
    }

    addInput(inputData){
        const input = this.getInput(inputData);
        const label = this.getLabel(inputData);
        this.inputData.push(inputData);
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
        label.innerText = labelData.value;
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

class CheckboxWithText extends RadioWithText {
    constructor(question, name, error='Debes seleccionar al menos una opción'){
        super(question, name + '[]', error);
    }

    getInput(inputData){
        const input = super.getInput(inputData);
        input.type = 'checkbox';
        return input;
    }
}

class FieldZones extends CheckboxWithText {

    fieldImg;

    constructor(question, name, zones, fieldMap, error='Elige al menos una zona'){
        super(question, name, error);
        this.setFieldImg(fieldMap);
        this.addInputs(zones);
    }

    toFirestore() {
        const questionObject = super.toFirestore();
        questionObject.fieldImg = this.fieldImg.src;
        return questionObject;
    }

    addToContainer(container){
        container.appendChild(this.fieldImg);
        super.addToContainer(container);
    }

    addInputs(zones){
        for (const zone of zones)
            this.addInput({
                id: `${this.name}-${zone}`,
                value: zone
            });
    }

    setFieldImg(src){
        this.fieldImg = document.createElement('img');
        this.fieldImg.classList.add('field-img');
        this.fieldImg.src = src;
    }
}

