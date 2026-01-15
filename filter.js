
/* =========================
   FILTER LÍG
========================= */
document.querySelectorAll('.league-item').forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        const league = item.dataset.league;

        document.querySelectorAll('.league-section').forEach(section => {
            section.style.display =
                league === 'all' || section.dataset.league === league
                    ? 'block'
                    : 'none';
        });
    });
});


/* =========================
   TABY (GLOBÁLNE)
========================= */
const tabs = document.querySelectorAll('.global-tabs .tab-btn');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const target = tab.dataset.tab;

        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.toggle('active', panel.dataset.tab === target);
        });
    });
});


//MODÁL ZÁPASU (FLASHCORE)
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('matchModal');
    const closeBtn = modal.querySelector('.modal-close');

    const modalHome = document.getElementById('modalHomeName');
    const modalAway = document.getElementById('modalAwayName');
    const modalHomeLogo = document.getElementById('modalHomeLogo');
    const modalAwayLogo = document.getElementById('modalAwayLogo');

    const modalLeagueName = document.getElementById('modalLeagueName');
    const modalLeagueLogo = document.getElementById('modalLeagueLogo');
    const modalRound = document.getElementById('modalRound');
    const modalDateDisplay = document.getElementById('modalDateDisplay');
    const modalStadium = document.getElementById('modalStadium');
    const modalCapacity = document.getElementById('modalCapacity');

    // 1 listener pre všetky zápasy
    document.addEventListener('click', e => {
        const match = e.target.closest('.match-row');
        if (!match) return;
    
        const logos = match.querySelectorAll('.team-logo');
        if (logos.length < 2) return;
    
        // Tímy
        modalHome.textContent = match.dataset.home;
        modalAway.textContent = match.dataset.away;
        modalHomeLogo.src = logos[0].src;
        modalAwayLogo.src = logos[1].src;
    
        // Liga + kolo
        modalLeagueName.textContent = match.dataset.league || '';
        modalRound.textContent = match.dataset.round || '';
        modalLeagueLogo.src = match.dataset.logo || "Obrázky/default-league.png";
    
        // Dátum nad VS
        modalDateDisplay.textContent = match.dataset.date || '';
    
        // Detaily zápasu
        modalStadium.textContent = match.dataset.stadium || '';
        modalCapacity.textContent = match.dataset.capacity || '';
    
        modal.classList.add('active');
      });

    // zatvorenie
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('active');
  });
});