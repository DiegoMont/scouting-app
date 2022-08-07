class AppRouter extends Router {
    constructor(){
        super();
        this.pages.formSubmitted = {htmlContainer: document.getElementById('form-submitted')};
        this.pages.loading = {htmlContainer: document.getElementById('loading-wheel')};
        this.pages.matchScouting = {htmlContainer: document.getElementById('scouting-match')};
        this.pages.pitScouting = {htmlContainer: document.getElementById('scouting-pit')};
        this.pages.results = {
            htmlContainer: document.getElementById('results'),
            setupPage: fetchResults
        };
    }
}