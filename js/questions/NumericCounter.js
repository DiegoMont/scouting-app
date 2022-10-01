class NumericCounter extends Question {
    minValue;
    maxValue;

    constructor(question, name, minValue, maxValue){
        super(question, name, '');
        this.questionContainer = document.createElement('div');
        this.questionContainer.classList.add('flexbox', 'contador');
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.setInput();
        const addBtn = this.getButton('aumentar', 'add');
        const substractBtn = this.getButton('restar', 'minus');
        const aux = this.inputs[0];
        addBtn.addEventListener('click', function() {
            let num = Number(aux.value);
            num++;
            aux.value = Math.min(num, maxValue);
        });
        substractBtn.addEventListener('click', function() {
            let num = Number(aux.value);
            num--;
            aux.value = Math.max(num, minValue);
        });
        this.questionContainer.appendChild(substractBtn);
        this.questionContainer.appendChild(this.inputs[0]);
        this.questionContainer.appendChild(addBtn);
    }

    toFirestore() {
        const questionObject = super.toFirestore();
        questionObject.minValue = this.minValue;
        questionObject.maxValue = this.maxValue;
        return questionObject;
    }

    getButton(className, imgName){
        const btn = document.createElement('button');
        btn.classList.add('btn-symbol', className);
        btn.type = 'button';
        const img = document.createElement('img');
        img.src = `${URL}/img/${imgName}.svg`;
        btn.appendChild(img);
        return btn;
    }

    setInput(){
        this.inputs[0] = document.createElement('input');
        this.inputs[0].type = 'number';
        this.inputs[0].name = this.name;
        this.inputs[0].id = this.name;
        this.inputs[0].value = this.minValue;
        this.inputs[0].classList.add('cifra-contador');
    }

    validate(){
        this.inputs[0].value = Number(this.inputs[0].value);
        if (isNaN(this.inputs[0].value))
            this.inputs[0].value = this.minValue;
        return true;
    }
}