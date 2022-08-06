const loginForm = document.querySelector('#login form');


addListenersToBtns();
addLoginFormHandler();
auth.onAuthStateChanged(handleAuthStatus);
logoutBtn.addEventListener('click', () => auth.signOut())


function addListenersToBtns() {
    
}
