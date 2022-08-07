function controlDashboard() {
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