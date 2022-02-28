class TeamStats {

    name;
    teamNumber;
    chasisType;
    cargo;
    autonomousDuckDelivery
    autonomousFreightDelivery;
    autonomousParking;
    endDuckDelivery;
    storageUnit;
    shippingHub;
    sharedHub;
    totalMatches;

    constructor(teamInfo, matches){
        try {
            this.teamNumber = teamInfo['team-number'];
            this.chasisType = teamInfo['chasis'];
            this.cargo = teamInfo['cargo'];
        } catch(error) {
            if(this.teamNumber == undefined)
                this.teamNumber = matches[0]['team-number']
        }
        this.name = TEAM_NAMES[this.teamNumber];
        this.setFreightStats(matches);
        this.totalMatches = matches.length;
        this.autonomousDuckDelivery = matches.some(match => match['duck-delivery-auto'] == 'Delivers Duck');
        this.autonomousFreightDelivery = !matches.every(match => match['preloaded-freight'] == 'Not delivered');
        this.autonomousParking = !matches.every(match => match['auto-park'] == 'No');
        this.endDuckDelivery = matches.some(match => match['duck-delivery-end'] == 'Delivers Duck');
    }

    setFreightStats(matches){
        const storageUnitFreights = [];
        const levelOneFreights = [];
        const levelTwoFreights = [];
        const levelThreeFreights = [];
        const sharedHubFreights = [];
        for (const match of matches) {
            storageUnitFreights.push(match['storage-freight']);
            levelOneFreights.push(match['level-one']);
            levelTwoFreights.push(match['level-two']);
            levelThreeFreights.push(match['level-three']);
            sharedHubFreights.push(match['shared-hub']);
        }
        this.storageUnit = new NumericStats(storageUnitFreights);
        this.shippingHub = [];
        this.shippingHub[0] = new NumericStats(levelOneFreights);
        this.shippingHub[1] = new NumericStats(levelTwoFreights);
        this.shippingHub[2] = new NumericStats(levelThreeFreights);
        this.sharedHub = new NumericStats(sharedHubFreights);
    }

    getCard(){
        const card = document.createElement('div');
        card.classList.add('team-card');
        card.id = `card-${this.teamNumber}`;
        card.innerHTML = `
        <p class="title">${this.name} ${this.teamNumber}</p>
        <p>Chasis: ${this.chasisType}</p>
        <p>Toma Cargos y Boxes: ${this.cargo}</p>
        <p>Duck delivery: ${this.autonomousDuckDelivery || this.endDuckDelivery ? 'Si': 'No'}</p>
        <p>Durante el autónomo puede:</p>`;
        const autonomousList = document.createElement('ul');
        card.appendChild(autonomousList);
        if(this.autonomousDuckDelivery)
            autonomousList.innerHTML += '<li>Delivers Duck</li>';
        const parking = new Set();
        for (const match of teamMatches[this.teamNumber])
            if(match['auto-park'] != 'No')
                parking.add(match['auto-park']);
        for (const parkDetail of parking)
            autonomousList.innerHTML += `<li>${parkDetail}</li>`;
        if(this.autonomousFreightDelivery)
            autonomousList.innerHTML += '<li>Deliver preloaded Freight</li>';
        const tableGrid = document.createElement('div');
        tableGrid.classList.add('card-grid');
        card.appendChild(tableGrid);
        tableGrid.appendChild(this.shippingHub[0].getHTMLTable('Level 1'));
        tableGrid.appendChild(this.sharedHub.getHTMLTable('Shared Shipping Hub'));
        tableGrid.appendChild(this.shippingHub[1].getHTMLTable('Level 2'));
        tableGrid.appendChild(this.storageUnit.getHTMLTable('Storage Unit'));
        tableGrid.appendChild(this.shippingHub[2].getHTMLTable('Level 3'));
        return card;
    }
}

class NumericStats {
    min;
    max;
    average;

    constructor(values){
        const isEmpty = values.length == 0;
        if(isEmpty)
            this.average = 0;
        else
            this.average = Number(values[0]);
        this.min = this.average;
        this.max = this.average;
        if(isEmpty)
            return;
        for (let i = 1; i < values.length; i++) {
            const num = Number(values[i]);
            this.average += num;
            this.min = Math.min(this.min, num);
            this.max = Math.max(this.max, num);
        }
        this.average /= values.length;
    }

    getHTMLTable(title){
        const table = document.createElement('table');
        table.innerHTML = `
        <tr><th colspan="3">${title}</th></tr>
        <tr><td>Promedio</td><td>Max</td><td>Min</td></tr>
        <tr>
        <td>${this.average.toFixed(2)}</td>
        <td>${this.max}</td>
        <td>${this.min}</td>
        </tr>`;
        return table
    }
}
