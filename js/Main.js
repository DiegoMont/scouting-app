const router = new AppRouter();
const loginForm = document.querySelector('#login form');
const matchForm = new MatchScoutingForm('#scouting-match form', ['Monterrey']);
const pitForm = new PitScoutingForm('#scouting-pit form', ['Monterrey']);
const checkoutPage = new FormCheckout(router);


addListenersToBtns();
addLoginFormHandler();
createMatchForm();
createPitForm();
matchForm.addFormHandler();
pitForm.addFormHandler();
formatResultTables();
auth.onAuthStateChanged(handleAuthStatus);
logoutBtn.addEventListener('click', () => auth.signOut())
// Quitar antes de subir a producción
const repo = new SeasonRepository();
const season = new Season('Stronghold', ['Monterrey']);
season.pitForm = pitForm;
season.matchForm = matchForm;
repo.toFirestore(season);
// Quitar antes de subir a producción


function addListenersToBtns() {
    document.getElementById('btn-menu-head').addEventListener('click', function() {
        router.displayPage(router.pages.menu);
    });

    document.getElementById('to-match-btn').addEventListener('click', function() {
        router.displayPage(router.pages.matchScouting);
    });

    document.getElementById('to-pit-btn').addEventListener('click', function() {
        router.displayPage(router.pages.pitScouting);
    });

    document.getElementById('to-results-btn').addEventListener('click', function() {
        router.displayPage(router.pages.results);
    });

    document.getElementById('return-to-match-btn').addEventListener('click', function() {
        router.displayPage(router.pages.matchScouting);
    });

    document.getElementById('return-to-pit-btn').addEventListener('click', function() {
        router.displayPage(router.pages.pitScouting);
    });

    document.getElementById('to-statistics-btn').addEventListener('click', function() {
        router.displayPage(router.pages.results);
    });
}
