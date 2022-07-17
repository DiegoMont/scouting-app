class RegionalSelector extends Question {

    constructor(id){
        super('', 'regional', '');
        this.questionContainer = document.createElement('div');
        this.inputs[0] = this.getSelect(id);
        const label = this.getLabel(id);
        this.questionContainer.appendChild(label);
        this.questionContainer.appendChild(this.inputs[0]);
    }

    addToContainer(container){
        container.appendChild(this.questionContainer);
    }

    getLabel(id){
        const label = document.createElement('label');
        label.for = id;
        label.innerText = 'Regional';
        return label;
    }

    getSelect(id){
        const select = document.createElement('select');
        select.name = this.name;
        select.id = id;
        for (const regional of Season.REGIONALES) {
            const regionalOption = document.createElement('option');
            regionalOption.value = regional;
            regionalOption.innerText = regional;
            select.appendChild(regionalOption);
        }
        return select;
    }
    validate(){
        return true;
    }
}