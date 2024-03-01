function createMatchForm() {
    // Add your code below

    const MIN_WRITTEN_WORDS = 5;
    const MAX_WRITTEN_WORDS = 75;

    const cards = new NumericCounter("Yellow cards the team was issued.", "cards", 0, 4);

    const technicalProblems = new CheckboxWithText("Which problems they suffered during the match? Add more details in the comments section.", "technical-problems");
    technicalProblems.addInput({
        value: "Disconnection",
        id: "problem-disconnection"
    });
    technicalProblems.addInput({
        value: "Physical Damage",
        id: "problem-physical"
    });
    technicalProblems.addInput({
        value: "Other",
        id: "problem-other"
    })
    technicalProblems.addInput({
        value: "None",
        id: "problem-none"
    })

    const autoStrategy = new BigTextArea("What does the robot do in the autonomous period?", "autonomous-strategy", MIN_WRITTEN_WORDS);
    autoStrategy.maxWordsLimit = MAX_WRITTEN_WORDS;

    const teleopStrategy = new BigTextArea("What is the strategy of the robot in the TeleOp period?", "teleop-strategy", MIN_WRITTEN_WORDS);
    teleopStrategy.maxWordsLimit = MAX_WRITTEN_WORDS;

    const endgameStrategy = new BigTextArea("What is the robot strategy during the endgame period?", "endgame-strategy", MIN_WRITTEN_WORDS);
    endgameStrategy.maxWordsLimit = MAX_WRITTEN_WORDS;

    const velocity = new NumericCounter("What rating would you give to the robot velocity [1 - 10].", "velocity", 1, 10);

    const aim = new NumericCounter("How many times the driver tried to score a game element and failed?", "aim", 0, 50);

    matchForm.sections.teleop.addQuestion(cards);
    matchForm.sections.teleop.addQuestion(technicalProblems);
    matchForm.sections.teleop.addQuestion(autoStrategy);
    matchForm.sections.teleop.addQuestion(teleopStrategy);
    matchForm.sections.teleop.addQuestion(endgameStrategy);
    matchForm.sections.teleop.addQuestion(velocity);
    matchForm.sections.teleop.addQuestion(aim);

    // Add your code above
    matchForm.renderSections();
}
