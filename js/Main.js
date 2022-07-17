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
router.displayPage(router.pages.login);
grantAccess();


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
