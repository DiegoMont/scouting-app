class MediaUpload extends Question {
    is_optional;
    constructor(question, name, is_optional=true) {
        super(question, name, language.questionError8);
        this.is_optional = is_optional;
        const imgPreview = this.getImagePreview(name);
        const input = this.getInput(name);
        const label = this.getLabel(name);
        this.configureUploadManager(input);
        this.inputs.push(input);
        this.questionContainer = document.createElement('div');
        this.questionContainer.appendChild(label);
        this.questionContainer.appendChild(input);
        this.questionContainer.appendChild(imgPreview);
    }

    validate() {
        const uploadedFilesCount = this.inputs[0].files.length;
        const isValid = this.is_optional || uploadedFilesCount > 0;
        if(isValid)
            this.hideError();
        else
            this.showError();
        return isValid;
    }

    getImagePreview(name) {
        const img = document.createElement('img');
        img.id = `preview-img-${name}`;
        img.classList.add('img-preview');
        return img;
    }

    getInput(name) {
        const input = document.createElement('input');
        input.type = 'file';
        input.name = name;
        input.id = name;
        input.accept = "image/*";
        return input;
    }

    getLabel(name) {
        const label = document.createElement('label');
        label.innerText = language.questionText1;
        label.htmlFor = name;
        label.classList.add('img-upload');
        return label;
    }

    configureUploadManager(input) {
        input.addEventListener('change', () => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(input.files[0]);
            fileReader.addEventListener('load', () => {
                const imageData = fileReader.result;
                const originalImage = document.querySelector(`#preview-img-${input.name}`);
                originalImage.src = imageData;
            });
        });
    }
}