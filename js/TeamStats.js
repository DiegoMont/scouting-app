class TeamStats {

    static FIELD_AREAS = {'A': 0, 'B': 1, 'C': 2, 'D': 3, 'Tarmac': 4};

    areaDensity;
    autoLowerCargo;
    autoUpperCargo;
    intake;
    name;
    tarmac;
    teamNumber;
    chasisType;
    cargoCapacity;
    lowerHubCargo;
    upperHubCargo;
    totalMatches;
    vision;

    constructor(teamInfo, matches) {
        try {
            this.teamNumber = teamInfo['team-number-pit'];
            this.chasisType = teamInfo['chasis'];
            this.cargoCapacity = teamInfo['cargo-capacity'];
            this.intake = teamInfo['intake'];
            this.vision = teamInfo['vision'];
        } catch(error) {
            if(this.teamNumber == undefined)
                this.teamNumber = matches[0]['team-number-match']
        }
        this.tarmac = matches.some(match => match['taxi'] == 'Se mueve fuera del tarmac');
        this.name = TEAM_NAMES[this.teamNumber];
        this.totalMatches = matches.length;
        this.setHubStats(matches);
        this.setAreaDensity(matches);
    }

    getCard(){
        const card = document.createElement('div');
        card.classList.add('team-card');
        card.id = `card-${this.teamNumber}`;
        card.innerHTML = `
        <p class="title">${this.name} ${this.teamNumber}</p>
        <p>Chasis: ${this.chasisType}</p>
        <p>${this.intake}</p>
        <p>${this.vision}</p>
        <p>Cargo the robot can store: ${this.cargoCapacity}</p>
        <p>AUTONOMOUS</p>`;
        if(this.tarmac)
            card.innerHTML += '<p>Makes Tarmac mission</p>';
        const autoCargoTables = document.createElement('div');
        autoCargoTables.classList.add('card-grid');
        autoCargoTables.appendChild(this.autoLowerCargo.getHTMLTable('Lower Cargo'));
        autoCargoTables.appendChild(this.autoUpperCargo.getHTMLTable('Upper Cargo'));
        card.appendChild(autoCargoTables);
        card.innerHTML += `
        <p>Total cargo during match</p>`;
        const tableGrid = document.createElement('div');
        tableGrid.classList.add('card-grid');
        card.appendChild(tableGrid);
        tableGrid.appendChild(this.upperHubCargo.getHTMLTable('Upper Hub Cargo'));
        tableGrid.appendChild(this.lowerHubCargo.getHTMLTable('Lower Hub Cargo'));
        card.appendChild(this.getFieldZones());
        return card;
    }

    setHubStats(matches){
        const upperHubCargos = [];
        const lowerHubCargos = [];
        const autoLower = [];
        const autoUpper = [];
        
        for (const match of matches) {
            autoLower.push(match['auto-lower-cargo']);
            autoUpper.push(match['auto-upper-cargo']);
            const upperCargo = match['auto-upper-cargo'] +
             match['upper-cargo-launch-pad'] + match['upper-cargo-other-zone'] + match['upper-cargo-tarmac'];
            upperHubCargos.push(upperCargo);
            const lowerCargo = match['auto-lower-cargo'] + match['lower-cargo-launch-pad'] + match['lower-cargo-tarmac'];
            lowerHubCargos.push(lowerCargo);
        }
        this.upperHubCargo = new NumericStats(upperHubCargos);
        this.lowerHubCargo = new NumericStats(lowerHubCargos);
        this.autoLowerCargo = new NumericStats(autoLower);
        this.autoUpperCargo = new NumericStats(autoUpper);
    }

    setAreaDensity(matches){
        this.areaDensity = [0, 0, 0, 0, 0];
        for (const match of matches){
            if(match['upper-cargo-tarmac'] > 0 || match['lower-cargo-tarmac'] > 0)
                this.areaDensity[TeamStats.FIELD_AREAS['Tarmac']]++;
            for (const zone of match['launching-zones[]'])
                this.areaDensity[TeamStats.FIELD_AREAS[zone]]++;
        }
        const divisor = Math.max(this.totalMatches+1, 1);
        for (let i = 0; i < this.areaDensity.length; i++)
            this.areaDensity[i] /= divisor;
    }

    getFieldZones(){
        const field = document.createElement('div');
        field.classList.add('team-main-zones');
        field.innerHTML = `<img src="img/rapid-react-field-zones.png"></img>
        <div class="field-density red-a" style="opacity: ${this.areaDensity[0]}"></div>
        <div class="field-density blue-a" style="opacity: ${this.areaDensity[0]}"></div>
        <div class="field-density red-b" style="opacity: ${this.areaDensity[1]}"></div>
        <div class="field-density blue-b" style="opacity: ${this.areaDensity[1]}"></div>
        <div class="field-density red-c" style="opacity: ${this.areaDensity[2]}"></div>
        <div class="field-density blue-c" style="opacity: ${this.areaDensity[2]}"></div>
        <div class="field-density red-d" style="opacity: ${this.areaDensity[3]}"></div>
        <div class="field-density blue-d" style="opacity: ${this.areaDensity[3]}"></div>
        <div class="field-density red-tarmac" style="opacity: ${this.areaDensity[4]}"></div>
        <div class="field-density blue-tarmac" style="opacity: ${this.areaDensity[4]}"></div>
        `;
        return field;
    }
}
