class Router {

    pages;

    constructor() {
        this.pages = {
            loading: {htmlContainer: document.getElementById('loading-wheel')},
            login: {htmlContainer: document.getElementById('login')},
            menu: {htmlContainer: document.getElementById('menu')}
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
