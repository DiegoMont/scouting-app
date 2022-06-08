class PitScoutingForm extends ScoutingForm {
    constructor(formQuerySelector){
        super(formQuerySelector,
             'pit',
             [{sectionName:'engineering', sectionTitle:'Ingeniería', sectionClass: 'autonomous-info' },
               {sectionName:'team', sectionTitle:'Finanzas y comunicación', sectionClass: 'teleop-info' } 
            ]);
        this.typeData = 'teams';
    }

    getCompositeKey(scoutingData){
        const teamNumber = scoutingData[`team-number-${this.formType}`];
        return `${teamNumber}`;
    }
}