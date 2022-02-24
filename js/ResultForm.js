class ResultForm {

    errorFooter;
    form;
    sections;
    searchBtn;
    typeData;

    constructor(formSelector){
        this.form = document.querySelector(formSelector);
    
        this.setSearchBtn();
        this.setSectionsAndQuestions();
        this.addFormHandler();
    }

    renderSections(){
        for (const sectionName in this.sections){
            const section = this.sections[sectionName];
            section.renderQuestions();
            this.form.appendChild(section.container);
        }
        this.sections.comments.container.appendChild(this.searchBtn);
    }

    addFormSpecificSections(){}

    // Boton para buscar
    setSearchBtn(){
        this.searchBtn = document.createElement('button');
        this.searchBtn.type = 'button';
        this.searchBtn.classList.add('search-btn');
        this.searchBtn.innerText = 'Buscar';
    }

    // Header para buscar numero de equipo
    setSectionsAndQuestions(){
        this.sections = {};
        this.sections.generalInfo = new ResultFormSection('info-match');
        this.sections.comments = new ResultFormSection('fetch-results');
        this.addFormSpecificSections();
        this.sections.generalInfo.addQuestion(new NumericText('Equipo', 'team-number', '4010', 1000, 30000, 'El número de equipo no es válido'));
    }

    addFormHandler(){
    
        this.searchBtn.addEventListener('click', function(e) {
            console.log(':D')
            console.log(document.getElementById('team-number').value)
        });

        
        
    }
}

class ResultingForm extends ResultForm {

    constructor(form){
        super(form);
    }

    addFormSpecificSections(){
        this.sections.autonomous = new ResultFormSection('autonomous-info', 'Team');
    }
}

class ResultFormSection {

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
