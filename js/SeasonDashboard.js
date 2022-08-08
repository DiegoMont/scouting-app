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
        this.updateSeasonForm.addEventListener('submit', this.handleSeasonUpdate);
        this.renderDashboard();
    }

    addEventInput(location) {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'regional[]';
        input.value = location;
        this.eventInputsStack.push(input);
        document.querySelector('.events-list').appendChild(input);
        input.addEventListener('input', e => {
            const lastEventInput = this.eventInputsStack[this.eventInputsStack.length-1];
            if(e.target.value.length > 0 && e.target === lastEventInput)
                this.addEventInput('');
        });
    }

    handleSeasonUpdate(e) {
        e.preventDefault();
        if(seasonDataIsValid()) {
            router.displayPage(router.pages.loading);
            const formData = new FormData(e.target);
            this.writeSeason(formData);
        }
    }

    renderDashboard() {
        const cardContainer = document.querySelector('#menu .season-cards');
        for(const season of seasons) {
            const card = this.getSeasonCard(season);
            cardContainer.appendChild(card);
        }
    }

    writeSeason(seasonData) {
        console.log(seasonData.get('season-name'));
        console.log(seasonData.get(''));
    }

    seasonDataIsValid() {
        let isDataValid = true;
        const seasonNameError = document.querySelector('#season-name-error');
        const seasonEventsError = document.querySelector('#events-lists-error');
        if(updateSeasonForm['season-name'].value.length < 4) {
            seasonNameError.innerText = 'El nombre de la temporada debe ser más grande';
            seasonNameError.classList.remove('ocultar');
            isDataValid = false;
        } else
            seasonNameError.classList.remove('ocultar');
        console.log(updateSeasonForm['regional[]']);
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