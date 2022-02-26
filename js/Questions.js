class BigTextArea extends Question {

    minValueLength;
    errorMinLength;

    constructor(question, name, minLength, error='Ingresa más información'){
        super('', name, error);
        this.minValueLength = minLength;
        this.errorMinLength = error;
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
        else if(textLength > 255)
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
    constructor(question, name, minValue, maxValue){
        super(question, name, '');
        this.questionContainer = document.createElement('div');
        this.questionContainer.classList.add('flexbox', 'contador');
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
        this.inputs[0].value = 0;
        this.inputs[0].classList.add('cifra-contador');
    }

    validate(){
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

    static REGIONALES = [
        'Toluca',
        'Monterrey'
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

// Parte para los results
class ResultText extends Question {
    constructor(question, name, classDiv, error=''){
        super(question, name, error);
        this.questionContainer = document.createElement('div');
        this.questionContainer.classList.add(classDiv);
        this.questionContainer.innerText = '';
    }
}

class ResultsWithImages extends Question {
    constructor(question, name, classL, error='Debes seleccionar una opción'){
        super(question, name, error);
        this.questionContainer = document.createElement('div');
        this.questionContainer.classList.add(classL, 'flexbox');
    }

    addInput(inputData){
        const input = this.getImg(inputData);
        this.inputs.push(input);
        this.questionContainer.appendChild(input);
    }

    getImg(labelData){
        const img = document.createElement('img');
        img.src = labelData.img;

        return img
    }
}

