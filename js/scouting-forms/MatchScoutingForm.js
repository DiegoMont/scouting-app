class MatchScoutingForm extends ScoutingForm {

    constructor(formQuerySelector){
        super(formQuerySelector,
             'match',
              [{sectionName:'autonomous', sectionTitle:'Autonomous', sectionClass: 'autonomous-info' },
               {sectionName:'teleop', sectionTitle:'Driver-Controlled', sectionClass: 'teleop-info' } 
            ]);
        this.sections.generalInfo.addQuestion(new NumericText('Match', 'match-number', '1', 1, 99, 'El número de match no es válido'));
        const allianceSelection = new RadioWithText('Allianza', 'alliance-color');
        allianceSelection.addInput({id: "blue-alliance", value: "Azul"});
        allianceSelection.addInput({id: "red-alliance", value: "Roja"});
        this.sections.generalInfo.addQuestion(new ScoutName());
        this.sections.generalInfo.addQuestion(allianceSelection);
        this.typeData = 'matches';
    }

    getCompositeKey(scoutingData){
        const teamNumber = scoutingData[`team-number-${this.formType}`];
        const matchNum = scoutingData['match-number'];
        return `${teamNumber}-${matchNum}`;
    }
}