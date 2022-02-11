const router = new Router();

addListenersToBtns();
router.openMenu();

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
}
