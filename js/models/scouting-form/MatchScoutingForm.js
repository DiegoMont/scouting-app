class MatchScoutingForm extends ScoutingForm {
    constructor(events) {
        super(events)
        this.sections.autonomous = new ScoutingFormSection(ActiveLanguageStrings.AUTONOMOUS_SECTION_TITLE)
        this.sections.teleop = new ScoutingFormSection(ActiveLanguageStrings.TELEOP_SECTION_TITLE) 
    }
}