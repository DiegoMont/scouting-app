class Router {

    pages;

    constructor(){
        this.pages = {
            formSubmittedPage: document.getElementById('form-submitted'),
            loginPage: document.getElementById('login'),
            matchScoutingPage: document.getElementById('scouting-match'),
            menuPage: document.getElementById('menu'),
            pitScoutingPage: document.getElementById('scouting-pit'),
            resultsPage: document.getElementById('results')
        }
    }

    closePages(){
        for (const pageName in this.pages)
            this.pages[pageName].classList.remove('mostrar');
    }
    
    openFormSubmitted(){
        this.closePages();
        this.pages.formSubmittedPage.classList.add('mostrar');
    }

    openLogin(){
        this.closePages();
        this.pages.loginPage.classList.add('mostrar');
    }

    openMatchScouting(){
        this.closePages();
        this.pages.matchScoutingPage.classList.add('mostrar');
    }

    openMenu(){
        this.closePages();
        this.pages.menuPage.classList.add('mostrar');
    }

    openPitScouting(){
        this.closePages();
        this.pages.pitScoutingPage.classList.add('mostrar');
    }

    openResults(){
        this.closePages();
        this.pages.resultsPage.classList.add('mostrar');
        fetchResults();
    }

}
