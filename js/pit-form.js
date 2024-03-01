function createPitForm() {
    // Add your code below

    const intake = new RadioWithText("Qué tipo de intake tiene?", "intake")
    intake.addInput({
        value: "Succión",
        id: "succion"
    })
    intake.addInput({
        value: "Garra",
        id: "garra"
    })
    intake.addInput({
        value: "Ambos",
        id: "both-intake"
    })
    intake.addInput({
        value: "Otro",
        id: "other-intake"
    })
    intake.addInput({
        value: "No intake",
        id: "no-intake"
    })

    const chasis = new RadioWithImages('Qué tipo de drivetrain tiene?', 'chasis');
    chasis.addInput({
        id: 'chasis-mecanum',
        value: 'Mecanum',
        img: 'img/chasis/Mecanum.jpg'
    });
    chasis.addInput({
        id: 'chasis-omni',
        value: 'Omnidireccional',
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
        value: 'Otro chasis',
        img: 'img/Confused-Robot.jpg'
    });

    const matchFocus = new BigTextArea('En que se especializa durante el match?', 'match-focus', 4);

    const allyNeeds = new BigTextArea('Qué buscan en una alianza?', 'ally-needs', 10);

    const robotTransportation = new BigTextArea('Cómo transportan el robot a los regionales?', 'robot-transport', 10);

    const robotPic = new MediaUpload('Pic del robot', 'Image');

    pitForm.sections.engineering.addQuestion(intake);
    pitForm.sections.engineering.addQuestion(chasis);
    pitForm.sections.engineering.addQuestion(matchFocus);
    pitForm.sections.engineering.addQuestion(allyNeeds);
    pitForm.sections.engineering.addQuestion(robotTransportation);
    pitForm.sections.engineering.addQuestion(robotPic);

    const projects = new BigTextArea('Cuál es su proyecto social de mayor impacto?', 'proyecto-social', 3);

    const socialNetworks = new BigTextArea('Cómo es su trabajo o enfoque en redes sociales?', 'redes-sociales', 3);

    const characteristics = new BigTextArea('Cuáles son las características o elementos distintivos de su equipo?', 'caracteristicas', 3);

    const sponsors = new BigTextArea('Cuáles son los patrocinadores que mejor los representan como equipo?', 'patrocinadores', 3);

    const funding = new BigTextArea('Cómo fondean a su equipo?', 'finanzas', 10);

    pitForm.sections.team.addQuestion(projects);
    pitForm.sections.team.addQuestion(socialNetworks);
    pitForm.sections.team.addQuestion(characteristics);
    pitForm.sections.team.addQuestion(sponsors);
    pitForm.sections.team.addQuestion(funding);
    // Add your code above
    pitForm.renderSections();

    // Add your code above
    pitForm.renderSections();
}
