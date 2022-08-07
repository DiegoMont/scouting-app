const router = new FormEditorRouter();
const loginForm = document.querySelector('#login form');
const seasons = [
    new Season('Freight Frenzy'),
    new Season('Rapid React')
]


addListenersToBtns();
addLoginFormHandler();
auth.onAuthStateChanged(handleAuthStatus);
logoutBtn.addEventListener('click', () => auth.signOut())
controlDashboard();


function addListenersToBtns() {
    
}
