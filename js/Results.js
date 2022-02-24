let resultsListenerAdded = false;
const teams = {};
const teamMatches = {};

const fetchResults = function() {
    if(resultsListenerAdded)
        return;
    addChangeListener();
    resultsListenerAdded = true;
}

const addChangeListener = function() {
    db.collection(`${Season.SEASON_NAME}-${pitForm.typeData}`).orderBy('createdAt').onSnapshot(snapshot => {
        const changes = snapshot.docChanges();
        changes.forEach(change => {
            if(change.type == 'added'){
                const teamInfo = change.doc.data();
                const teamNumber = teamInfo['team-number'];
                teams[teamNumber] = teamInfo;
                updateResults(teamNumber);
            }
        });
    });
    db.collection(`${Season.SEASON_NAME}-${matchForm.typeData}`).orderBy('createdAt').onSnapshot(snapshot => {
        const changes = snapshot.docChanges();
        changes.forEach(change => {
            if(change.type == 'added'){
                const matchInfo = change.doc.data();
                const teamNumber = matchInfo['team-number'];
                if(!teamMatches.hasOwnProperty(teamNumber))
                    teamMatches[teamNumber] = new Array();
                teamMatches[teamNumber].push(matchInfo);
                updateResults(teamNumber);
            }
        });
    });
}

const updateResults = function(teamNumber){
    // TODO: Implement method

    console.log(teams[teamNumber]);
    console.log(teamMatches[teamNumber]);

}

// Create Results Form
function createResults() {
    // Para la tarjeta

    const powerCells = new RadioWithText('Power Cells', 'power-cells');
    resultForm.sections.autonomous.addQuestion(powerCells);

    const promedio = new RadioWithText('Promedio', 'promedio-avg');
    resultForm.sections.autonomous.addQuestion(promedio);

    const highestScore = new RadioWithText('Highest Score', 'highest-score');
    resultForm.sections.autonomous.addQuestion(highestScore);

    const switchGenerator = new RadioWithImages('Switch Generator', 'switch-generator');
    switchGenerator.addInput({
        id: 'switch-generator-state',
        img: 'img/robot-roto.jpg'
    });
    resultForm.sections.autonomous.addQuestion(switchGenerator);

    // Render Forms
    resultForm.renderSections();
}
