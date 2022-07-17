const PASS = '';
const AUTH_KEY = 'bNJqFAQfrW';
const AUTH_VALUE = 'TuUaweAjxK';

const addLoginFormHandler = function() {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const password = loginForm['password'].value;
        if(password === PASS){
            localStorage.setItem(AUTH_KEY, AUTH_VALUE);
            grantAccess();
        }
        else
            document.querySelector("#login .error").classList.remove('ocultar');
    });
}

const grantAccess = function(){
    if(AUTH_VALUE === localStorage.getItem(AUTH_KEY))
        router.displayPage(router.pages.menu)
}
