class FormBuilderController {
    editingForm;
    formElement;

    constructor() {
        this.formElement = document.querySelector('#form-builder .scouting-form form');
    }

    openForm() {
        this.formElement.innerHTML = '';
        this.editingForm.formElement = this.formElement;
        this.editingForm.renderSections();
        router.displayPage(router.pages.scoutingFormBuilder);
    }
}