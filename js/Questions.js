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


class NumericCounter extends Question {
    minValue;

    constructor(question, name, minValue, maxValue){
        super(question, name, '');
        this.questionContainer = document.createElement('div');
        this.questionContainer.classList.add('flexbox', 'contador');
        this.minValue = minValue;
        this.setInput();
        const addBtn = this.getButton('aumentar', 'add');
        const substractBtn = this.getButton('restar', 'minus');
        const aux = this.inputs[0];
        addBtn.addEventListener('click', function() {
            let num = Number(aux.value);
            num++;
            aux.value = Math.min(num, maxValue);
        });
        substractBtn.addEventListener('click', function() {
            let num = Number(aux.value);
            num--;
            aux.value = Math.max(num, minValue);
        });
        this.questionContainer.appendChild(substractBtn);
        this.questionContainer.appendChild(this.inputs[0]);
        this.questionContainer.appendChild(addBtn);
    }

    getButton(className, imgName){
        const btn = document.createElement('button');
        btn.classList.add('btn-symbol', className);
        btn.type = 'button';
        const img = document.createElement('img');
        img.src = `img/${imgName}.svg`;
        btn.appendChild(img);
        return btn;
    }

    setInput(){
        this.inputs[0] = document.createElement('input');
        this.inputs[0].type = 'number';
        this.inputs[0].name = this.name;
        this.inputs[0].id = this.name;
        this.inputs[0].value = this.minValue;
        this.inputs[0].classList.add('cifra-contador');
    }

    validate(){
        this.inputs[0].value = Number(this.inputs[0].value);
        if (isNaN(this.inputs[0].value))
            this.inputs[0].value = this.minValue;
        return true;
    }
}


class NumericText extends Question {

    maxValue;
    minValue;

    constructor(question, name, placeholder, minValue, maxValue, error='Valor no válido'){
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


class Slider extends Question {
    maxValue;
    minValue;
    step;

    constructor(question, name, minValue, maxValue, step){
        super(question, name, '');
        this.maxValue = maxValue;
        this.minValue = minValue;
        this.step = step;
        this.setQuestion();
    }

    setQuestion() {
        this.questionContainer = document.createElement('div');
        const input = document.createElement('input')
        input.type = 'range';
        input.name = this.name;
        input.min = this.minValue;
        input.max = this.maxValue;
        input.step = this.step
        input.value = this.minValue;
        const valueIndicator = document.createElement('p');
        valueIndicator.innerHTML = input.value;
        this.questionContainer.appendChild(valueIndicator);
        this.questionContainer.appendChild(input);
        input.addEventListener('input', function() {
            valueIndicator.innerText = input.value;
        });
    }

    validate() {
        return true;
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

    validate(){
        const isAnyInputSelected = this.inputs.some(input => input.checked);
        if(isAnyInputSelected)
            this.hideError();
        else
            this.showError();
        return isAnyInputSelected;
    }
}


class RadioWithText extends Question {
    constructor(question, name, error='Debes seleccionar una opción'){
        super(question, name, error);
        this.questionContainer = document.createElement('div');
        this.questionContainer.classList.add('checkbox-texto');
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


class RegionalSelector extends Question {

    constructor(id){
        super('', 'regional', '');
        this.questionContainer = document.createElement('div');
        this.inputs[0] = this.getSelect(id);
        const label = this.getLabel(id);
        this.questionContainer.appendChild(label);
        this.questionContainer.appendChild(this.inputs[0]);
    }

    addToContainer(container){
        container.appendChild(this.questionContainer);
    }

    getLabel(id){
        const label = document.createElement('label');
        label.for = id;
        label.innerText = 'Regional';
        return label;
    }

    getSelect(id){
        const select = document.createElement('select');
        select.name = this.name;
        select.id = id;
        for (const regional of Season.REGIONALES) {
            const regionalOption = document.createElement('option');
            regionalOption.value = regional;
            regionalOption.innerText = regional;
            select.appendChild(regionalOption);
        }
        return select;
    }
    validate(){
        return true;
    }
}


class TextInput extends Question {

    MAX_LENGTH_VALUE = 40;

    minValueLength;
    errorMinLength;

    constructor(question, name, placeholder, minAnswerLength, error='Esta respuesta es muy corta'){
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
            this.error.innerText = 'Resume la información un poco más';
        else {
            this.hideError();
            return true;
        }
        this.showError();
        return false;
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


class ScoutName extends BigTextArea {
    constructor(name='scout-name'){
        super('Hecho por', name, 3, "Indica tu nombre");
        this.maxValueLength = 15;
        this.questionContainer.classList.remove("big-text-question");
    }

    getInput(name){
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Nombre';
        input.name = name;
        input.id = name;
        input.classList.add('scout-name');
        return input;
    }
}
