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
        this.closePages();
        this._pages.formSubmittedPage.classList.add('mostrar');
    }

    openLogin(){
        this.closePages();
        this._pages.loginPage.classList.add('mostrar');
    }

    openMatchScouting(){
        this.closePages();
        this._pages.matchScoutingPage.classList.add('mostrar');
    }

    openMenu(){
        this.closePages();
        this._pages.menuPage.classList.add('mostrar');
    }

    openPitScouting(){
        this.closePages();
        this._pages.pitScoutingPage.classList.add('mostrar');
    }

    openResults(){
        this.closePages();
        this._pages.resultsPage.classList.add('mostrar');
    }

}