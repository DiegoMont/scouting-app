class ScoutingFormElement {
    addToContainer(){
        throw Error;
    }
}

class Question extends ScoutingFormElement {

    _error;
    _inputs;
    _question;
    _questionContainer;

    constructor(questionTxt, error){
        super();
        this.error = error;
        this._inputs = new Array();
        this.question = questionTxt;
    }

    get error(){
        return this._error;
    }

    set error(errorMsg){
        this._error = document.createElement('p');
        this._error.classList.add('ocultar', 'error');
        this._error.innerText = errorMsg;
    }

    get inputs(){
        return this._inputs;
    }

    get question(){
        return this._question;
    }

    set question(question){
        this._question = document.createElement('p');
        this._question.innerText = question;
    }

    get questionContainer(){
        return this._questionContainer;
    }

    set questionContainer(container){
        this._questionContainer = container;
    }

    addInput(){
        throw Error();
    }

    addToContainer(container){
        container.appendChild(this.question);
        container.appendChild(this.error);
        container.appendChild(this.questionContainer);
    }
}

class RadioWithImages extends Question {
    constructor(question, error='Debes seleccionar una opción'){
        super(question, error);
        this.questionContainer = document.createElement('div');
        this.questionContainer.classList.add('radio-imagenes', 'flexbox');
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
        input.classList.add(ocultar);
        input.type = 'radio';
        input.name = inputData.id;
        input.id = inputData.id;
        input.value = inputData.value;
        return input;
    }

    getLabel(labelData){
        const label = document.createElement(label);
        label.classList.add('img-opc', 'btn');
        label.for = 'labelData.';
        const img = document.createElement('img');
        img.src = labelData.img;
        label.appendChild(img);
        return label;
    }
}
