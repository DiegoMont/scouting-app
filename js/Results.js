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
                
                // See Results
                console.log(teams[teamNumber]);
                console.log(teamMatches[teamNumber]);
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
                
                // See Results
                console.log(teams[teamNumber]);
                console.log(teamMatches[teamNumber]);
            }
        });
    });
}


const updateResults = function(teamNumber, teamN_Matches){
    const teamInfo = teams[teamNumber];
    const teamMatch = teamMatches[teamNumber];

    console.log(teamInfo);
    console.log(teamMatch);

    // If TeamNumber
    if (teamNumber && (teamNumber in teams || teamNumber in teamMatches)){
        document.querySelector('#results .team-info h1').innerHTML = `Team ${teamNumber}`;
        
        if (teamMatch) document.querySelector('#results .team-info .numberofmatches-text').innerHTML = `${teamMatch.length}`;
        else document.querySelector('#results .team-info .numberofmatches-text').innerHTML = '0';

        if(teamInfo.chasis == 'Omnidireccional') document.querySelector('#results .team-info .image-label-container img').src = 'img/chasis/Omni.jpg';
        else if (teamInfo.chasis == 'Mecanum') document.querySelector('#results .team-info .image-label-container img').src = 'img/chasis/Omni.jpg';
        else if (teamInfo.chasis == 'West Coast') document.querySelector('#results .team-info .image-label-container img').src = 'img/chasis/West_Coast.jpg';
        else document.querySelector('#results .team-info .image-label-container img').src = 'img/Confused-Robot.jpg';

        document.querySelector('#results .team-info .intake-text').innerHTML = teamInfo.intake; // Tipo de Intake
        document.querySelector('#results .team-info .boxes-text').innerHTML = teamInfo.undefined; // Puede Tomar Cargos y Boxes
        document.querySelector('#results .team-info .vision-text').innerHTML = teamInfo.vision; // Vision
        document.querySelector('#results .team-info .sensores-text').innerHTML = teamInfo.sensores; // Sensores

    } else {
        document.querySelector('#results .team-info h1').innerHTML = `Team ${teamNumber}`; 
        document.querySelector('#results .team-info .image-label-container img').src = 'img/Confused-Robot.jpg';
        document.querySelector('#results .team-info .intake-text').innerHTML = '';
        document.querySelector('#results .team-info .boxes-text').innerHTML = '';
        document.querySelector('#results .team-info .vision-text').innerHTML = '';
        document.querySelector('#results .team-info .sensores-text').innerHTML = '';
    }

    // If MatchNumber
    if (teamNumber && teamN_Matches && teamN_Matches > 0){
        document.querySelector('#results .matches-info h1').innerHTML = `Match ${teamN_Matches}`;
   
        if(teamMatch[teamN_Matches-1]['duck-delivery-auto'] == 'Delivers Duck') document.querySelector('#results .matches-info .delivers-duck-auto-container img').src = 'img/duck.jpg';
        else document.querySelector('#results .matches-info .delivers-duck-auto-container img').src = 'img/robot-roto.jpg';
        
        document.querySelector('#results .matches-info .preloaded-freight-text').innerHTML = teamMatch[teamN_Matches-1]['preloaded-freight'];
        document.querySelector('#results .matches-info .barcode-text').innerHTML = teamMatch[teamN_Matches-1]['barcode'];
        document.querySelector('#results .matches-info .parking-text').innerHTML = teamMatch[teamN_Matches-1]['auto-park'];
        document.querySelector('#results .matches-info .storage-text').innerHTML = teamMatch[teamN_Matches-1]['storage-freight'];
        document.querySelector('#results .matches-info .one-text').innerHTML = teamMatch[teamN_Matches-1]['level-one'];
        document.querySelector('#results .matches-info .two-text').innerHTML = teamMatch[teamN_Matches-1]['level-two'];
        document.querySelector('#results .matches-info .three-text').innerHTML = teamMatch[teamN_Matches-1]['level-three'];

        if(teamMatch[teamN_Matches-1]['duck-delivery-end'] == 'Delivers Duck') document.querySelector('#results .matches-info .delivers-duck-end-container img').src = 'img/duck.jpg';
        else document.querySelector('#results .matches-info .delivers-duck-end-container img').src = 'img/robot-roto.jpg';

        if(teamMatch[teamN_Matches-1]['capping'] == 'Capping success') document.querySelector('#results .matches-info .capping-container img').src = 'img/capping-success.jpg';
        else if (teamMatch[teamN_Matches-1]['capping'] == 'Capping fail') document.querySelector('#results .matches-info .capping-container img').src = 'img/capping-fail.jpg';
        else document.querySelector('#results .matches-info .capping-container img').src = 'img/robot-roto.jpg';

        if (teamMatch[teamN_Matches-1]['barriers[]']) document.querySelector('#results .matches-info .barreras-text').innerHTML = teamMatch[teamN_Matches-1]['barriers[]'].join(', ');
        else document.querySelector('#results .matches-info .barreras-text').innerHTML = 'No hay respuesta';

        if (teamMatch[teamN_Matches-1]['undefined[]']) document.querySelector('#results .matches-info .objetos-text').innerHTML = teamMatch[teamN_Matches-1]['undefined[]'].join(', ');
        else document.querySelector('#results .matches-info .objetos-text').innerHTML = 'No hay respuesta';
   
    } else {
        document.querySelector('#results .matches-info h1').innerHTML = `Match #`;
        document.querySelector('#results .matches-info .delivers-duck-auto-container img').src = 'img/Confused-Robot.jpg';
        document.querySelector('#results .matches-info .preloaded-freight-text').innerHTML = '';
        document.querySelector('#results .matches-info .barcode-text').innerHTML = '';
        document.querySelector('#results .matches-info .parking-text').innerHTML = '';
        document.querySelector('#results .matches-info .storage-text').innerHTML = '';
        document.querySelector('#results .matches-info .one-text').innerHTML = '';
        document.querySelector('#results .matches-info .two-text').innerHTML = '';
        document.querySelector('#results .matches-info .three-text').innerHTML = '';
        document.querySelector('#results .matches-info .delivers-duck-end-container img').src = 'img/Confused-Robot.jpg';
        document.querySelector('#results .matches-info .capping-container img').src = 'img/Confused-Robot.jpg';
        document.querySelector('#results .matches-info .barreras-text').innerHTML = '';
        document.querySelector('#results .matches-info .objetos-text').innerHTML = '';
    }
}


// Create Results Form
function createResults() {

    // ----------TEAM INFO-------------
    const numberofmatches = new ResultText('Team participo en matches: ', 'tipo-numberofmatches', 'numberofmatches-text');

    const chasis = new ResultsWithImages('Tipo de chasis:', 'tipo-chasis', 'image-label-container')
    chasis.addInput({
        id: 'tipo-chasis-img',
        img: 'img/nautilus.png'
    });

    const intake = new ResultText('Tipo de intake:', 'tipo-intake', 'intake-text');
    const cargos_boxes = new ResultText('Puede tomar Cargos y Boxes:', 'tipo-boxes', 'boxes-text');
    const vision = new ResultText('Vision del Robot:', 'tipo-vision', 'vision-text');
    const sensores = new ResultText('Sensores del robot:', 'tipo-sensores', 'sensores-text');

    // ----------MATCHES INFO-------------
    const delivers_duck_auto = new ResultsWithImages('Delivers Duck Auto:', 'delivers-duck-auto', 'delivers-duck-auto-container')
    delivers_duck_auto.addInput({
        id: 'delivers-duck-auto-img',
        img: 'img/nautilus.png'
    });

    const preloaded_freight = new ResultText('Preloaded Freight Delivered To:', 'preloaded-freight', 'preloaded-freight-text');
    const barcodes = new ResultText('Achieves the Barcode Bonus:', 'barcode-bonus', 'barcode-text')
    const parking = new ResultText('Parking:', 'parking-question', 'parking-text');
    const storage_unit = new ResultText('Storage Unit:', 'storage-unit', 'storage-text');
    const level_one = new ResultText('Level 1 Shipping:', 'level-one', 'one-text');
    const level_two = new ResultText('Level 2 Shipping:', 'level-two', 'two-text');
    const level_three = new ResultText('Level 3 Shipping:', 'level-three', 'three-text');
    //const shared_hub = new ResultText('Shared Hub:', 'shared-hub', 'shared-hub-text');
    
    const delivers_duck_end = new ResultsWithImages('Delivers Duck End:', 'delivers-duck-end', 'delivers-duck-end-container')
    delivers_duck_end.addInput({
        id: 'delivers-duck-end-img',
        img: 'img/nautilus.png'
    });

    const capping = new ResultsWithImages('Capping:', 'capping-test', 'capping-container')
    capping.addInput({
        id: 'delivers-duck-auto-img',
        img: 'img/nautilus.png'
    });

    const barreras = new ResultText('Barreras', 'barreras-test', 'barreras-text');
    const agarrando_obj = new ResultText('Eficiencia Agarrando Objetos', 'objetos-test', 'objetos-text');

        // VER IMAGES

        
    // Sections Render
    resultForm.sections.team_information.addQuestion(numberofmatches);
    resultForm.sections.team_information.addQuestion(chasis);
    resultForm.sections.team_information.addQuestion(intake);
    resultForm.sections.team_information.addQuestion(cargos_boxes);
    resultForm.sections.team_information.addQuestion(vision);
    resultForm.sections.team_information.addQuestion(sensores);

    resultForm.sections.team_matches.addQuestion(delivers_duck_auto);
    resultForm.sections.team_matches.addQuestion(preloaded_freight);
    resultForm.sections.team_matches.addQuestion(barcodes);
    resultForm.sections.team_matches.addQuestion(parking);
    resultForm.sections.team_matches.addQuestion(storage_unit);
    resultForm.sections.team_matches.addQuestion(level_one);
    resultForm.sections.team_matches.addQuestion(level_two);
    resultForm.sections.team_matches.addQuestion(level_three);
    resultForm.sections.team_matches.addQuestion(delivers_duck_end);
    resultForm.sections.team_matches.addQuestion(capping);
    resultForm.sections.team_matches.addQuestion(barreras);
    resultForm.sections.team_matches.addQuestion(agarrando_obj);
    
    resultForm.renderSections();
}