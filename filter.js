// FILTER LÍG
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

// TABY (GLOBÁLNE)
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