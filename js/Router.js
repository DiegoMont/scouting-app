class Router {

    pages;

    constructor(){
        this._pages = {
            formSubmittedPage: document.getElementById('form-submitted'),
            loginPage: document.getElementById('login'),
            matchScoutingPage: document.getElementById('scouting-match'),
            menuPage: document.getElementById('menu'),
            pitScoutingPage: document.getElementById('scouting-pit'),
            resultsPage: document.getElementById('results')
        }
    }

    closePages(){
        for (const page in this.pages) {
            page.classList.remove('mostrar');
        }
    }

    openFormSubmitted(){
        this._pages.formSubmittedPage.classList.add('mostrar');
    }

    openLogin(){
        this._pages.loginPage.classList.add('mostrar');
    }

    openMatchScouting(){
        this._pages.matchScoutingPage.classList.add('mostrar');
    }

    openMenu(){
        this._pages.menuPage.classList.add('mostrar');
    }

    openPitScouting(){
        this._pages.pitScoutingPage.classList.add('mostrar');
    }

    openResults(){
        this._pages.resultsPage.classList.add('mostrar');
    }

}