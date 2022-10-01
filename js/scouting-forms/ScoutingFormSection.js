class ScoutingFormSection {

    className;
    container;
    questions;
    sectionTitle;
    title;

    constructor(className, title=''){
        this.questions = new Array();
        this.className = className;
        this.title = title;
        this.container = document.createElement('div');
        this.renderSectionView();
    }

    addQuestion(question){
        this.questions.push(question);
        question.addToContainer(this.container);
    }

    renderQuestions(){
        this.renderSectionView();
        for (const question of this.questions)
            question.addToContainer(this.container);
    }

    renderSectionView() {
        this.container.innerHTML = '';
        this.container.classList.add(this.className, 'form-centre');
        this.sectionTitle = this.title;
        if(this.sectionTitle !== '') {
            const sectionTitle = document.createElement('h1');
            sectionTitle.innerText = this.sectionTitle;
            this.container.appendChild(sectionTitle);
        }
    }
}