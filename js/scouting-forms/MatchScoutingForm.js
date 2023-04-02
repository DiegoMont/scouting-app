class MatchScoutingForm extends ScoutingForm {

    constructor(formQuerySelector){
        super(formQuerySelector,
             'match',
              [{sectionName:'autonomous', sectionTitle:'Autonomous', sectionClass: 'autonomous-info' },
               {sectionName:'teleop', sectionTitle:'Driver-Controlled', sectionClass: 'teleop-info' } 
            ]);
        this.sections.generalInfo.addQuestion(new NumericText('Match', 'match-number', '1', 1, 99, language.scoutingFormError3));
        const allianceSelection = new RadioWithText(language.scoutingFormQuestion3, 'alliance-color');
        allianceSelection.addInput({id: "blue-alliance", value: language.scoutingFormQuestion4});
        allianceSelection.addInput({id: "red-alliance", value: language.scoutingFormQuestion5});
        this.sections.generalInfo.addQuestion(allianceSelection);
        this.collectionLabel = 'matches';
    }

    getCompositeKey(scoutingData){
        const teamNumber = scoutingData[`team-number-${this.formType}`];
        const matchNum = scoutingData['match-number'];
        return `${teamNumber}-${matchNum}`;
    }
}