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

     arsenal: {
        name: "Arsenal FC",
        league: "Premier League",
        logo: "Obrázky/Arsenal.png",
        stadium: "Emirates Stadium",
        city: "London",
        founded: "1886",
        trophies: "13× Premier League, 14× FA Cup",
        description: "Arsenal FC je londýnsky klub známy svojou ofenzívnou hrou a bohatou históriou."
    },
    astonvilla: {
        name: "Aston Villa FC",
        league: "Premier League",
        logo: "Obrázky/Aston Villa.png",
        stadium: "Villa Park",
        city: "Birmingham",
        founded: "1874",
        trophies: "7× FA Cup, 1× Liga majstrov",
        description: "Aston Villa je jeden z najstarších anglických klubov s bohatou tradíciou."
    },
    bournemouth: {
        name: "AFC Bournemouth",
        league: "Premier League",
        logo: "Obrázky/Bournemouth.png",
        stadium: "Vitality Stadium",
        city: "Bournemouth",
        founded: "1899",
        trophies: "Žiadne významné trofeje",
        description: "AFC Bournemouth je klub známy svojím bojovným štýlom a rýchlym futbalom."
    },
    brentford: {
        name: "Brentford FC",
        league: "Premier League",
        logo: "Obrázky/Brentford.png",
        stadium: "Gtech Community Stadium",
        city: "London",
        founded: "1889",
        trophies: "Žiadne významné trofeje",
        description: "Brentford je moderný klub s progresívnym prístupom k analytike a hre."
    },
    brighton: {
        name: "Brighton & Hove Albion",
        league: "Premier League",
        logo: "Obrázky/Brighton.png",
        stadium: "American Express Community Stadium",
        city: "Brighton",
        founded: "1901",
        trophies: "Žiadne významné trofeje",
        description: "Brighton je známy svojou stabilitou v Premier League a progresívnym štýlom hry."
    },
    burnley: {
        name: "Burnley FC",
        league: "Premier League",
        logo: "Obrázky/Burnley.png",
        stadium: "Turf Moor",
        city: "Burnley",
        founded: "1882",
        trophies: "1× Premier League (1930–31)",
        description: "Burnley je tradičný anglický klub s pevnou obranou a tvrdou prácou."
    },
    chelsea: {
        name: "Chelsea FC",
        league: "Premier League",
        logo: "Obrázky/Chelsea.png",
        stadium: "Stamford Bridge",
        city: "London",
        founded: "1905",
        trophies: "6× Premier League, 2× Liga majstrov",
        description: "Chelsea je jeden z najúspešnejších klubov moderného anglického futbalu."
    },
    crystalpalace: {
        name: "Crystal Palace FC",
        league: "Premier League",
        logo: "Obrázky/Crystal Palace.png",
        stadium: "Selhurst Park",
        city: "London",
        founded: "1905",
        trophies: "Žiadne významné trofeje",
        description: "Crystal Palace je známy svojimi lojálnymi fanúšikmi a stabilnou prácou v lige."
    },
    everton: {
        name: "Everton FC",
        league: "Premier League",
        logo: "Obrázky/Everton.png",
        stadium: "Goodison Park",
        city: "Liverpool",
        founded: "1878",
        trophies: "9× Premier League, 5× FA Cup",
        description: "Everton je tradičný klub s bohatou históriou a veľkým rivalstvom s Liverpoolom."
    },
    fulham: {
        name: "Fulham FC",
        league: "Premier League",
        logo: "Obrázky/Fulham.png",
        stadium: "Craven Cottage",
        city: "London",
        founded: "1879",
        trophies: "Žiadne významné trofeje",
        description: "Fulham je historický londýnsky klub s unikátnou atmosférou pri rieke Temža."
    },
    leeds: {
        name: "Leeds United FC",
        league: "Premier League",
        logo: "Obrázky/Leeds.png",
        stadium: "Elland Road",
        city: "Leeds",
        founded: "1919",
        trophies: "3× Premier League, 1× Liga majstrov (finalista)",
        description: "Leeds United je klub s bohatou históriou a vášnivými fanúšikmi."
    },
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
    mancity: {
        name: "Manchester City FC",
        league: "Premier League",
        logo: "Obrázky/Man City.png",
        stadium: "Etihad Stadium",
        city: "Manchester",
        founded: "1880",
        trophies: "9× Premier League, 1× Liga majstrov",
        description: "Manchester City je dominantný klub Premier League s moderným štýlom a veľkým rozpočtom."
    },
    manunited: {
        name: "Manchester United FC",
        league: "Premier League",
        logo: "Obrázky/Man United.png",
        stadium: "Old Trafford",
        city: "Manchester",
        founded: "1878",
        trophies: "20× Premier League, 3× Liga majstrov",
        description: "Manchester United je jeden z najväčších klubov sveta s obrovskou fanúšikovskou základňou."
    },
    newcastle: {
        name: "Newcastle United FC",
        league: "Premier League",
        logo: "Obrázky/Newcastle.png",
        stadium: "St James' Park",
        city: "Newcastle upon Tyne",
        founded: "1892",
        trophies: "4× Premier League, 1× Liga majstrov (finalista)",
        description: "Newcastle je klub s vášnivými fanúšikmi a silnou atmosférou na štadióne."
    },
    nottingham: {
        name: "Nottingham Forest FC",
        league: "Premier League",
        logo: "Obrázky/Nottingham.png",
        stadium: "City Ground",
        city: "Nottingham",
        founded: "1865",
        trophies: "2× Liga majstrov, 1× Premier League",
        description: "Nottingham Forest je klub s bohatou históriou, známy najmä svojimi úspechmi v 70. a 80. rokoch."
    },
    sunderland: {
        name: "Sunderland AFC",
        league: "Premier League",
        logo: "Obrázky/Sunderland.png",
        stadium: "Stadium of Light",
        city: "Sunderland",
        founded: "1879",
        trophies: "6× Premier League, 2× FA Cup",
        description: "Sunderland je historický klub s veľkou fanúšikovskou základňou a tradičnou atmosférou."
    },
    tottenham: {
        name: "Tottenham Hotspur FC",
        league: "Premier League",
        logo: "Obrázky/Tottenham.png",
        stadium: "Tottenham Hotspur Stadium",
        city: "London",
        founded: "1882",
        trophies: "2× Premier League, 1× Liga majstrov (finalista)",
        description: "Tottenham je klub známy svojou ofenzívnou hrou a moderným štadiónom."
    },
    westham: {
        name: "West Ham United FC",
        league: "Premier League",
        logo: "Obrázky/West Ham.png",
        stadium: "London Stadium",
        city: "London",
        founded: "1895",
        trophies: "3× FA Cup",
        description: "West Ham je klub s veľkou fanúšikovskou základňou a silnou tradíciou v Londýne."
    },
    wolves: {
        name: "Wolverhampton Wanderers FC",
        league: "Premier League",
        logo: "Obrázky/Wolves.png",
        stadium: "Molineux Stadium",
        city: "Wolverhampton",
        founded: "1877",
        trophies: "3× Premier League (história ligy), 1× FA Cup",
        description: "Wolves sú klub známy svojou tvrdou obranou a stabilitou v lige."
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
    /* PREMIER LEAGUE */
     arsenal: [
    // BRANKÁRI
    { number: 1, name: "David Raya", position: "Brankár", country: "ESP" },
    { number: 13, name: "Karl Hein", position: "Brankár", country: "EST" },
    { number: 33, name: "Arthur Okonkwo", position: "Brankár", country: "ENG" },

    // OBRANCOVIA
    { number: 2, name: "Ben White", position: "Obranca", country: "ENG" },
    { number: 3, name: "Kieran Tierney", position: "Obranca", country: "SCO" },
    { number: 4, name: "Jurrien Timber", position: "Obranca", country: "NED" },
    { number: 5, name: "Gabriel", position: "Obranca", country: "BRA" },
    { number: 6, name: "Jakub Kiwior", position: "Obranca", country: "POL" },
    { number: 12, name: "Oleksandr Zinchenko", position: "Obranca", country: "UKR" },
    { number: 18, name: "Takehiro Tomiyasu", position: "Obranca", country: "JPN" },
    { number: 22, name: "Jorginho", position: "Záložník", country: "ITA" }, // (nie obranca ale nechám v štruktúre)
    { number: 26, name: "Nuno Tavares", position: "Obranca", country: "POR" },

    // ZÁLOŽNÍCI
    { number: 8, name: "Martin Ødegaard", position: "Záložník", country: "NOR" },
    { number: 10, name: "Bukayo Saka", position: "Záložník", country: "ENG" },
    { number: 11, name: "Gabriel Martinelli", position: "Záložník", country: "BRA" },
    { number: 14, name: "Eddie Nketiah", position: "Záložník", country: "ENG" },
    { number: 15, name: "Thomas Partey", position: "Záložník", country: "GHA" },
    { number: 19, name: "Leandro Trossard", position: "Záložník", country: "BEL" },
    { number: 20, name: "Kai Havertz", position: "Záložník", country: "GER" },
    { number: 21, name: "Declan Rice", position: "Záložník", country: "ENG" },
    { number: 24, name: "Jorginho", position: "Záložník", country: "ITA" },

    // ÚTOČNÍCI
    { number: 7, name: "Gabriel Jesus", position: "Útočník", country: "BRA" },
    { number: 9, name: "Eddie Nketiah", position: "Útočník", country: "ENG" },
    { number: 17, name: "Leandro Trossard", position: "Útočník", country: "BEL" },
    { number: 23, name: "Reiss Nelson", position: "Útočník", country: "ENG" }
  ],

  astonvilla: [
    // BRANKÁRI
    { number: 1, name: "Emiliano Martínez", position: "Brankár", country: "ARG" },
    { number: 12, name: "Robin Olsen", position: "Brankár", country: "SWE" },
    { number: 13, name: "Kepa Arrizabalaga", position: "Brankár", country: "ESP" },

    // OBRANCOVIA
    { number: 2, name: "Matty Cash", position: "Obranca", country: "POL" },
    { number: 3, name: "Tyrone Mings", position: "Obranca", country: "ENG" },
    { number: 4, name: "Ezri Konsa", position: "Obranca", country: "ENG" },
    { number: 5, name: "Cameron Archer", position: "Obranca", country: "ENG" },
    { number: 16, name: "Boubacar Kamara", position: "Obranca", country: "FRA" },
    { number: 24, name: "Diego Carlos", position: "Obranca", country: "BRA" },
    { number: 33, name: "Diego Gonzalez", position: "Obranca", country: "ESP" },

    // ZÁLOŽNÍCI
    { number: 6, name: "John McGinn", position: "Záložník", country: "SCO" },
    { number: 8, name: "Douglas Luiz", position: "Záložník", country: "BRA" },
    { number: 10, name: "Youri Tielemans", position: "Záložník", country: "BEL" },
    { number: 14, name: "Jacob Ramsey", position: "Záložník", country: "ENG" },
    { number: 17, name: "Boubacar Kamara", position: "Záložník", country: "FRA" },
    { number: 18, name: "Matheus Cunha", position: "Záložník", country: "BRA" },
    { number: 19, name: "Alex Moreno", position: "Záložník", country: "ESP" },

    // ÚTOČNÍCI
    { number: 9, name: "Ollie Watkins", position: "Útočník", country: "ENG" },
    { number: 11, name: "Leon Bailey", position: "Útočník", country: "JAM" },
    { number: 15, name: "Anwar El Ghazi", position: "Útočník", country: "NED" },
    { number: 27, name: "Jacob Ramsey", position: "Útočník", country: "ENG" }
  ],

  bournemouth: [
    // BRANKÁRI
    { number: 1, name: "Mark Travers", position: "Brankár", country: "IRL" },
    { number: 13, name: "Cameron Dawson", position: "Brankár", country: "ENG" },
    { number: 25, name: "James Hill", position: "Brankár", country: "ENG" },

    // OBRANCOVIA
    { number: 2, name: "Jordan Zemura", position: "Obranca", country: "ZIM" },
    { number: 3, name: "Adam Smith", position: "Obranca", country: "ENG" },
    { number: 4, name: "Chris Mepham", position: "Obranca", country: "WAL" },
    { number: 5, name: "Lloyd Kelly", position: "Obranca", country: "ENG" },
    { number: 15, name: "Korey Smith", position: "Obranca", country: "ENG" },

    // ZÁLOŽNÍCI
    { number: 6, name: "Dominic Solanke", position: "Záložník", country: "ENG" },
    { number: 7, name: "Ryan Christie", position: "Záložník", country: "SCO" },
    { number: 8, name: "Jaidon Anthony", position: "Záložník", country: "ENG" },
    { number: 11, name: "Jordan Rossiter", position: "Záložník", country: "ENG" },

    // ÚTOČNÍCI
    { number: 9, name: "Antoine Semenyo", position: "Útočník", country: "GHA" },
    { number: 10, name: "Marcus Tavernier", position: "Útočník", country: "ENG" },
    { number: 14, name: "Alex Scott", position: "Útočník", country: "ENG" }
  ],

  brentford: [
    // BRANKÁRI
    { number: 1, name: "Mark Flekken", position: "Brankár", country: "NED" },
    { number: 21, name: "Thomas Strakosha", position: "Brankár", country: "ALB" },
    { number: 30, name: "Luka Racic", position: "Brankár", country: "DEN" },

    // OBRANCOVIA
    { number: 2, name: "Sergi Canós", position: "Obranca", country: "ESP" },
    { number: 3, name: "Ethan Pinnock", position: "Obranca", country: "JAM" },
    { number: 4, name: "Kristoffer Ajer", position: "Obranca", country: "NOR" },
    { number: 5, name: "Ben Mee", position: "Obranca", country: "ENG" },
    { number: 14, name: "Aaron Hickey", position: "Obranca", country: "SCO" },

    // ZÁLOŽNÍCI
    { number: 6, name: "Christian Nørgaard", position: "Záložník", country: "DEN" },
    { number: 7, name: "Mathias Jensen", position: "Záložník", country: "DEN" },
    { number: 8, name: "Kevin Schade", position: "Záložník", country: "GER" },
    { number: 10, name: "Bryan Mbeumo", position: "Záložník", country: "CMR" },

    // ÚTOČNÍCI
    { number: 9, name: "Yoane Wissa", position: "Útočník", country: "COD" },
    { number: 11, name: "Ivan Toney", position: "Útočník", country: "ENG" },
    { number: 19, name: "Ollie Watkins", position: "Útočník", country: "ENG" }
  ],

  brighton: [
    // BRANKÁRI
    { number: 1, name: "Jason Steele", position: "Brankár", country: "ENG" },
    { number: 13, name: "Bart Verbruggen", position: "Brankár", country: "NED" },
    { number: 30, name: "Tariq Lamptey", position: "Brankár", country: "ENG" },

    // OBRANCOVIA
    { number: 2, name: "Joel Veltman", position: "Obranca", country: "NED" },
    { number: 3, name: "Pervis Estupiñán", position: "Obranca", country: "ECU" },
    { number: 4, name: "Lewis Dunk", position: "Obranca", country: "ENG" },
    { number: 5, name: "Adam Webster", position: "Obranca", country: "ENG" },
    { number: 12, name: "James Milner", position: "Obranca", country: "ENG" },

    // ZÁLOŽNÍCI
    { number: 6, name: "Kaoru Mitoma", position: "Záložník", country: "JPN" },
    { number: 7, name: "Pascal Groß", position: "Záložník", country: "GER" },
    { number: 8, name: "Moisés Caicedo", position: "Záložník", country: "ECU" },
    { number: 10, name: "Simon Adingra", position: "Záložník", country: "CIV" },
    { number: 11, name: "Alexis Mac Allister", position: "Záložník", country: "ARG" },

    // ÚTOČNÍCI
    { number: 9, name: "Joël Veltman", position: "Útočník", country: "NED" },
    { number: 14, name: "Danny Welbeck", position: "Útočník", country: "ENG" },
    { number: 20, name: "Evan Ferguson", position: "Útočník", country: "IRL" }
  ],

  burnley: [
    // BRANKÁRI
    { number: 1, name: "James Trafford", position: "Brankár", country: "ENG" },
    { number: 12, name: "Arijanet Muric", position: "Brankár", country: "KOS" },
    { number: 22, name: "Jack Walton", position: "Brankár", country: "ENG" },

    // OBRANCOVIA
    { number: 2, name: "Taylor Harwood-Bellis", position: "Obranca", country: "ENG" },
    { number: 3, name: "Jordan Beyer", position: "Obranca", country: "BEL" },
    { number: 4, name: "Connor Roberts", position: "Obranca", country: "WAL" },
    { number: 5, name: "Nathan Collins", position: "Obranca", country: "IRL" },
    { number: 16, name: "Jarrad Branthwaite", position: "Obranca", country: "ENG" },

    // ZÁLOŽNÍCI
    { number: 6, name: "Josh Brownhill", position: "Záložník", country: "ENG" },
    { number: 8, name: "Dwight McNeil", position: "Záložník", country: "ENG" },
    { number: 10, name: "Manor Solomon", position: "Záložník", country: "ISR" },
    { number: 14, name: "Ian Maatsen", position: "Záložník", country: "NED" },

    // ÚTOČNÍCI
    { number: 9, name: "Dane Scarlett", position: "Útočník", country: "ENG" },
    { number: 11, name: "Maxwel Cornet", position: "Útočník", country: "CIV" },
    { number: 19, name: "Anass Zaroury", position: "Útočník", country: "BEL" }
  ],

  chelsea: [
    // BRANKÁRI
    { number: 1, name: "Robert Sánchez", position: "Brankár", country: "ESP" },
    { number: 13, name: "Kepa Arrizabalaga", position: "Brankár", country: "ESP" },
    { number: 22, name: "Carney Chukwuemeka", position: "Brankár", country: "ENG" },

    // OBRANCOVIA
    { number: 2, name: "Trevoh Chalobah", position: "Obranca", country: "ENG" },
    { number: 3, name: "Thiago Silva", position: "Obranca", country: "BRA" },
    { number: 4, name: "Wesley Fofana", position: "Obranca", country: "FRA" },
    { number: 5, name: "Koulibaly", position: "Obranca", country: "SEN" },
    { number: 6, name: "Axel Disasi", position: "Obranca", country: "FRA" },

    // ZÁLOŽNÍCI
    { number: 7, name: "Mason Mount", position: "Záložník", country: "ENG" },
    { number: 8, name: "Enzo Fernández", position: "Záložník", country: "ARG" },
    { number: 10, name: "N'Golo Kanté", position: "Záložník", country: "FRA" },
    { number: 11, name: "Carney Chukwuemeka", position: "Záložník", country: "ENG" },
    { number: 12, name: "Conor Gallagher", position: "Záložník", country: "ENG" },

    // ÚTOČNÍCI
    { number: 9, name: "Nicolas Jackson", position: "Útočník", country: "SEN" },
    { number: 14, name: "Mykhailo Mudryk", position: "Útočník", country: "UKR" },
    { number: 19, name: "Christopher Nkunku", position: "Útočník", country: "FRA" }
  ],

  crystalpalace: [
    // BRANKÁRI
    { number: 1, name: "Vicente Guaita", position: "Brankár", country: "ESP" },
    { number: 13, name: "Sam Johnstone", position: "Brankár", country: "ENG" },
    { number: 22, name: "Deji Sotona", position: "Brankár", country: "IRL" },

    // OBRANCOVIA
    { number: 2, name: "Jairo Riedewald", position: "Obranca", country: "NED" },
    { number: 3, name: "James Tomkins", position: "Obranca", country: "ENG" },
    { number: 4, name: "Nathaniel Clyne", position: "Obranca", country: "ENG" },
    { number: 5, name: "Marc Guehi", position: "Obranca", country: "ENG" },
    { number: 15, name: "Tyrick Mitchell", position: "Obranca", country: "ENG" },

    // ZÁLOŽNÍCI
    { number: 6, name: "Jeffrey Schlupp", position: "Záložník", country: "GHA" },
    { number: 8, name: "Eberechi Eze", position: "Záložník", country: "ENG" },
    { number: 10, name: "Will Hughes", position: "Záložník", country: "ENG" },
    { number: 11, name: "Jordan Ayew", position: "Záložník", country: "GHA" },

    // ÚTOČNÍCI
    { number: 9, name: "Jean-Philippe Mateta", position: "Útočník", country: "FRA" },
    { number: 14, name: "Odsonne Édouard", position: "Útočník", country: "FRA" }
  ],

  everton: [
    // BRANKÁRI
    { number: 1, name: "Jordan Pickford", position: "Brankár", country: "ENG" },
    { number: 12, name: "Asmir Begović", position: "Brankár", country: "BIH" },
    { number: 23, name: "Angus Gunn", position: "Brankár", country: "ENG" },

    // OBRANCOVIA
    { number: 2, name: "Nathan Patterson", position: "Obranca", country: "SCO" },
    { number: 3, name: "Ben Godfrey", position: "Obranca", country: "ENG" },
    { number: 4, name: "James Tarkowski", position: "Obranca", country: "ENG" },
    { number: 5, name: "Jarrad Branthwaite", position: "Obranca", country: "ENG" },
    { number: 17, name: "Vitalii Mykolenko", position: "Obranca", country: "UKR" },

    // ZÁLOŽNÍCI
    { number: 6, name: "Amadou Onana", position: "Záložník", country: "BEL" },
    { number: 8, name: "Idrissa Gueye", position: "Záložník", country: "SEN" },
    { number: 10, name: "Abdoulaye Doucouré", position: "Záložník", country: "FRA" },
    { number: 11, name: "Tom Davies", position: "Záložník", country: "ENG" },

    // ÚTOČNÍCI
    { number: 7, name: "Dominic Calvert-Lewin", position: "Útočník", country: "ENG" },
    { number: 9, name: "Beto", position: "Útočník", country: "POR" },
    { number: 19, name: "Cody Gakpo", position: "Útočník", country: "NED" }
  ],

  fulham: [
    // BRANKÁRI
    { number: 1, name: "Bernd Leno", position: "Brankár", country: "GER" },
    { number: 21, name: "Alphonse Areola", position: "Brankár", country: "FRA" },
    { number: 25, name: "Fabio Carvalho", position: "Brankár", country: "POR" },

    // OBRANCOVIA
    { number: 2, name: "Tim Ream", position: "Obranca", country: "USA" },
    { number: 3, name: "Kenny Tete", position: "Obranca", country: "NED" },
    { number: 4, name: "Tosin Adarabioyo", position: "Obranca", country: "ENG" },
    { number: 5, name: "Harry Wilson", position: "Obranca", country: "WAL" },
    { number: 14, name: "Antonee Robinson", position: "Obranca", country: "USA" },

    // ZÁLOŽNÍCI
    { number: 6, name: "João Palhinha", position: "Záložník", country: "POR" },
    { number: 8, name: "João Gomes", position: "Záložník", country: "BRA" },
    { number: 10, name: "Harrison Reed", position: "Záložník", country: "ENG" },
    { number: 11, name: "Bobby De Cordova-Reid", position: "Záložník", country: "ENG" },

    // ÚTOČNÍCI
    { number: 9, name: "Aleksandar Mitrović", position: "Útočník", country: "SRB" },
    { number: 19, name: "Raúl Jiménez", position: "Útočník", country: "MEX" },
    { number: 20, name: "Cyrus Christie", position: "Útočník", country: "JAM" }
  ],

  leeds: [
    // BRANKÁRI
    { number: 1, name: "Illan Meslier", position: "Brankár", country: "FRA" },
    { number: 13, name: "Cameron Dawson", position: "Brankár", country: "ENG" },

    // OBRANCOVIA
    { number: 2, name: "Stuart Dallas", position: "Obranca", country: "NIR" },
    { number: 3, name: "Luke Ayling", position: "Obranca", country: "ENG" },
    { number: 4, name: "Liam Cooper", position: "Obranca", country: "SCO" },
    { number: 5, name: "Diego Llorente", position: "Obranca", country: "ESP" },

    // ZÁLOŽNÍCI
    { number: 6, name: "Kalvin Phillips", position: "Záložník", country: "ENG" },
    { number: 8, name: "Marc Roca", position: "Záložník", country: "ESP" },
    { number: 10, name: "Crysencio Summerville", position: "Záložník", country: "NED" },
    { number: 11, name: "Jack Harrison", position: "Záložník", country: "ENG" },

    // ÚTOČNÍCI
    { number: 9, name: "Patrick Bamford", position: "Útočník", country: "ENG" },
    { number: 14, name: "Dan James", position: "Útočník", country: "WAL" }
  ],

  mancity: [
    // BRANKÁRI
    { number: 1, name: "Ederson", position: "Brankár", country: "BRA" },
    { number: 31, name: "Stefan Ortega", position: "Brankár", country: "GER" },
    { number: 40, name: "Mateo Klimowicz", position: "Brankár", country: "ARG" },

    // OBRANCOVIA
    { number: 2, name: "Kyle Walker", position: "Obranca", country: "ENG" },
    { number: 3, name: "Ruben Dias", position: "Obranca", country: "POR" },
    { number: 4, name: "John Stones", position: "Obranca", country: "ENG" },
    { number: 5, name: "Manuel Akanji", position: "Obranca", country: "SUI" },
    { number: 14, name: "Matthijs de Ligt", position: "Obranca", country: "NED" },
    { number: 22, name: "Josko Gvardiol", position: "Obranca", country: "CRO" },

    // ZÁLOŽNÍCI
    { number: 8, name: "Ilkay Gündogan", position: "Záložník", country: "GER" },
    { number: 16, name: "Rodri", position: "Záložník", country: "ESP" },
    { number: 20, name: "Kevin De Bruyne", position: "Záložník", country: "BEL" },
    { number: 25, name: "Mateo Kovacic", position: "Záložník", country: "CRO" },
    { number: 26, name: "Jude Bellingham", position: "Záložník", country: "ENG" },

    // ÚTOČNÍCI
    { number: 7, name: "Jack Grealish", position: "Útočník", country: "ENG" },
    { number: 9, name: "Erling Haaland", position: "Útočník", country: "NOR" },
    { number: 10, name: "Julian Alvarez", position: "Útočník", country: "ARG" }
  ],

  manunited: [
    // BRANKÁRI
    { number: 1, name: "Andre Onana", position: "Brankár", country: "CMR" },
    { number: 12, name: "Tom Heaton", position: "Brankár", country: "ENG" },
    { number: 31, name: "Altay Bayindir", position: "Brankár", country: "TUR" },

    // OBRANCOVIA
    { number: 2, name: "Victor Lindelöf", position: "Obranca", country: "SWE" },
    { number: 3, name: "Harry Maguire", position: "Obranca", country: "ENG" },
    { number: 4, name: "Rasmus Højlund", position: "Útočník", country: "DEN" }, // (nie obranca)
    { number: 5, name: "Lisandro Martínez", position: "Obranca", country: "ARG" },
    { number: 12, name: "Mason Mount", position: "Záložník", country: "ENG" },
    { number: 23, name: "Raphaël Varane", position: "Obranca", country: "FRA" },

    // ZÁLOŽNÍCI
    { number: 6, name: "Casemiro", position: "Záložník", country: "BRA" },
    { number: 8, name: "Bruno Fernandes", position: "Záložník", country: "POR" },
    { number: 10, name: "Mason Mount", position: "Záložník", country: "ENG" },
    { number: 14, name: "Sofyan Amrabat", position: "Záložník", country: "MAR" },

    // ÚTOČNÍCI
    { number: 7, name: "Marcus Rashford", position: "Útočník", country: "ENG" },
    { number: 9, name: "Rasmus Højlund", position: "Útočník", country: "DEN" },
    { number: 11, name: "Antony", position: "Útočník", country: "BRA" }
  ],

  newcastle: [
    // BRANKÁRI
    { number: 1, name: "Nick Pope", position: "Brankár", country: "ENG" },
    { number: 13, name: "Martin Dúbravka", position: "Brankár", country: "SVK" },
    { number: 22, name: "Mark Gillespie", position: "Brankár", country: "ENG" },

    // OBRANCOVIA
    { number: 2, name: "Kieran Trippier", position: "Obranca", country: "ENG" },
    { number: 3, name: "Dan Burn", position: "Obranca", country: "ENG" },
    { number: 4, name: "Sven Botman", position: "Obranca", country: "NED" },
    { number: 5, name: "Jamaal Lascelles", position: "Obranca", country: "ENG" },
    { number: 6, name: "Sandro Tonali", position: "Záložník", country: "ITA" },

    // ZÁLOŽNÍCI
    { number: 8, name: "Joelinton", position: "Záložník", country: "BRA" },
    { number: 10, name: "Bruno Guimarães", position: "Záložník", country: "BRA" },
    { number: 14, name: "Anthony Gordon", position: "Záložník", country: "ENG" },
    { number: 15, name: "Sean Longstaff", position: "Záložník", country: "ENG" },

    // ÚTOČNÍCI
    { number: 9, name: "Alexander Isak", position: "Útočník", country: "SWE" },
    { number: 11, name: "Miguel Almirón", position: "Útočník", country: "PAR" }
  ],

  nottingham: [
    // BRANKÁRI
    { number: 1, name: "Wayne Hennessey", position: "Brankár", country: "WAL" },
    { number: 13, name: "Dean Henderson", position: "Brankár", country: "ENG" },

    // OBRANCOVIA
    { number: 2, name: "Milan Škriniar", position: "Obranca", country: "SVK" },
    { number: 3, name: "Renan Lodi", position: "Obranca", country: "BRA" },
    { number: 4, name: "Tosin Adarabioyo", position: "Obranca", country: "ENG" },
    { number: 5, name: "Samba Sow", position: "Obranca", country: "SEN" },

    // ZÁLOŽNÍCI
    { number: 6, name: "Brennan Johnson", position: "Záložník", country: "WAL" },
    { number: 8, name: "Anthony Elanga", position: "Záložník", country: "SWE" },
    { number: 10, name: "Morgan Gibbs-White", position: "Záložník", country: "ENG" },
    { number: 11, name: "Ryan Yates", position: "Záložník", country: "ENG" },

    // ÚTOČNÍCI
    { number: 9, name: "Chris Wood", position: "Útočník", country: "NZL" },
    { number: 14, name: "Danilo", position: "Útočník", country: "BRA" }
  ],

  sunderland: [
    // BRANKÁRI
    { number: 1, name: "Anthony Patterson", position: "Brankár", country: "ENG" },
    { number: 12, name: "Jon McCracken", position: "Brankár", country: "ENG" },

    // OBRANCOVIA
    { number: 2, name: "Dan Ballard", position: "Obranca", country: "ENG" },
    { number: 3, name: "Mason Holgate", position: "Obranca", country: "ENG" },
    { number: 4, name: "Luke O'Nien", position: "Obranca", country: "ENG" },
    { number: 5, name: "Callum Doyle", position: "Obranca", country: "ENG" },

    // ZÁLOŽNÍCI
    { number: 6, name: "Alex Pritchard", position: "Záložník", country: "ENG" },
    { number: 7, name: "Elliot Embleton", position: "Záložník", country: "ENG" },
    { number: 8, name: "Moussa Djenepo", position: "Záložník", country: "MLI" },
    { number: 10, name: "Dan Barlaser", position: "Záložník", country: "ENG" },

    // ÚTOČNÍCI
    { number: 9, name: "Jack Clarke", position: "Útočník", country: "ENG" },
    { number: 11, name: "Ross Stewart", position: "Útočník", country: "SCO" }
  ],

  tottenham: [
    // BRANKÁRI
    { number: 1, name: "Guglielmo Vicario", position: "Brankár", country: "ITA" },
    { number: 13, name: "Fraser Forster", position: "Brankár", country: "ENG" },
    { number: 22, name: "Bradley Barcola", position: "Brankár", country: "FRA" },

    // OBRANCOVIA
    { number: 2, name: "Micky van de Ven", position: "Obranca", country: "NED" },
    { number: 3, name: "Cristian Romero", position: "Obranca", country: "ARG" },
    { number: 4, name: "Romain Perraud", position: "Obranca", country: "FRA" },
    { number: 5, name: "Ben Davies", position: "Obranca", country: "WAL" },
    { number: 12, name: "Ivan Perišić", position: "Obranca", country: "CRO" },

    // ZÁLOŽNÍCI
    { number: 8, name: "James Maddison", position: "Záložník", country: "ENG" },
    { number: 15, name: "Pape Matar Sarr", position: "Záložník", country: "SEN" },
    { number: 20, name: "Pierre-Emile Højbjerg", position: "Záložník", country: "DEN" },

    // ÚTOČNÍCI
    { number: 7, name: "Heung-min Son", position: "Útočník", country: "KOR" },
    { number: 9, name: "Harry Kane", position: "Útočník", country: "ENG" },
    { number: 10, name: "Richarlison", position: "Útočník", country: "BRA" }
  ],

  westham: [
    // BRANKÁRI
    { number: 1, name: "Łukasz Fabiański", position: "Brankár", country: "POL" },
    { number: 12, name: "Alphonse Areola", position: "Brankár", country: "FRA" },
    { number: 22, name: "James Trafford", position: "Brankár", country: "ENG" },

    // OBRANCOVIA
    { number: 2, name: "Kurt Zouma", position: "Obranca", country: "FRA" },
    { number: 3, name: "Kieran Trippier", position: "Obranca", country: "ENG" },
    { number: 5, name: "Tomas Soucek", position: "Záložník", country: "CZE" }, // (nie obranca)
    { number: 6, name: "Vladimir Coufal", position: "Obranca", country: "CZE" },

    // ZÁLOŽNÍCI
    { number: 8, name: "Declan Rice", position: "Záložník", country: "ENG" },
    { number: 10, name: "Jarrod Bowen", position: "Záložník", country: "ENG" },
    { number: 16, name: "Mohamed Kudus", position: "Záložník", country: "GHA" },

    // ÚTOČNÍCI
    { number: 9, name: "Michail Antonio", position: "Útočník", country: "JAM" },
    { number: 11, name: "Pablo Fornals", position: "Útočník", country: "ESP" }
  ],

  wolves: [
    // BRANKÁRI
    { number: 1, name: "Jose Sa", position: "Brankár", country: "POR" },
    { number: 12, name: "Rui Patricio", position: "Brankár", country: "POR" },
    { number: 22, name: "Matija Sarkic", position: "Brankár", country: "MNE" },

    // OBRANCOVIA
    { number: 2, name: "Rayan Aït-Nouri", position: "Obranca", country: "FRA" },
    { number: 3, name: "Max Kilman", position: "Obranca", country: "ENG" },
    { number: 4, name: "Nathan Collins", position: "Obranca", country: "IRL" },
    { number: 5, name: "Brennan Johnson", position: "Obranca", country: "WAL" },
    { number: 18, name: "Hugo Bueno", position: "Obranca", country: "ESP" },

    // ZÁLOŽNÍCI
    { number: 6, name: "Matheus Nunes", position: "Záložník", country: "POR" },
    { number: 8, name: "Rúben Neves", position: "Záložník", country: "POR" },
    { number: 11, name: "Pedro Neto", position: "Záložník", country: "POR" },

    // ÚTOČNÍCI
    { number: 9, name: "Hwang Hee-chan", position: "Útočník", country: "KOR" },
    { number: 10, name: "Sasa Kalajdzic", position: "Útočník", country: "AUT" }
  ]


    /* LA LIGA */


    /* BUNDESLIGA */


    /* LIGUE 1 */


    /* SERIE A */
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