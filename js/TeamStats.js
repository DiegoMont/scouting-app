class TeamStats {

    name;
    teamNumber;

    constructor(teamInfo, matches) {
        try {
            this.teamNumber = teamInfo['team-number-pit'];
        } catch(error) {
            if(this.teamNumber == undefined)
                this.teamNumber = matches[0]['team-number-match']
        }
        this.name = TEAM_NAMES[this.teamNumber];
        // Add more initialization code here

    }

    getCard(){
        const card = document.createElement('div');
        card.classList.add('team-card');
        card.id = `card-${this.teamNumber}`;
        card.innerHTML = `
        <p class="title">${this.name} ${this.teamNumber}</p>`
        // Card HTML code goes below

        //Remove the next code if you don't need it
        const tableGrid = document.createElement('div');
        tableGrid.classList.add('card-grid');
        card.appendChild(tableGrid);
        // Append NumericStats HTML tables to display tables nicely in two columns
        // tableGrid.appendChild(new NumericStats([1, 2, 3]).getHTMLTable('Any title'));

        // Card HTML code goes above
        return card;
    }
}
