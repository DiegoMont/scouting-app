class BigTextArea extends Question {

    maxWordsLimit;
    minWordsLimit;
    errorMinWords;
    wordLimitExceededMsg;

    constructor(question, name, minWordsLimit, error=language.questionError1){
        super('', name, error);
        this.wordLimitExceededMsg = language.questionError2;
        this.minWordsLimit = minWordsLimit;
        this.errorMinWords = error;
        this.maxWordsLimit = 100;
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
        const wordCount = this.countWords(this.inputs[0].value);
        if(wordCount < this.minWordsLimit)
            this.error.innerText = this.errorMinWords;
        else if(wordCount > this.maxWordsLimit)
            this.error.innerText = this.wordLimitExceededMsg;
        else {
            this.hideError();
            return true;
        }
        this.showError();
        return false;
    }
}