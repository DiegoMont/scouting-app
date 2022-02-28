class TeamStats {

    static TEAM_NAMES = [];

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

    constructor(teamInfo, matches){
        try {
            this.teamNumber = teamInfo['team-number'];
            this.name = getName(this.teamNumber);
            this.chasisType = teamInfo['chasis'];
            this.cargo = teamInfo['cargo'];
            this.autonomousDuckDelivery = teamInfo['duck-delivery-auto'];
            this.autonomousFreightDelivery = teamInfo['preloaded-freight'];
            this.autonomousParking = teamInfo['auto-park'];
            this.endDuckDelivery = teamInfo['duck-delivery-end'];
        } catch(error) {}
        this.setFreightStats(matches);
    }

    async getName(teamNumber){
        const name = TEAM_NAMES[teamNumber];
        if(name == undefined) {
            const nameDoc = await db.collection('teams').doc(teamNumber).get();
            name = nameDoc.data().name;
        }
        return name;
    }

    setFreightStats(matches){
        const storageUnitFreights = [];
        const levelOneFreights = [];
        const levelTwoFreights = [];
        const levelThreeFreights = [];
        const sharedHubFreights = [];
        if(matches == undefined)
            matches = [];
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
            this.average = values[0];
        this.min = this.average;
        this.max = this.average;
        if(isEmpty)
            return;
        for (let i = 1; i < values.length; i++) {
            this.average += values[i];
            this.min = Math.min(this.min, values[i]);
            this.max = Math.max(this.max, values[i]);
        }
        this.average /= values.length;
    }
}
