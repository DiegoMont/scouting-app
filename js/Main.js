const router = new Router();
const matchForm = new MatchScoutingForm('#scouting-match form');
const pitForm = new PitScoutingForm('#scouting-pit form');

addListenersToBtns();
createMatchForm();
createPitForm();
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

function createMatchForm() {
    matchForm.sections.autonomous.addQuestion(new RadioWithImages('Ojito'));
    matchForm.renderSections();
}

function createPitForm() {
    
}
