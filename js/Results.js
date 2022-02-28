let resultsListenerAdded = false;
const teams = {};
const teamMatches = {};
const matchTableBody = document.querySelector('#match-table tbody');
const pitTableBody = document.querySelector('#pit-table tbody');
const matchTableHeaders = ['team-number', 'match-number', 'auto-park', 'barcode', 'barriers[]', 'capping', 'driver-ability[]', 'duck-delivery-auto', 'duck-delivery-end', 'level-one', 'level-two', 'level-three', 'storage-freight', 'shared-hub', 'preloaded-freight', 'comments', 'regional'];
const pitTableHeaders = ['team-number', 'chasis', 'intake', 'cargo', 'vision', 'sensores', 'proyecto-social', 'redes-sociales', 'caracteristicas', 'patrocinadores', 'finanzas', 'comments', 'regional'];

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
                fillPitTable(teamInfo);
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
                fillMatchTable(matchInfo);
                updateResults(teamNumber);
            }
        });
    });
}

const formatResultTables = function() {
    const matchHeaderRow = getRow(matchTableHeaders);
    document.querySelector('#match-table thead').appendChild(matchHeaderRow);
    const pitHeaderRow = getRow(pitTableHeaders);
    document.querySelector('#pit-table thead').appendChild(pitHeaderRow);
}

const fillMatchTable = function(match) {
    const values = matchTableHeaders.map(key => match[key]);
    const matchRow = getRow(values);
    matchTableBody.appendChild(matchRow);
}

const fillPitTable = function(pit) {
    const values = pitTableHeaders.map(key => pit[key]);
    const pitRow = getRow(values);
    pitTableBody.appendChild(pitRow);
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
