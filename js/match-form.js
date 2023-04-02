function createMatchForm() {
    // Add your code below
    const robotStrategy = new BigTextArea("What is the overall game strategy of the robot?", "strategy", 5);
    robotStrategy.wordLimitExceededMsg = "The description is too big. Summarize it more!";

    const robotStrenghts = new BigTextArea("What are the strenghts of the robot and/or game strategy?", "robot-strengths", 5);

    const improvementArea = new BigTextArea("What is the improvement area of the robot and/or game strategy?", "strategy-improvement", 5);

    const technicalProblems = new CheckboxWithText("Which problems they suffered during the match?", "technical-problems");
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

    const autoStrategy = new BigTextArea("What the robot does in the autonomous period?", "autonomous-strategy", 5);

    const autoTasks = new TrueFalseButtons("Was it successful in completing the tasks it was supposed to perform?", "auto-success", "Yes", "No", "Indicate if the robot succeded accomplishing its autonomous tasks");

    const autonomousPark = new RadioWithText("Where was the robot parked at the end of the autonomous period?", "autonomous-park");
    autonomousPark.addInput({
        value: "Out of community",
        id: "auto-park-out"
    });
    autonomousPark.addInput({
        value: "Docked",
        id: "auto-park-docked"
    });
    autonomousPark.addInput({
        value: "Engaged",
        id: "auto-park-engaged"
    });
    autonomousPark.addInput({
        value: "Stayed in community",
        id: "auto-park-community"
    });

    const teleopStrategy = new BigTextArea("What is the strategy of the robot in the TeleOp period?", "teleop-strategy", 10);

    const gamePieces = new CheckboxWithText("Where does the robot accommodate each game piece?", "game-pieces-location");
    gamePieces.addInput({
        value: "Cubes on bottom row",
        id: "gamepiece-bottom-cube"
    });
    gamePieces.addInput({
        value: "Cones on bottom row",
        id: "gamepiece-bottom-cone"
    });
    gamePieces.addInput({
        value: "Cubes on middle row",
        id: "gamepiece-middle-cube"
    });
    gamePieces.addInput({
        value: "Cones on middle row",
        id: "gamepiece-middle-cone"
    });
    gamePieces.addInput({
        value: "Cubes on top row",
        id: "gamepiece-top-cube"
    });
    gamePieces.addInput({
        value: "Cones on top row",
        id: "gamepiece-top-cone"
    });

    const cubes = new NumericCounter("Cubes scored during TeleOp period", "teleop-cubes", 0, 40);

    const cones = new NumericCounter("Cones scored during TeleOp period", "teleop-cones", 0, 40);

    const enterCommunity = new FieldZones("Which area they use to enter to the Community zone?", 'enter-community', ['A', 'B', 'C', 'None'], 'img/charged-up-community.jpg');

    const exitCommunity = new FieldZones("Which area they use to exit from the Community zone?", 'exit-community', ['A', 'B', 'C', 'None'], '');

    const endgameStrategy = new BigTextArea("What is the robot strategy during the endgame period?", "endgame-strategy", 5);

    const endgamePark = new RadioWithText("Where was the robot parked at the end of the autonomous period?", "endgame-park");
    endgamePark.addInput({
        value: "Out of the community",
        id: "park-out"
    });
    endgamePark.addInput({
        value: "Docked",
        id: "park-docked"
    });
    endgamePark.addInput({
        value: "Engaged",
        id: "park-engaged"
    });
    endgamePark.addInput({
        value: "Parked",
        id: "park-parked"
    });

    matchForm.sections.autonomous.addQuestion(autoTasks);
    matchForm.sections.autonomous.addQuestion(autonomousPark);
    matchForm.sections.autonomous.addQuestion(autoStrategy);
    matchForm.sections.teleop.addQuestion(gamePieces);
    matchForm.sections.teleop.addQuestion(cubes);
    matchForm.sections.teleop.addQuestion(cones);
    matchForm.sections.teleop.addQuestion(enterCommunity);
    matchForm.sections.teleop.addQuestion(exitCommunity);
    matchForm.sections.teleop.addQuestion(technicalProblems);
    matchForm.sections.teleop.addQuestion(endgamePark);
    matchForm.sections.teleop.addQuestion(teleopStrategy);
    matchForm.sections.teleop.addQuestion(endgameStrategy);
    matchForm.sections.teleop.addQuestion(robotStrategy);
    matchForm.sections.teleop.addQuestion(robotStrenghts);
    matchForm.sections.teleop.addQuestion(improvementArea);
    // Add your code above
    matchForm.renderSections();
}
