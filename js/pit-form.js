function createPitForm() {
    // Add your code below
    const chasis = new RadioWithImages('Tipo de chasis', 'chasis');
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
        id: 'chasis-otro',
        value: 'Otro chasis',
        img: 'img/Confused-Robot.jpg'
    });

    const intakeType = new RadioWithText('Tipo de intake', 'intake');
    intakeType.addInput({
        id: 'intake-llantas',
        value: 'Llantas'
    });
    intakeType.addInput({
        id: 'intake-gripper',
        value: 'Pinzas / Gripper'
    });
    intakeType.addInput({
        id: 'intake-otro',
        value: 'Otro'
    });
    intakeType.addInput({
        id: 'no-intake',
        value: 'No tiene'
    });

    const elementTypes = new RadioWithText('Puede tomar Cargos y Boxes');
    elementTypes.addInput({
        id: 'box-only',
        value: 'Solo boxes'
    });
    elementTypes.addInput({
        id: 'cargo-only',
        value: 'Solo Cargo'
    });
    elementTypes.addInput({
        id: 'both-objects',
        value: 'Ambos objetos'
    });

    const vision = new TrueFalseButtons('El robot tiene visión', 'vision', 'Tiene visión', 'No cuenta con visión');

    const sensors = new BigTextArea('Qué sensores usa el robot', 'sensores', 3);

    const projects = new BigTextArea('Cuál es su proyecto social de mayor impacto?', 'proyecto-social', 3);

    const socialNetworks = new BigTextArea('Cómo es su trabajo o enfoque en redes sociales?', 'redes-sociales', 3);

    const characteristics = new BigTextArea('Cuáles son las características o elementos distintivos de su equipo?', 'caracteristicas', 3);

    const sponsors = new BigTextArea('Cuáles son los patrocinadores que mejor los representan como equipo?', 'patrocinadores', 3);

    const funding = new BigTextArea('Cómo fondean a su equipo?', 'finanzas', 10);

    pitForm.sections.engineering.addQuestion(chasis);
    pitForm.sections.engineering.addQuestion(intakeType);
    pitForm.sections.engineering.addQuestion(elementTypes);
    pitForm.sections.engineering.addQuestion(vision);
    pitForm.sections.engineering.addQuestion(sensors);
    pitForm.sections.team.addQuestion(projects);
    pitForm.sections.team.addQuestion(socialNetworks);
    pitForm.sections.team.addQuestion(characteristics);
    pitForm.sections.team.addQuestion(sponsors);
    pitForm.sections.team.addQuestion(funding);
    // Add your code above
    pitForm.renderSections();
}
