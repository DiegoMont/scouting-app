class FormEditorRouter extends Router {
    constructor() {
        super();
        this.pages.editSeason = {
            htmlContainer: document.getElementById('edit-season')
        };
    }
}