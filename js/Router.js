class Router {

    pages;

    constructor(){
        this.pages = {
            formSubmitted: {htmlContainer: document.getElementById('form-submitted')},
            loading: {htmlContainer: document.getElementById('loading-wheel')},
            login: {htmlContainer: document.getElementById('login')},
            matchScouting: {htmlContainer: document.getElementById('scouting-match')},
            menu: {htmlContainer: document.getElementById('menu')},
            pitScouting: {htmlContainer: document.getElementById('scouting-pit')},
            results: {
                htmlContainer: document.getElementById('results'),
                setupPage: fetchResults
            }
        }
    }

    displayPage(page) {
        this.closePages();
        page.htmlContainer.classList.add('mostrar');
        if(page.setupPage)
            page.setupPage()
    }

    closePages(){
        for (const pageName in this.pages)
            this.pages[pageName].htmlContainer.classList.remove('mostrar');
    }

}
