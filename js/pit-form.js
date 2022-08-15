function createPitForm() {
    // Add your code below
    const intake = new TrueFalseButtons('Tiene intake', 'intake', 'Tiene intake', 'No tiene intake');

    const cargoCapacity = new RadioWithText('Cuántos Cargos puede almacenar?', 'cargo-capacity');
    cargoCapacity.addInput({
        id: 'cargo-capacity-0',
        value: '0'
    });
    cargoCapacity.addInput({
        id: 'cargo-capacity-1',
        value: '1'
    });
    cargoCapacity.addInput({
        id: 'cargo-capacity-2',
        value: '2'
    });

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
        id: 'chasis-otro',
        value: 'Otro chasis',
        img: 'img/Confused-Robot.jpg'
    });

    const matchFocus = new BigTextArea('En que se especializa durante el match?', 'match-focus', 4);

    const vision = new TrueFalseButtons('Usa visión para localizar los Hubs', 'vision', 'Tiene visión', 'No cuenta con visión');

    const allyNeeds = new BigTextArea('Qué buscan en una alianza?', 'ally-needs', 10);

    pitForm.sections.engineering.addQuestion(cargoCapacity);
    pitForm.sections.engineering.addQuestion(intake);
    pitForm.sections.engineering.addQuestion(chasis);
    pitForm.sections.engineering.addQuestion(matchFocus);
    pitForm.sections.engineering.addQuestion(vision);
    pitForm.sections.engineering.addQuestion(allyNeeds);

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
}