// ----------------------------
// Filtrovanie lig podľa sidebaru
// ----------------------------
const leagueLinks = document.querySelectorAll('.league-item');
const sections = document.querySelectorAll('.league-section');

leagueLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const league = link.dataset.league;

        sections.forEach(section => {
            if (league === 'all' || section.dataset.league === league) {
                section.style.display = 'block'; // Zobraziť vybranú ligu

                // Aktivovať prvý tab len pre zobrazenú ligu
                const firstTab = section.querySelector('.tab-btn');
                if (firstTab) firstTab.click();

            } else {
                section.style.display = 'none'; // Skryť ostatné ligy
            }
        });
    });
});

// ----------------------------
// Prepínanie tabov v každej lige
// ----------------------------
document.querySelectorAll('.league-section').forEach(section => {
    const tabs = section.querySelectorAll('.tab-btn');
    const panels = section.querySelectorAll('.tab-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Odstrániť aktivitu z ostatných tlačidiel
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Zobrazí panel zodpovedajúci tlačidlu
            const target = tab.dataset.tab;
            panels.forEach(panel => {
                if (panel.dataset.tab === target) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        });
    });

    // Aktivovať prvý tab pri načítaní stránky (pre každú ligu)
    if (tabs.length > 0) tabs[0].click();
});