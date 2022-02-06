const form = document.querySelector('form');
const seccionErrores = document.querySelector('#errores');

form.addEventListener('submit', function(e) {
    clearErrorMessages();
    validarCamposGenericos();
    validar();
    if(seccionErrores.innerText != "")
        e.preventDefault();
});

const clearErrorMessages = function(){
    seccionErrores.innerHTML = '';
}

const validarCamposGenericos = function(){
    validarNumeroEquipo();
}

const validarNumeroEquipo = function(){
    const equipo = document.getElementById('team-number');
    if(equipo.value < 1000)
        addError('El número de equipo es incorrecto');
}

const addError = function(errorMsg){
    const error = document.createElement('p')
    error.classList.add('error');
    error.innerText = errorMsg;
    seccionErrores.appendChild(error);
}
