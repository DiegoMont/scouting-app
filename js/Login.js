const PASS = '';
const AUTH_KEY = 'bNJqFAQfrW';
const AUTH_VALUE = 'TuUaweAjxK';

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
    console.log(user);
    if(user)
        router.displayPage(router.pages.menu);
    else
        router.displayPage(router.pages.login);
}