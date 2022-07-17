class ScoutingFormSection {

    container;
    questions;

    constructor(className, title=''){
        this.questions = new Array();
        this.container = document.createElement('div');
        this.container.classList.add(className, 'form-centre');
        if(title !== '') {
            const sectionTitle = document.createElement('h1');
            sectionTitle.innerText = title;
            this.container.appendChild(sectionTitle);
        }
    }

    addQuestion(question){
        this.questions.push(question);
        question.addToContainer(this.container);
    }

    renderQuestions(){
        for (const question of this.questions)
            question.addToContainer(this.container);
    }
}