function createPitForm() {
    // Add your code below

    const MIN_WRITTEN_WORDS = 2;
    const MAX_WRITTEN_WORDS = 75;

    const chasis = new RadioWithImages('Which type of drivetrain does the robot have?', 'Drivetrain');
    chasis.addInput({
        id: 'chasis-mecanum',
        value: 'Mecanum',
        img: 'img/chasis/Mecanum.jpg'
    });
    chasis.addInput({
        id: 'chasis-omni',
        value: 'Omni drive',
        img: 'img/chasis/Omni.jpg'
    });
    chasis.addInput({
        id: 'chasis-west-coast',
        value: 'West Coast',
        img: 'img/chasis/West_Coast.jpg'
    });
    chasis.addInput({
        id: 'chasis-swerve',
        value: 'Swerve',
        img: 'img/chasis/Swerve.jpg'
    });
    chasis.addInput({
        id: 'chasis-otro',
        value: 'Other drivetrain',
        img: 'img/Confused-Robot.jpg'
    });

    const intake = new RadioWithText('Which mechanism does the robot use to take Game Pieces?', 'Intake');
    intake.addInput({
        id: 'intake-claw',
        value: 'Claw'
    });
    intake.addInput({
        id: 'intake-no',
        value: 'Does not have an intake'
    });
    intake.addInput({
        id: 'intake-suction',
        value: 'Vacuum or suction intake'
    });
    intake.addInput({
        id: 'intake-other',
        value: 'Other type of intake'
    });

    const matchFocus = new BigTextArea('Which task does the robot do best during a match?', 'match-focus', MIN_WRITTEN_WORDS);
    matchFocus.maxWordsLimit = MAX_WRITTEN_WORDS;

    const vision = new TrueFalseButtons('The robot uses vision to align with the nodes?', 'Vision', 'Uses vision', 'Does not use vision');

    const allyNeeds = new BigTextArea('What do they expect from other robots in an alliance?', 'ally-needs', MIN_WRITTEN_WORDS);
    allyNeeds.maxWordsLimit = MAX_WRITTEN_WORDS;

    const chargingStationBalance = new TextInput('Which sensors do they use to balance the robot on the Charge Station?', 'charge-station-sensors', 'NavX, accelerometer, IMU', 1);

    const robotPic = new MediaUpload('Take a photo of the robot', 'Image');

    pitForm.sections.engineering.addQuestion(chasis);
    pitForm.sections.engineering.addQuestion(intake);
    pitForm.sections.engineering.addQuestion(matchFocus);
    pitForm.sections.engineering.addQuestion(vision);
    pitForm.sections.engineering.addQuestion(allyNeeds);
    pitForm.sections.engineering.addQuestion(chargingStationBalance);
    pitForm.sections.engineering.addQuestion(robotPic);

    const sponsors = new BigTextArea("List the team's sponsors and strategic alliances", 'Sponsors', MIN_WRITTEN_WORDS);
    sponsors.maxWordsLimit = MAX_WRITTEN_WORDS;

    const representativeSponsors = new BigTextArea('Which sponsors or strategic alliances best represents and/or defines their team?', 'representative-sponsors', MIN_WRITTEN_WORDS);
    representativeSponsors.maxWordsLimit = MAX_WRITTEN_WORDS;

    const funding = new BigTextArea('How do they fund their team?', 'Funding', MIN_WRITTEN_WORDS);
    funding.maxWordsLimit = MAX_WRITTEN_WORDS;

    const projects = new BigTextArea('Which are the most relevant team projects?', 'Projects', MIN_WRITTEN_WORDS);
    projects.maxWordsLimit = MAX_WRITTEN_WORDS;

    const characteristics = new BigTextArea('What are the characteristics or elements that differentiate their team from the others?', 'Identity', MIN_WRITTEN_WORDS);
    characteristics.maxWordsLimit = MAX_WRITTEN_WORDS;

    const socialNetworks = new BigTextArea('Social media accounts', 'Accounts', MIN_WRITTEN_WORDS);
    socialNetworks.maxWordsLimit = MAX_WRITTEN_WORDS;

    const mediaStrategy = new BigTextArea('What is their social media strategy?', 'social-media', MIN_WRITTEN_WORDS);
    mediaStrategy.maxWordsLimit = MAX_WRITTEN_WORDS;

    pitForm.sections.team.addQuestion(funding);
    pitForm.sections.team.addQuestion(sponsors);
    pitForm.sections.team.addQuestion(representativeSponsors);
    pitForm.sections.team.addQuestion(projects);
    pitForm.sections.team.addQuestion(characteristics);
    pitForm.sections.team.addQuestion(socialNetworks);
    pitForm.sections.team.addQuestion(mediaStrategy);

    // Add your code above
    pitForm.renderSections();
}
