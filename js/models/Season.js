class Season {
    events
    id
    name
    matchForm
    pitForm

    constructor(seasonName, events) {
        this.name = seasonName
        this.events= events
        this.matchForm = new MatchScoutingForm(this.events)
        this.pitForm = new PitScoutingForm(this.events)
    }
}