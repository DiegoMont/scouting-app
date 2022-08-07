class PitScoutingForm extends ScoutingForm {
    constructor(formQuerySelector, regionals){
        super(formQuerySelector,
             'pit',
             [{sectionName:'engineering', sectionTitle:'Ingeniería', sectionClass: 'autonomous-info' },
               {sectionName:'team', sectionTitle:'Finanzas y comunicación', sectionClass: 'teleop-info' } 
            ],
            regionals);
        this.collectionLabel = 'teams';
    }

    getCompositeKey(scoutingData){
        const teamNumber = scoutingData[`team-number-${this.formType}`];
        return `${teamNumber}`;
    }
}