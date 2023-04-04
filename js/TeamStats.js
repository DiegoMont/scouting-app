class TeamStats {

    static FIELD_AREAS = {'A': 0, 'B': 1, 'C': 2};

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
        this.setAreaDensity(matches);

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
        card.appendChild(this.getCommunityZones());
        // Card HTML code goes above
        return card;
    }

    setAreaDensity(matches){
        const totalMatches = matches.length;
        this.communityEntryDensity = [0, 0, 0];
        this.communityExitDensity = [0, 0, 0];
        for (const match of matches){
            for (const zone of match['enter-community[]'])
                if(zone !== 'None')
                    this.communityEntryDensity[TeamStats.FIELD_AREAS[zone]]++;
            for (const exitZone of match['exit-community[]'])
                if (exitZone !== 'None')
                    this.communityExitDensity[TeamStats.FIELD_AREAS[exitZone]]++;
        }
        const divisor = Math.max(totalMatches+1, 1);
        for (let i = 0; i < this.communityEntryDensity.length; i++)
            this.communityEntryDensity[i] /= divisor;
        for (let i = 0; i < this.communityExitDensity.length; i++)
            this.communityExitDensity[i] /= divisor;
        console.log(this.communityEntryDensity);
    }

    getCommunityZones(){
        const field = document.createElement('div');
        field.classList.add('community-zones');
        field.innerHTML = `<img src="img/charged-up-community.jpg"></img>
        <div class="field-density red-a comm-entrance" style="opacity: ${this.communityEntryDensity[0]}"></div>
        <div class="field-density blue-a comm-entrance" style="opacity: ${this.communityEntryDensity[0]}"></div>
        <div class="field-density red-b comm-entrance" style="opacity: ${this.communityEntryDensity[1]}"></div>
        <div class="field-density blue-b comm-entrance" style="opacity: ${this.communityEntryDensity[1]}"></div>
        <div class="field-density red-c comm-entrance" style="opacity: ${this.communityEntryDensity[2]}"></div>
        <div class="field-density blue-c comm-entrance" style="opacity: ${this.communityEntryDensity[2]}"></div>
        <div class="field-density red-a comm-exit" style="opacity: ${this.communityExitDensity[0]}"></div>
        <div class="field-density blue-a comm-exit" style="opacity: ${this.communityExitDensity[0]}"></div>
        <div class="field-density red-b comm-exit" style="opacity: ${this.communityExitDensity[1]}"></div>
        <div class="field-density blue-b comm-exit" style="opacity: ${this.communityExitDensity[1]}"></div>
        <div class="field-density red-c comm-exit" style="opacity: ${this.communityExitDensity[2]}"></div>
        <div class="field-density blue-c comm-exit" style="opacity: ${this.communityExitDensity[2]}"></div>
        `;
        return field;
    }
}
