const form = document.querySelector('form');
const seccionErrores = document.querySelector('#errores');

form.addEventListener('submit', function(e) {
    clearErrorMessages();
    if(!validar())
        e.preventDefault();
});

const clearErrorMessages = function(){
    seccionErrores.innerHTML = '';
}

const addError = function(error_msg){
    const error = document.createElement('p')
    error.classList.add('error');
    error.innerText = error_msg;
    seccionErrores.appendChild(error);
}
