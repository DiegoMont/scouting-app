const PASS = '';
const AUTH_KEY = 'bNJqFAQfrW';
const AUTH_VALUE = 'TuUaweAjxK';

const logoutBtn = document.querySelector('#btn-logout');

const addLoginFormHandler = function() {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).catch(error => {
            console.log(error);
        });
    });
}

const handleAuthStatus = function(user) {
    if(user) {
        router.displayPage(router.pages.menu);
        logoutBtn.style.visibility = 'visible';
    } else {
        router.displayPage(router.pages.login);
        logoutBtn.style.visibility = 'hidden';
    }
}