class PitScoutingForm extends ScoutingForm {
    constructor(formQuerySelector){
        super(formQuerySelector,
             'pit',
             [{sectionName:'engineering', sectionTitle: language.scoutingFormSectionTitle1, sectionClass: 'autonomous-info' },
               {sectionName:'team', sectionTitle: language.scoutingFormSectionTitle2, sectionClass: 'teleop-info' } 
            ]);
        this.collectionLabel = 'teams';
    }

    getCompositeKey(scoutingData){
        const teamNumber = scoutingData[`team-number-${this.formType}`];
        return `${teamNumber}`;
    }
}