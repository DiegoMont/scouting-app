class RadioWithImages extends Question {
    constructor(question, name, error='Debes seleccionar una opción'){
        super(question, name, error);
        this.questionContainer = document.createElement('div');
        this.questionContainer.classList.add('radio-imagenes', 'flexbox');
    }

    addInput(inputData){
        const input = this.getInput(inputData);
        const label = this.getLabel(inputData);
        this.inputs.push(input);
        this.questionContainer.appendChild(input);
        this.questionContainer.appendChild(label);
    }

    getInput(inputData){
        const input = document.createElement('input');
        input.classList.add(ocultar);
        input.type = 'radio';
        input.name = this.name;
        input.id = inputData.id;
        input.value = inputData.value;
        return input;
    }

    getLabel(labelData){
        const label = document.createElement(label);
        label.classList.add('img-opc', 'btn');
        label.for = 'labelData.';
        const img = document.createElement('img');
        img.src = labelData.img;
        label.appendChild(img);
        return label;
    }
}

class RegionalSelector extends Question {

    static REGIONALES = [
        ['monterrey', 'Monterrey']
    ];

    constructor(){
        super('', 'regional', '');
        this.questionContainer = document.createElement('div');
        this.inputs[0] = this.getSelect();
        const label = this.getLabel();
        this.questionContainer.appendChild(label);
        this.questionContainer.appendChild(this.inputs[0]);
    }

    addToContainer(container){
        container.appendChild(this.questionContainer);
    }

    getLabel(){
        const label = document.createElement('label');
        label.for = this.name;
        label.innerText = 'Regional';
        return label;
    }

    getSelect(){
        const select = document.createElement('select');
        select.name = this.name;
        select.id = this.name;
        for (const regional of RegionalSelector.REGIONALES) {
            const regionalOption = document.createElement('option');
            regionalOption.value = regional[0];
            regionalOption.innerText = regional[1];
            select.appendChild(regionalOption);
        }
        return select;
    }
}
