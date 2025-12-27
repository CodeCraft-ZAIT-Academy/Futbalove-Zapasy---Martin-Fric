const leagueLinks = document.querySelectorAll('.league-item');
const sections = document.querySelectorAll('.league-section');

leagueLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const league = link.dataset.league;

        sections.forEach(section => {
            if (league === 'all' || section.dataset.league === league) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});