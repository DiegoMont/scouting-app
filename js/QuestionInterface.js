class ScoutingFormElement {
    addToContainer(){
        throw Error;
    }
}

class Question extends ScoutingFormElement {

    _error;
    _inputs;
    _name;
    _question;
    _questionContainer;

    constructor(questionTxt, name, error){
        super();
        this.error = error;
        this._inputs = new Array();
        this.name = name;
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

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
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
        container.appendChild(this.questionContainer);
        container.appendChild(this.error);
    }

    validate(){
        console.error('Method not implemented');
        return true;
    }

    hideError(){
        this.error.classList.add('ocultar');
    }

    showError(){
        this.error.classList.remove('ocultar');
    }
}
