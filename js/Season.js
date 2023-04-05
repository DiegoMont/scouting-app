class Season {
    static SEASON_NAME = 'charged-up-sv';
    static REGIONALES = [
        'Silicon Valley'
    ];
}

const language = new EnglishText();
const storageDir = Season.SEASON_NAME + Season.REGIONALES[0].toLowerCase().replace(' ', '-');
