class TeamStats {

    static FIELD_AREAS = {'A': 0, 'B': 1, 'C': 2, 'D': 3, 'Tarmac': 4};

    areaDensity;
    name;
    teamNumber;
    chasisType;
    cargoCapacity;
    lowerHubCargo;
    upperHubCargo;
    totalMatches;

    constructor(teamInfo, matches) {
        try {
            this.teamNumber = teamInfo['team-number-pit'];
            this.chasisType = teamInfo['chasis'];
        } catch(error) {
            if(this.teamNumber == undefined)
                this.teamNumber = matches[0]['team-number-match']
        }
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
        <p>Chasis: ${this.chasisType}</p>`
        card.appendChild(this.getFieldZones());
        return card;
    }

    setHubStats(matches){
        const upperHubCargos = [];
        const lowerHubCargos = [];
        for (const match of matches) {
            const upperCargo = match['auto-upper-cargo'] +
             match['upper-cargo-launch-pad'] + match['upper-cargo-other-zone'] + match['upper-cargo-tarmac'];
            upperHubCargos.push(upperCargo);
            const lowerCargo = match['auto-lower-cargo'] + match['lower-cargo-launch-pad'] + match['lower-cargo-tarmac'];
            lowerHubCargos.push(lowerCargo);
        }
        this.upperHubCargo = new NumericStats(upperHubCargos);
        this.lowerHubCargo = new NumericStats(lowerHubCargos);
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
        <div class="field-density red-a" style="background-color: rgba(32, 110, 56, ${this.areaDensity[0]})"></div>
        <div class="field-density blue-a" style="background-color: rgba(32, 110, 56, ${this.areaDensity[0]})"></div>
        <div class="field-density red-b" style="background-color: rgba(32, 110, 56, ${this.areaDensity[1]})"></div>
        <div class="field-density blue-b" style="background-color: rgba(32, 110, 56, ${this.areaDensity[1]})"></div>
        <div class="field-density red-c" style="background-color: rgba(32, 110, 56, ${this.areaDensity[2]})"></div>
        <div class="field-density blue-c" style="background-color: rgba(32, 110, 56, ${this.areaDensity[2]})"></div>
        <div class="field-density red-d" style="background-color: rgba(32, 110, 56, ${this.areaDensity[3]})"></div>
        <div class="field-density blue-d" style="background-color: rgba(32, 110, 56, ${this.areaDensity[3]})"></div>
        <div class="field-density red-tarmac" style="background-color: rgba(32, 110, 56, ${this.areaDensity[4]})"></div>
        <div class="field-density blue-tarmac" style="background-color: rgba(32, 110, 56, ${this.areaDensity[4]})"></div>
        `;
        return field;
    }
}
