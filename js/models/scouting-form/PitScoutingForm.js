class PitScoutingForm extends ScoutingForm {
    constructor(events) {
        super(events)
        this.sections.engineering = new ScoutingFormSection(ActiveLanguageStrings.ENGINEERING_SECTION_TITLE)
        this.sections.team = new ScoutingFormSection(ActiveLanguageStrings.TEAM_SECTION_TITLE)
    }
}