/* =========================
   NAČÍTANIE TÍMU Z URL
========================= */
const params = new URLSearchParams(window.location.search);
const teamKey = params.get('team');

/* =========================
   DÁTA O KLUBOCH
========================= */
const teams = {

    /* PREMIER LEAGUE */

    liverpool: {
        name: "Liverpool FC",
        league: "Premier League",
        logo: "Obrázky/Liverpool.png",
        stadium: "Anfield",
        city: "Liverpool",
        founded: "1892",
        trophies: "19× Premier League, 6× Liga majstrov",
        description: "Liverpool FC je anglický futbalový klub známy svojou bohatou históriou a fanúšikovskou základňou."
    },
    manunited: {
        name: "Manchester United",
        league: "Premier League",
        logo: "Obrázky/Man United.png",
        stadium: "Old Trafford",
        city: "Manchester",
        founded: "1878",
        trophies: "20× Premier League, 3× Liga majstrov",
        description: "Manchester United patrí medzi najúspešnejšie kluby v histórii anglického futbalu."
    },

    /* LA LIGA */

    realmadrid: {
        name: "Real Madrid",
        league: "La Liga",
        logo: "Obrázky/Real Madrid.png",
        stadium: "Santiago Bernabéu",
        city: "Madrid",
        founded: "1902",
        trophies: "14× La Liga, 15× Copa del Rey, 14× Liga majstrov",
        description: "Real Madrid je španielsky futbalový klub známy svojou bohatou históriou a úspešnými ročníkmi v rámci Ligy majstrov."
    },
    barcelona: {
        name: "FC Barcelona",
        league: "La Liga",
        logo: "Obrázky/Barcelona.png",
        stadium: "Spotify Camp Nou",
        city: "Barcelona",
        founded: "1899",
        trophies: "27× La Liga, 31× Copa del Rey, 5× Liga majstrov",
        description: "FC Barcelona je jeden z najúspešnejších španielskych klubov, známy svojou filozofiou hry založenou na držaní lopty a akadémiou La Masia."
    }

    /*BUNDESLIGA */


    /* LIGUE 1 */


    /* SERIE A */
};

/* =========================
   ELEMENTY
========================= */
const teamName = document.getElementById('teamName');
const teamLeague = document.getElementById('teamLeague');
const teamLogo = document.getElementById('teamLogo');

const teamStadium = document.getElementById('teamStadium');
const teamCity = document.getElementById('teamCity');
const teamFounded = document.getElementById('teamFounded');
const teamTrophies = document.getElementById('teamTrophies');
const teamDescription = document.getElementById('teamDescription');

/* =========================
   ZOBRAZENIE TÍMU
========================= */
if (!teamKey || !teams[teamKey]) {
    teamName.textContent = "Klub nebol nájdený";
} else {
    const team = teams[teamKey];

    teamName.textContent = team.name;
    teamLeague.textContent = team.league;
    teamLogo.src = team.logo;

    teamStadium.textContent = team.stadium;
    teamCity.textContent = team.city;
    teamFounded.textContent = team.founded;
    teamTrophies.textContent = team.trophies;
    teamDescription.textContent = team.description;
}

/* =========================
   SÚPISKY HRÁČOV
========================= */
const squads = {
    liverpool: [
        // BRANKÁRI
        { number: 1, name: "Alisson Becker", position: "Brankár", country: "BRA" },
        { number: 25, name: "Giorgi Mamardashvili", position: "Brankár", country: "GEO" },
        { number: 28, name: "Freddie Woodman", position: "Brankár", country: "ENG" },

        // OBRANCOVIA
        { number: 2, name: "Joe Gomez", position: "Obranca", country: "ENG" },
        { number: 3, name: "Wataru Endō", position: "Obranca", country: "JPN" },
        { number: 4, name: "Virgil van Dijk", position: "Obranca", country: "NED" },
        { number: 5, name: "Ibrahima Konaté", position: "Obranca", country: "FRA" },
        { number: 6, name: "Milos Kerkez", position: "Obranca", country: "HUN" },
        { number: 12, name: "Conor Bradley", position: "Obranca", country: "NIR" },
        { number: 26, name: "Andy Robertson", position: "Obranca", country: "SCO" },
        { number: 30, name: "Jeremie Frimpong", position: "Obranca", country: "NED" },
        { number: 92, name: "Wellity Lucky", position: "Obranca", country: "ESP" },

        // ZÁLOŽNÍCI
        { number: 7, name: "Florian Wirtz", position: "Záložník", country: "GER" },
        { number: 8, name: "Dominik Szoboszlai", position: "Záložník", country: "HUN" },
        { number: 10, name: "Alexis Mac Allister", position: "Záložník", country: "ARG" },
        { number: 17, name: "Curtis Jones", position: "Záložník", country: "ENG" },
        { number: 38, name: "Ryan Gravenberch", position: "Záložník", country: "NED" },
        { number: 42, name: "Trey Nyoni", position: "Záložník", country: "ENG" },

        // ÚTOČNÍCI
        { number: 9, name: "Alexander Isak", position: "Útočník", country: "SWE" },
        { number: 11, name: "Mohamed Salah", position: "Útočník", country: "EGY" },
        { number: 14, name: "Federico Chiesa", position: "Útočník", country: "ITA" },
        { number: 18, name: "Cody Gakpo", position: "Útočník", country: "NED" },
        { number: 22, name: "Hugo Ekitiké", position: "Útočník", country: "FRA" },
        { number: 68, name: "Kieran Morrison", position: "Útočník", country: "NIR" },
        { number: 73, name: "Rio Ngumoha", position: "Útočník", country: "ENG" }
    ],
    manunited: [
        { number: 24, name: "André Onana", position: "Brankár", country: "CMR" },
        { number: 6, name: "Lisandro Martínez", position: "Obranca", country: "ARG" },
        { number: 8, name: "Bruno Fernandes", position: "Záložník", country: "POR" }
    ]
};



/* =========================
   VYKRESLENIE SÚPISKY
========================= */
const squadBox = document.getElementById('squadList');

if (squadBox && squads[teamKey]) {

    const players = squads[teamKey];

    const goalkeepers = document.getElementById('goalkeepers');
    const defenders = document.getElementById('defenders');
    const midfielders = document.getElementById('midfielders');
    const forwards = document.getElementById('forwards');

    function renderPlayers(listEl, role) {
        listEl.innerHTML = players
            .filter(p => p.position === role)
            .map(player => `
                <div class="player-row">
                    <span class="player-number">#${player.number}</span>
                    <span class="player-name">${player.name}</span>
                    <span class="player-position">${player.position}</span>
                    <span class="player-country">${player.country}</span>
                </div>
            `).join('');
    }

    renderPlayers(goalkeepers, "Brankár");
    renderPlayers(defenders, "Obranca");
    renderPlayers(midfielders, "Záložník");
    renderPlayers(forwards, "Útočník");
}

/* =========================
   TABY (TEAM PAGE)
========================= */
document.querySelectorAll('.team-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.team-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.team-tab-content').forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.querySelector(`.team-tab-content[data-tab="${tab.dataset.tab}"]`)
            .classList.add('active');
    });
});