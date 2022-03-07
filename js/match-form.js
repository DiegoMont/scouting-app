function createMatchForm() {
    // Add your code below
    const taxi = new TrueFalseButtons('Leaves tarmac mission', 'taxi', '', 'Se mueve fuera del tarmac', 'No se mueve');
    const autoCargo = new RadioWithText('Score cargo', 'autonomous-cargo');
    autoCargo.addInput({
        id: 'auto-cargo-upper',
        value: 'Upper Hub'
    });
    autoCargo.addInput({
        id: 'auto-cargo-low',
        value: 'Lower Hub'
    });
    autoCargo.addInput({
        id: 'auto-cargo-no',
        value: 'No'
    });

    matchForm.sections.autonomous.addQuestion(taxi);
    matchForm.sections.autonomous.addQuestion(autoCargo);

    const upperCargo = new NumericCounter('Upper Hub Cargo', 'upper-cargo', 0, Season.MAX_CARGO_PER_HUB);
    const lowerCargo = new NumericCounter('Lower Hub Cargo', 'lower-cargo', 0, Season.MAX_CARGO_PER_HUB);
    const hangar = new RadioWithText('Engaging with Hangar', 'hangar-engaging');
    hangar.addInput({
        id: 'hangar-low',
        value: 'Low Rung'
    });
    hangar.addInput({
        id: 'hangar-mid',
        value: 'Mid Rung'
    });
    hangar.addInput({
        id: 'hangar-high',
        value: 'High Rung'
    });
    hangar.addInput({
        id: 'hangar-traversal',
        value: 'Traversal Rung'
    });
    hangar.addInput({
        id: 'hangar-no',
        value: 'No'
    });
    hangar.addInput({
        id: 'hangar-fell',
        value: 'Se cayó en el intento'
    });

    const tiros = new CheckboxWithText('Desde que parte de la cancha hace tiros', 'field-shooting');
    tiros.addInput({
        id: 'shooting-tarmac',
        value: 'En el Tarmac'
    });
    tiros.addInput({
        id: 'shooting-launch-pad',
        value: 'Launch pad'
    });
    tiros.addInput({
        id: 'shooting-other',
        value: 'Otro lugar'
    });
    
    matchForm.sections.teleop.addQuestion(upperCargo);
    matchForm.sections.teleop.addQuestion(lowerCargo);
    matchForm.sections.teleop.addQuestion(tiros);
    matchForm.sections.teleop.addQuestion(hangar);
    // Add your code above
    matchForm.renderSections();
}
