class ScoutingForm {

    form;
    sections;

    constructor(formSelector){
        this.form = document.querySelector(formSelector);
        this.sections = {};
        this.sections.generalInfo = new ScoutingFormSection('info-match');
        this.addFormSpecificSections();
        this.sections.generalInfo.addQuestion(new RegionalSelector());
        this.sections.generalInfo.addQuestion(new NumericText('Equipo', 'team-number', '', '4010'));
        this.sections.comments = new ScoutingFormSection('comments-submit');
    }

    renderSections(){
        for (const sectionName in this.sections){
            const section = this.sections[sectionName];
            section.renderQuestions();
            this.form.appendChild(section.container);
        }
    }

    addFormSpecificSections(){}
}

class MatchScoutingForm extends ScoutingForm {

    constructor(form){
        super(form);
        this.sections.generalInfo.addQuestion(new NumericText('Match', 'match-number', '', '1'));
    }

    addFormSpecificSections(){
        this.sections.autonomous = new ScoutingFormSection('autonomous-info', 'Autonomous');
        this.sections.teleop = new ScoutingFormSection('teleop-info', 'Driver-Controlled');
    }
}

class PitScoutingForm extends ScoutingForm {
    constructor(form){
        super(form);
    }
}

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
