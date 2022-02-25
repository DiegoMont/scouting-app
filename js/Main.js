const router = new Router();
const loginForm = document.querySelector('#login form');
const matchForm = new MatchScoutingForm('#scouting-match form');
const pitForm = new PitScoutingForm('#scouting-pit form');
const checkoutPage = new FormCheckout(router);


addListenersToBtns();
addLoginFormHandler();
createMatchForm();
createPitForm();
formatResultTables();
router.openLogin();
grantAccess();


function addListenersToBtns() {
    document.getElementById('btn-menu-head').addEventListener('click', function() {
        router.openMenu();
    });

    document.getElementById('to-match-btn').addEventListener('click', function() {
        router.openMatchScouting();
    });

    document.getElementById('to-pit-btn').addEventListener('click', function() {
        router.openPitScouting();
    });

    document.getElementById('to-results-btn').addEventListener('click', function() {
        router.openResults();
    });

    document.getElementById('return-to-match-btn').addEventListener('click', function() {
        router.openMatchScouting();
    });

    document.getElementById('return-to-pit-btn').addEventListener('click', function() {
        router.openPitScouting();
    });

    document.getElementById('to-statistics-btn').addEventListener('click', function() {
        router.openResults();
    });
}
