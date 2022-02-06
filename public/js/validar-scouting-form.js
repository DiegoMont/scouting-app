const form = document.querySelector('form');
const seccionErrores = document.querySelector('#errores');

form.addEventListener('submit', function(e) {
    clearErrorMessages();
    validar();
    if(seccionErrores.innerText != "")
        e.preventDefault();
});

const clearErrorMessages = function(){
    seccionErrores.innerHTML = '';
}

const addError = function(errorMsg){
    const error = document.createElement('p')
    error.classList.add('error');
    error.innerText = errorMsg;
    seccionErrores.appendChild(error);
}
