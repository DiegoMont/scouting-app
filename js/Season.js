const TEAM_NAMES = {
    2283: 'Panteras',
    3354: 'TecDroid',
    3472: 'Buluk',
    3478: 'Lambot',
    3510: 'Tectronic',
    3794: 'WinT',
    3933: 'Taman Keet',
    4010: 'Nautilus',
    4371: 'ART Mx',
    4403: 'PEÑOLES - ROULT',
    4635: 'Botbusters',
    4723: 'EARTH',
    4731: 'MONARCH-E',
    4775: 'Aztech Robotics',
    4782: 'Borrebots',
    5133: 'Blue Steel',
    5696: 'Faraday',
    5716: 'Keybot',
    5887: 'IMPERATOR',
    5932: 'Quetzales',
    5948: 'Lebotics',
    5959: 'Titanium Rams',
    6017: 'Cyberius + Abtomat + Rockin Robots',
    6106: 'TecGear',
    6170: 'Vitronik',
    6348: 'HORUS',
    6606: 'PINK HAWKS',
    6647: 'VOLTEC Robotics',
    6676: 'Thunder Hawks',
    6694: 'INNOBOTICS',
    6702: 'StingBots',
    6832: 'STEAMex',
    7421: 'OVERTURE',
    7725: 'NUTS & VOLTS',
    8244: 'Delfines CBTech',
    8293: 'Whitefox Robotics',
    8734: 'B. A. T. S.',
    8740: 'Quantum Force',
    8741: 'Racoons',
    8776: 'THE NORTHERN LIZARDS',
    8327: 'Spartans',
    16255: 'Minerva Warriors',
    16388: 'Borrebots',
    16508: 'Minerva Legion',

    // FRC
    100: 'The WildHats',
    115: 'MVRT',
    253: 'Boba Bots',
    973: 'Greybots',
    1266: 'The Devil Duckies',
    1323: 'MadTown Robotics',
    1422: 'The Neon Knights',
    1661: 'Griffitrons',
    1671: 'Buchanan Bird Brains',
    2073: 'EagleForce',
    2485: 'W.A.R. Lords',
    2543: 'TitanBot',
    3189: 'Circuit Breakers',
    3255: 'SuperNURDs',
    3257: 'Vortechs',
    3512: 'Spartatroniks',
    3598: 'SEStematic Eliminators',
    3970: 'Duncan Dynamics',
    4135: 'Iron Patriots',
    5274: 'Wolverines',
    5817: 'Uni-Rex',
    5924: 'Golden Gate Robotics',
    5940: 'BREAD',
    6305: 'Stable Circuits',
    6619: 'GravitechX',
    6657: 'Arborbotics',
    6711: 'Millennial Falcons',
    7528: 'Nuts and Bolts',
    7539: 'Elev8',
    7589: 'Lishan Blue Magpie',
    8768: 'CTEC Titans'
};

class Season {
    SEASON_NAME;
    REGIONALES;
    matchForm;
    pitForm;

    constructor(seasonName, regionals) {
        this.SEASON_NAME = seasonName;
        this.REGIONALES = regionals;
        this.matchForm = new MatchScoutingForm('#scouting-match form', this.REGIONALES);
        this.pitForm = new PitScoutingForm('#scouting-pit form', this.REGIONALES);
    }
}
