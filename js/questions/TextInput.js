class TextInput extends Question {

    MAX_WORDS_LIMIT = 15;

    minAnswerWords;
    errorMinWords;

    constructor(question, name, placeholder, minAnswerWords, error=language.questionError7){
        super('', name, error);
        this.minAnswerWords = minAnswerWords;
        this.errorMinWords = error;
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
        const wordCount = this.countWords(text);
        if(wordCount < this.minAnswerWords)
            this.error.innerText = this.errorMinWords;
        else if(wordCount > this.MAX_WORDS_LIMIT)
            this.error.innerText = language.questionError2;
        else {
            this.hideError();
            return true;
        }
        this.showError();
        return false;
    }
}