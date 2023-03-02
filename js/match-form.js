function createMatchForm() {
    // Add your code below
    const community = new TrueFalseButtons("Leaves Community", "leaves-community", "Yes", "No", "Indica si el robot deja el Community");
    const autoGamePiecesLow = new NumericCounter("Game pieces in low row", "auto-low-pieces", 0, 30);
    const autoGamePiecesMiddle = new NumericCounter("Game pieces in middle row", "auto-middle-pieces", 0, 30)
    const autoGamePiecesHigh = new NumericCounter("Game pieces in high row", "auto-high-pieces", 0, 30)
    const autonomousEnd = new RadioWithText("Al finalizar cómo quedó el robot en relación al Charging Station:", "auto-charging-station");
    autonomousEnd.addInput({
        value: "Docked",
        id: "auto-docked"
    });
    autonomousEnd.addInput({
        value: "Engaged",
        id: "auto-engaged"
    });
    autonomousEnd.addInput({
        value: "No interactuó",
        id: "auto-not-interacting"
    });
    const gamePiecesLow = new NumericCounter("Game pieces in low row", "teleop-low-pieces", 0, 30);
    const gamePiecesMiddle = new NumericCounter("Game pieces in middle row", "teleop-middle-pieces", 0, 30)
    const gamePiecesHigh = new NumericCounter("Game pieces in high row", "teleop-high-pieces", 0, 30)
    const links = new NumericCounter("Formed links", "links", 0, 9)
    const fouls = new NumericCounter('Fouls', 'fouls', 0, 50);
    const launchingZones = new FieldZones("Cancha", 'launching-zones', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'No aplica'], 'img/cancha.jpg');
    const coopertitionBonus = new TrueFalseButtons("El robot cooperó para conseguir el Coopertition Bonus", "coopertition-bonus", "Cooperó", "No cooperó", "Ingresa información del Coopertition Bonus")
    const parking = new RadioWithText("Al finalizar cómo quedó el robot:", "parking");
    parking.addInput({
        value: "Docked",
        id: "end-docked"
    });
    parking.addInput({
        value: "Engaged",
        id: "end-engaged"
    });
    parking.addInput({
        value: "Parked in community",
        id: "end-parked"
    });
    parking.addInput({
        value: "No aplica",
        id: "end-not-parked"
    });

    matchForm.sections.autonomous.addQuestion(community);
    matchForm.sections.autonomous.addQuestion(autoGamePiecesLow);
    matchForm.sections.autonomous.addQuestion(autoGamePiecesMiddle);
    matchForm.sections.autonomous.addQuestion(autoGamePiecesHigh);
    matchForm.sections.autonomous.addQuestion(autonomousEnd);
    matchForm.sections.teleop.addQuestion(gamePiecesLow);
    matchForm.sections.teleop.addQuestion(gamePiecesMiddle);
    matchForm.sections.teleop.addQuestion(gamePiecesHigh);
    matchForm.sections.teleop.addQuestion(links);
    matchForm.sections.teleop.addQuestion(launchingZones);
    matchForm.sections.teleop.addQuestion(fouls);
    matchForm.sections.teleop.addQuestion(coopertitionBonus);
    matchForm.sections.teleop.addQuestion(parking);
    // Add your code above
    matchForm.renderSections();
}
