let resultsListenerAdded = false;
const teams = {};
const teamMatches = {};
const table = document.querySelector('#results-table tbody');
const tableHeaders = ['team-number', 'match-number', 'auto-park', 'barcode', 'barriers[]', 'capping', 'driver-ability[]', 'duck-delivery-auto', 'duck-delivery-end', 'level-one', 'level-two', 'level-three', 'storage-freight', 'shared-hub', 'preloaded-freight', 'comments', 'regional'];

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
                fillTable(matchInfo);
                updateResults(teamNumber);
            }
        });
    });
}

const formatResultTables = function() {
    const headerRow = getRow(tableHeaders);
    document.querySelector('#results-table thead').appendChild(headerRow);
}

const fillTable = function(match) {
    const values = tableHeaders.map(key => match[key]);
    const matchRow = getRow(values);
    table.appendChild(matchRow);
}

const updateResults = function(teamNumber){
    // TODO: Implement method
    console.log(teams[teamNumber]);
    console.log(teamMatches[teamNumber]);
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
