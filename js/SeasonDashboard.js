function controlDashboard() {
    const updateSeasonForm = document.querySelector('#edit-season form');
    document.querySelector('#new-season').addEventListener('click', () => {
        router.displayPage(router.pages.editSeason);
    });
    document.querySelector('#edit-season button.cancel-btn').addEventListener('click', () => {
        updateSeasonForm.reset();
        router.displayPage(router.pages.menu);
    });
    renderDashboard();
}

function renderDashboard() {
    const cardContainer = document.querySelector('#menu .season-cards');
    for(const season of seasons) {
        const card = getSeasonCard(season);
        cardContainer.appendChild(card);
    }
}

function getSeasonCard(season) {
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