class MatchScoutingForm extends ScoutingForm {
    constructor(events) {
        super(events)
        this.sections.autonomous = new ScoutingFormSection(ActiveLanguageStrings.AUTONOMOUS_SECTION_TITLE)
        this.sections.teleop = new ScoutingFormSection(ActiveLanguageStrings.TELEOP_SECTION_TITLE)
        this.addMatchInfoQuestions()
    }

    addMatchInfoQuestions() {
        const matchNum = new NumericTextQuestion(ActiveLanguageStrings.MATCH_NUMBER_QUESTION_LABEL, 'match-number')
        const alliance = new TextOptionQuestion(ActiveLanguageStrings.ALLIANCE_QUESTION_LABEL, 'alliance')
        this.sections.teleop.questions.push(matchNum)
        this.sections.teleop.questions.push(alliance)
        alliance.addOption({
            id: 'red-alliance',
            value: ActiveLanguageStrings.RED_ALLIANCE_TEXT,
            optionText: ActiveLanguageStrings.RED_ALLIANCE_TEXT
        })
        alliance.addOption({
            id: 'blue-alliance',
            value: ActiveLanguageStrings.BLUE_ALLIANCE_TEXT,
            optionText: ActiveLanguageStrings.BLUE_ALLIANCE_TEXT
        })
    }
}