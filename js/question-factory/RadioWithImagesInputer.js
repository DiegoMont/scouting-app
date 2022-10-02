class RadioWithImagesInputer extends QuestionInputer {
    options;

    static AVAILABLE_IMAGES = [
        {src: 'img/Confused-Robot.jpg', name: 'Robot confundido'},
        {src: 'img/robot-roto.jpg', name: 'Robot roto'},
        {src: 'img/chasis/Mecanum.jpg', name: 'Chasis Mecanum'},
        {src: 'img/chasis/Omni.jpg', name: 'Chasis Omni'},
        {src: 'img/chasis/West_Coast.jpg', name: 'Chasis West Coast'}
    ];

    constructor() {
        super('Opciones radio con imágenes');
        this.options = [];
    }

    formSetter(question, inputsContainer) {
        const addOptionBtn = document.createElement('button');
        addOptionBtn.type = 'button';
        addOptionBtn.innerText = 'Añadir opciones';
        addOptionBtn.classList.add('text-yellow-btn');
        for(const input of question.inputs) {
            console.log(input);
            this.showOptionInputs(inputsContainer, {
                id: '',
                value: '',
                img: ''
            });
        }
        const auxPtr = this;
        addOptionBtn.addEventListener('click', function() {
            auxPtr.showOptionInputs(inputsContainer, {
                id: '',
                value: '',
                img: ''
            });
        })
        inputsContainer.appendChild(addOptionBtn);
    }

    getNewQuestionInstance() {
        return new RadioWithImages('', '');
    }

    updateQuestionProperties(question, newData) {
        const sources = newData.getAll('img-src[]')
        const names = newData.getAll('option-name[]')
        const textValues = newData.getAll('option-value[]')
        question.inputs = []
        for (let i = 0; i < newData.length; i++) {
            const optionData = {
                id: names[i],
                value: textValues[i],
                img: sources[i]
            }
            question.addInput(optionData)
        }
        
    }

    showOptionInputs(inputsContainer, inputData) {
        const inputs = this.getOptionInputs(inputData);
        this.options.push(inputs);
        inputsContainer.appendChild(inputs);
    }

    getOptionInputs(optionData) {
        const newOption = document.createElement('div');
        newOption.classList.add('option-inputs');
        newOption.innerHTML = `<p>Opción</p>`;
        this.addQuestionPropertyInput(newOption, 'ID opción', optionData.id, 'option-name[]', 'id único');
        const labelInput = this.getLabelAndInput('Imagen', '', 'img-src[]', 'URL de imagen')
        labelInput[1].setAttribute('list', 'available-images');
        newOption.appendChild(labelInput[0]);
        newOption.appendChild(labelInput[1])
        const imgOptions = document.createElement('datalist');
        imgOptions.id = 'available-images';
        for (const img of RadioWithImagesInputer.AVAILABLE_IMAGES)
            imgOptions.innerHTML += `<option value="${img.src}">`;
        newOption.appendChild(imgOptions);
        this.addQuestionPropertyInput(newOption, 'Valor a mostrar en resultados', optionData.value, 'option-value[]', 'Descripción');
        return newOption;
    }
}