class ScoutingForm {
    sections

    constructor(events) {
        this.sections = {}
        this.setGeneralInfoSection(events)
        this.setCommentsSection()
    }

    setCommentsSection() {
        this.sections.comments = new ScoutingFormSection('')
        const commentsQuestion = new TextQuestion(ActiveLanguageStrings.COMMENTS_SECTION_TITLE, 'comments')
        this.sections.comments.questions.push(commentsQuestion)
    }

    setGeneralInfoSection(events) {
        this.sections.generalInfo = new ScoutingFormSection('')
        const teamNumber = new SelectQuestion(ActiveLanguageStrings.TEAM_NUMBER_QUESTION_LABEL, 'team-number')
        const regionalSelector = new SelectQuestion(ActiveLanguageStrings.REGIONAL_SELECTOR_TEXT, 'regional')
        this.sections.generalInfo.questions.push(regionalSelector)
        this.sections.generalInfo.questions.push(teamNumber)
        for (const event of events) {
            const option = {value: event}
            regionalSelector.addOption(option)
        }
    }
}