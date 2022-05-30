let resultsListenerAdded = false;
const teams = {};
const teamMatches = {};
const matchTableHeaders = [];
const pitTableHeaders = [];
const resultCardsContainer = document.querySelector('#result-cards');
const matchTableBody = document.querySelector('#match-table tbody');
const pitTableBody = document.querySelector('#pit-table tbody');

const formatResultTables = function() {
    setHeadersFromForm(matchForm, matchTableHeaders);
    setHeadersFromForm(pitForm, pitTableHeaders);
    const matchHeaderRow = getRow(matchTableHeaders);
    document.querySelector('#match-table thead').appendChild(matchHeaderRow);
    const pitHeaderRow = getRow(pitTableHeaders);
    document.querySelector('#pit-table thead').appendChild(pitHeaderRow);
}

const fetchResults = function() {
    if(resultsListenerAdded)
        return;
    addChangeListener();
    resultsListenerAdded = true;
}

const addChangeListener = function() {
    const collectionData = [
        {form: pitForm, teamNumberKey:'team-number-pit', tableBody: pitTableBody, tableHeader: pitTableHeaders, dataHandling: (teamNumber, teamInfo) => teams[teamNumber] = teamInfo},
        {form: matchForm, teamNumberKey:'team-number-match', tableBody: matchTableBody, tableHeader: matchTableHeaders, dataHandling: (teamNumber, matchInfo) => teamMatches[teamNumber].push(matchInfo)}];
    collectionData.forEach( data =>{
        db.collection(`${Season.SEASON_NAME}-${data['form'].typeData}`).orderBy('createdAt').onSnapshot(snapshot => {
            const changes = snapshot.docChanges();
            changes.forEach(change => {
                if(change.type == 'added' || change.type == 'modified'){
                    const info = change.doc.data();
                    const teamNumber = info[data['teamNumberKey']];
                    if(!teamMatches.hasOwnProperty(teamNumber))
                        teamMatches[teamNumber] = new Array();
                    data.dataHandling(teamNumber, info);
                    addRowToTable(data['tableBody'], info, data['tableHeader']);
                    updateResults(teamNumber);
                }
            });
        });
    })
}

const updateResults = function(teamNumber){
    const teamStats = new TeamStats(teams[teamNumber], teamMatches[teamNumber]);
    const oldCard = document.getElementById(`card-${teamNumber}`);
    if(oldCard != undefined)
        oldCard.remove();
    resultCardsContainer.appendChild(teamStats.getCard());
}

const setHeadersFromForm = function(form, headersList) {
    for (const sectionName in form.sections) {
        const formSection = form.sections[sectionName];
        for (const question of formSection.questions)
            headersList.push(question.name);
    }
}

const getRow = function(list){
    const tableRow = document.createElement('tr');
    for (const data of list) {
        const cell = document.createElement('td');
        cell.innerText = data;
        tableRow.appendChild(cell);
    }
    return tableRow;
}

const addRowToTable = function(table, dataObject, headers) {
    const values = headers.map(key => dataObject[key]);
    const row = getRow(values);
    table.appendChild(row);
}
