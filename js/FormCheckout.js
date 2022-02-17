class FormCheckout {
    SUCCESS_MSG = 'Se ha guardado exitosamente. Gracias!';
    SUCCESS_IMG = 'img/checkout/bb8.jpg';

    FAIL_MSG = 'Error: Unable to save data';
    FAIL_IMG = 'img/checkout/josejosememe.jpg'

    title;
    img;
    router;

    constructor(router){
        this.title = document.querySelector('#form-submitted h1');
        this.img = document.querySelector('#form-submitted img');
        this.router = router;
    }

    loadSuccessPage(){
        this.title.innerText = this.SUCCESS_MSG;
        this.img.src = this.SUCCESS_IMG;
        this.router.openFormSubmitted();
    }

    loadFailPage(){
        this.title.innerText = this.FAIL_MSG;
        this.img.src = this.FAIL_IMG;
        this.router.openFormSubmitted();
    }

}
