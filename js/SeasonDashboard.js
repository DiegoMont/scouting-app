class SeasonDashboardController {
    updateSeasonForm;
    eventInputsStack;

    constructor(formSelector) {
        this.updateSeasonForm = document.querySelector(formSelector);
    }

    controlDashboard() {
        document.querySelector('#new-season').addEventListener('click', () => {
            router.displayPage(router.pages.editSeason);
            this.eventInputsStack = Array();
            this.addEventInput('');
        });
        document.querySelector('#edit-season button.cancel-btn').addEventListener('click', () => {
            updateSeasonForm.reset();
            router.displayPage(router.pages.menu);
        });
        const auxPointer = this;
        this.updateSeasonForm.addEventListener('submit', e => {
            e.preventDefault();
            if(auxPointer.seasonDataIsValid()) {
                router.displayPage(router.pages.loading);
                const formData = new FormData(e.target);
                this.writeSeason(formData);
            }
        });
        db.collection('seasons').onSnapshot(snapshot => {
            const changes = snapshot.docChanges();
            changes.forEach(change => {
                const seasonRepository = new SeasonRepository();
                if(change.type == 'added' || change.type == 'modified') {
                    const season = seasonRepository.fromFirestore(change.doc);
                    seasons[season.id] = season;
                    this.renderDashboard();
                }
            })
        });
    }

    addEventInput(location) {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'regional[]';
        input.value = location;
        input.placeholder = 'Monterrey';
        this.eventInputsStack.push(input);
        document.querySelector('.events-list').appendChild(input);
        input.addEventListener('input', e => {
            const lastEventInput = this.eventInputsStack[this.eventInputsStack.length-1];
            if(e.target.value.length > 0 && e.target === lastEventInput)
                this.addEventInput('');
        });
    }

    renderDashboard() {
        const cardContainer = document.querySelector('#menu .season-cards');
        cardContainer.innerHTML = '';
        for (const id in seasons) {
            const season = seasons[id];
            const card = this.getSeasonCard(season);
            cardContainer.appendChild(card);
        }
    }

    writeSeason(seasonData) {
        const seasonName = seasonData.get('season-name');
        const regionals = seasonData.getAll('regional[]');
        regionals.pop();
        const newSeason = new Season(seasonName, regionals);
        const seasonRepository = new SeasonRepository();
        seasonRepository.saveSeason(newSeason).then(() => {
            this.updateSeasonForm.reset();
            router.displayPage(router.pages.menu);
        });
    }

    seasonDataIsValid() {
        let isDataValid = true;
        const seasonNameError = document.querySelector('#season-name-error');
        const seasonEventsError = document.querySelector('#events-lists-error');
        if(this.updateSeasonForm['season-name'].value.length < 3) {
            seasonNameError.innerText = 'El nombre de la temporada debe ser más grande';
            seasonNameError.classList.remove('ocultar');
            isDataValid = false;
        } else
            seasonNameError.classList.add('ocultar');
        if(this.eventInputsStack.length == 1) {
            seasonEventsError.innerText = 'Ingresa al menos un regional';
            seasonEventsError.classList.remove('ocultar');
            isDataValid = false;
        } else for(let i = this.eventInputsStack.length-2; i > -1; i--) {
            const regional = this.eventInputsStack[i].value;
            seasonEventsError.classList.add('ocultar');
            if(regional.length < 3) {
                seasonEventsError.innerText = 'Los regionales deben tener al menos 3 caracteres';
                seasonEventsError.classList.remove('ocultar');
                isDataValid = false;
                break;
            }
        }
        return isDataValid;
    }

    getSeasonCard(season) {
        const card = document.createElement('div');
        card.classList.add('season-card');
        card.innerHTML = `
        <div class="card-header flexbox">
          <h2>${season.SEASON_NAME}</h2>
          <button type="button"><img src="../img/pencil.svg" alt="Edit season"></button>
        </div>
        <div>
          <a>Match form</a><br>
          <a>Pit form</a>
        </div>`;
        return card;
    }
}