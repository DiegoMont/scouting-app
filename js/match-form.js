function createMatchForm() {
    // Add your code below
    const duckAuto = new RadioWithImages('Delivers Duck', 'duck-delivery-auto');
    duckAuto.addInput({
        id: 'duck-delivery-auto-yes',
        value: 'Delivers Duck',
        img: 'img/duck.jpg'
    });
    duckAuto.addInput({
        id: 'duck-delivery-auto-no',
        value: 'Does not deliver Duck',
        img: 'img/robot-roto.jpg'
    });

    const preloadedFreight = new RadioWithText('Preloaded freight delivered to', 'preloaded-freight');
    preloadedFreight.addInput({
        id: 'preloaded-freight-storage',
        value: 'Storage Unit',
    });
    preloadedFreight.addInput({
        id: 'preloaded-freight-hub',
        value: 'Shipping Hub',
    });
    preloadedFreight.addInput({
        id: 'preloaded-freight-not-delivered',
        value: 'Not delivered',
    });

    const barcodeBonus = new TrueFalseButtons('Achieves the barcode bonus', 'barcode', 'Achieves', 'Fails');

    const autoParking = new RadioWithText('Parking', 'auto-park');
    autoParking.addInput({
        id: 'auto-park-complete-storage',
        value: 'Completely in storage'
    });
    autoParking.addInput({
        id: 'auto-park-storage',
        value: 'In storage'
    });
    autoParking.addInput({
        id: 'auto-park-complete-warehouse',
        value: 'Completely in warehouse'
    });
    autoParking.addInput({
        id: 'auto-park-warehouse',
        value: 'In warehouse'
    });
    autoParking.addInput({
        id: 'auto-park-no',
        value: 'No'
    });

    matchForm.sections.autonomous.addQuestion(duckAuto);
    matchForm.sections.autonomous.addQuestion(preloadedFreight);
    matchForm.sections.autonomous.addQuestion(barcodeBonus);
    matchForm.sections.autonomous.addQuestion(autoParking);

    const storageUnitFreight = new NumericCounter('Storage Unit', 'storage-freight', 0, Season.TOTAL_FREIGHT_IN_FIELD);

    const levelOne = new NumericCounter('Level 1 Shipping Hub', 'level-one', 0, Season.TOTAL_FREIGHT_IN_FIELD);

    const levelTwo = new NumericCounter('Level 2 Shipping Hub', 'level-two', 0, Season.TOTAL_FREIGHT_IN_FIELD);

    const levelThree = new NumericCounter('Level 3 Shipping Hub', 'level-three', 0, Season.TOTAL_FREIGHT_IN_FIELD);

    const sharedHub = new NumericCounter('Shared Hub', 'level-three', 0, Season.TOTAL_FREIGHT_IN_FIELD);

    const duckEnd = new RadioWithImages('Delivers Duck', 'duck-delivery-end');
    duckEnd.addInput({
        id: 'duck-delivery-end-yes',
        value: 'Delivers Duck',
        img: 'img/duck.jpg'
    });
    duckEnd.addInput({
        id: 'duck-delivery-end-no',
        value: 'Does not deliver Duck',
        img: 'img/robot-roto.jpg'
    });

    const capping = new RadioWithImages('Capping', 'capping');
    capping.addInput({
        id: 'capping-success',
        value: 'Capping successful',
        img: 'img/capping-success.jpg'
    });
    capping.addInput({
        id: 'capping-fail',
        value: 'Capping fail',
        img: 'img/capping-fail.jpg'
    });
    capping.addInput({
        id: 'no-success',
        value: 'No capping',
        img: 'img/robot-roto.jpg'
    });

    const barriers = new CheckboxWithText('Para llegar al Warehouse. Selecciona las que apliquen');
    barriers.addInput({
        id: 'barriers-low',
        value: 'Pasa sobre las barreras'
    });
    barriers.addInput({
        id: 'barriers-no',
        value: 'Pasa sobre el espacio libre'
    });
    barriers.addInput({
        id: 'barriers-high',
        value: 'Pasa entre el espacio libre y las barreras'
    });

    const intakeControl = new CheckboxWithText('Eficiencia agarrando los objetos');
    intakeControl.addInput({
        id: 'eficiencia-agarre-1',
        value: 'Toma objetos en el primer intento'
    });
    intakeControl.addInput({
        id: 'eficiencia-agarre-2',
        value: 'Suelta el objeto constantemente'
    });
    intakeControl.addInput({
        id: 'eficiencia-agarre-3',
        value: 'Ajusta demasiado la posición del robot para poder tomar el objeto'
    });
    intakeControl.addInput({
        id: 'eficiencia-agarre-4',
        value: 'Empuja los objetos para moverlos'
    });

    matchForm.sections.teleop.addQuestion(storageUnitFreight);
    matchForm.sections.teleop.addQuestion(levelOne);
    matchForm.sections.teleop.addQuestion(levelTwo);
    matchForm.sections.teleop.addQuestion(levelThree);
    matchForm.sections.teleop.addQuestion(sharedHub);
    matchForm.sections.teleop.addQuestion(duckEnd);
    matchForm.sections.teleop.addQuestion(capping);
    matchForm.sections.teleop.addQuestion(barriers);
    matchForm.sections.teleop.addQuestion(intakeControl);
    // Add your code above
    matchForm.renderSections();
}
