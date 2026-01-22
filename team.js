/*
   NAČÍTANIE TÍMU Z URL */
const params = new URLSearchParams(window.location.search);
const teamKey = params.get('team');

/* DÁTA O KLUBOCH */
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
    name: "Real Madrid CF",
    league: "La Liga",
    logo: "Obrázky/Real Madrid.png",
    stadium: "Santiago Bernabéu",
    city: "Madrid",
    founded: "1902",
    trophies: "35× La Liga, 14× Liga majstrov",
    description: "Real Madrid je jeden z najúspešnejších klubov sveta s obrovskou históriou a tradíciou."
  },
  barcelona: {
    name: "FC Barcelona",
    league: "La Liga",
    logo: "Obrázky/Barcelona.png",
    stadium: "Spotify Camp Nou",
    city: "Barcelona",
    founded: "1899",
    trophies: "27× La Liga, 5× Liga majstrov",
    description: "Barcelona je známa svojím ofenzívnym štýlom, tiki-taka a obrovskou fanúšikovskou základňou."
  },
  athleticomadrid: {
    name: "Atlético Madrid",
    league: "La Liga",
    logo: "Obrázky/Atletico Madrid.png",
    stadium: "Cívitas Metropolitano",
    city: "Madrid",
    founded: "1903",
    trophies: "11× La Liga, 3× Liga majstrov (finalista)",
    description: "Atlético je klub známy tvrdou obranou, bojovnosťou a silnou taktikou."
  },
  sevilla: {
    name: "Sevilla FC",
    league: "La Liga",
    logo: "Obrázky/Sevilla.png",
    stadium: "Ramón Sánchez Pizjuán",
    city: "Sevilla",
    founded: "1890",
    trophies: "7× Európska liga, 1× La Liga",
    description: "Sevilla je európsky špecialista s bohatou históriou a silnou fanúšikovskou základňou."
  },
  realsociedad: {
    name: "Real Sociedad",
    league: "La Liga",
    logo: "Obrázky/Real Sociedad.png",
    stadium: "Reale Arena",
    city: "San Sebastián",
    founded: "1909",
    trophies: "2× La Liga, 2× Copa del Rey",
    description: "Real Sociedad je klub s tradičnou školou futbalu a stabilnou výkonnosťou v lige."
  },
  villareal: {
    name: "Villarreal CF",
    league: "La Liga",
    logo: "Obrázky/Villarreal.png",
    stadium: "Estadio de la Cerámica",
    city: "Villarreal",
    founded: "1923",
    trophies: "1× Európska liga, 1× Copa del Rey",
    description: "Villarreal je známy svojou organizovanou hrou a úspechmi v európskych súťažiach."
  },
  realbetis: {
    name: "Real Betis",
    league: "La Liga",
    logo: "Obrázky/Real Betis.png",
    stadium: "Estadio Benito Villamarín",
    city: "Sevilla",
    founded: "1907",
    trophies: "1× La Liga, 2× Copa del Rey",
    description: "Real Betis je klub s veľkou vášnivou fanúšikovskou základňou a silnou domácou atmosférou."
  },
  valencia: {
    name: "Valencia CF",
    league: "La Liga",
    logo: "Obrázky/Valencia.png",
    stadium: "Mestalla",
    city: "Valencia",
    founded: "1919",
    trophies: "6× La Liga, 8× Copa del Rey",
    description: "Valencia je tradičný španielsky klub so silnou históriou a silným štadiónom."
  },
  athleticobilbao: {
    name: "Athletic Club",
    league: "La Liga",
    logo: "Obrázky/Athletico Bilbao.png",
    stadium: "San Mamés",
    city: "Bilbao",
    founded: "1898",
    trophies: "8× La Liga, 23× Copa del Rey",
    description: "Athletic Club je známy svojou filozofiou s domácimi hráčmi a bojovným štýlom."
  },
  celtavigo: {
    name: "Celta Vigo",
    league: "La Liga",
    logo: "Obrázky/Celta Vigo.png",
    stadium: "Balaídos",
    city: "Vigo",
    founded: "1923",
    trophies: "Žiadne významné trofeje",
    description: "Celta je klub známy svojou húževnatosťou a stabilitou v La Lige."
  },
  granada: {
    name: "Granada CF",
    league: "La Liga",
    logo: "Obrázky/Granada.png",
    stadium: "Nuevo Los Cármenes",
    city: "Granada",
    founded: "1931",
    trophies: "Žiadne významné trofeje",
    description: "Granada je klub známy svojou defenzívnou organizáciou a silou na domácom štadióne."
  },
  rayovallecano: {
    name: "Rayo Vallecano",
    league: "La Liga",
    logo: "Obrázky/Rayo Vallecano.png",
    stadium: "Campo de Fútbol de Vallecas",
    city: "Madrid",
    founded: "1924",
    trophies: "Žiadne významné trofeje",
    description: "Rayo je klub s veľkou komunitou a jedinečnou atmosférou na domácom štadióne."
  },
  alaves: {
    name: "Deportivo Alavés",
    league: "La Liga",
    logo: "Obrázky/Alaves.png",
    stadium: "Mendizorrotza",
    city: "Vitoria-Gasteiz",
    founded: "1921",
    trophies: "Žiadne významné trofeje",
    description: "Alavés je klub s tradíciou a stabilitou v španielskej lige."
  },
  osasuna: {
    name: "CA Osasuna",
    league: "La Liga",
    logo: "Obrázky/Osasuna.png",
    stadium: "El Sadar",
    city: "Pamplona",
    founded: "1920",
    trophies: "Žiadne významné trofeje",
    description: "Osasuna je známa svojou tvrdou obranou a bojovným štýlom v La Lige."
  },
  getafe: {
    name: "Getafe CF",
    league: "La Liga",
    logo: "Obrázky/Getafe.png",
    stadium: "Coliseum Alfonso Pérez",
    city: "Getafe",
    founded: "1983",
    trophies: "Žiadne významné trofeje",
    description: "Getafe je klub známy organizovanou hrou a stabilitou v lige."
  },
  mallorca: {
    name: "RCD Mallorca",
    league: "La Liga",
    logo: "Obrázky/Mallorca.png",
    stadium: "Visit Mallorca Stadium",
    city: "Palma de Mallorca",
    founded: "1916",
    trophies: "Žiadne významné trofeje",
    description: "Mallorca je klub s dobrým tímovým duchom a stabilnými výkonmi v lige."
  },
  espanyol: {
    name: "RCD Espanyol",
    league: "La Liga",
    logo: "Obrázky/Espanyol.png",
    stadium: "RCDE Stadium",
    city: "Barcelona",
    founded: "1900",
    trophies: "4× Copa del Rey",
    description: "Espanyol je tradičný katalánsky klub s veľkým rivalstvom s Barcelonou."
  },
  levante: {
    name: "Levante UD",
    league: "La Liga",
    logo: "Obrázky/Levante.png",
    stadium: "Estadi Ciutat de València",
    city: "Valencia",
    founded: "1909",
    trophies: "Žiadne významné trofeje",
    description: "Levante UD je klub so silnou komunitou fanúšikov a typicky bojovným štýlom hry."
  },
  oviedo: {
    name: "Real Oviedo",
    league: "La Liga",
    logo: "Obrázky/Oviedo.png",
    stadium: "Estadio Carlos Tartiere",
    city: "Oviedo",
    founded: "1926",
    trophies: "Žiadne významné trofeje",
    description: "Real Oviedo je historický klub zo severného Španielska, ktorý sa vrátil do La Ligy po dlhšej prestávke."
  },

  /*BUNDESLIGA */

  bayern: {
    name: "FC Bayern München",
    league: "Bundesliga",
    logo: "Obrázky/Bayern.png",
    stadium: "Allianz Arena",
    city: "München",
    founded: "1900",
    trophies: "33× Bundesliga",
    description: "Bayern je historicky najúspešnejší nemecký klub s veľkým počtom titulov a pravidelnou účasťou v európskych súťažiach."
  },
  dortmund: {
    name: "Borussia Dortmund",
    league: "Bundesliga",
    logo: "Obrázky/Dortmund.png",
    stadium: "Signal Iduna Park",
    city: "Dortmund",
    founded: "1909",
    trophies: "8× Bundesliga",
    description: "Dortmund je tradičný veľkoklub známy veľkou fanúšikovskou základňou a ofenzívnym futbalom."
  },
  rblipsko: {
    name: "RB Leipzig",
    league: "Bundesliga",
    logo: "Obrázky/RB Lipsko.png",
    stadium: "Red Bull Arena",
    city: "Leipzig",
    founded: "2009",
    trophies: "Žiadne významné trofeje",
    description: "Relatívne nový klub v Bundeslige, rýchlo sa etabloval medzi elitou nemeckého futbalu."
  },
  leverkusen: {
    name: "Bayer 04 Leverkusen",
    league: "Bundesliga",
    logo: "Obrázky/Leverkusen.png",
    stadium: "BayArena",
    city: "Leverkusen",
    founded: "1904",
    trophies: "1× Bundesliga",
    description: "Leverkusen je stabilný účastník európskych súťaží a pravidelne bojuje o vysoké priečky."
  },
  hoffenheim: {
    name: "TSG 1899 Hoffenheim",
    league: "Bundesliga",
    logo: "Obrázky/Hoffenheim.png",
    stadium: "PreZero Arena",
    city: "Sinsheim",
    founded: "1899",
    trophies: "Žiadne významné trofeje",
    description: "Hoffenheim je klub s dynamickým štýlom hry a ambíciou upevniť si pozíciu v lige."
  },
  stuttgart: {
    name: "VfB Stuttgart",
    league: "Bundesliga",
    logo: "Obrázky/Stuttgart.png",
    stadium: "MHPArena",
    city: "Stuttgart",
    founded: "1893",
    trophies: "3× Bundesliga",
    description: "Tradícia a stabilita — Stuttgart sa pravidelne snaží o návrat medzi európsku elitu."
  },
  frankfurt: {
    name: "Eintracht Frankfurt",
    league: "Bundesliga",
    logo: "Obrázky/Frankfurt.png",
    stadium: "Deutsche Bank Park",
    city: "Frankfurt",
    founded: "1899",
    trophies: "1× Bundesliga (historicky), 1× UEFA Cup",
    description: "Frankfurt je klub s európskou históriou a silnou fanúšikovskou komunitou."
  },
  freiburg: {
    name: "SC Freiburg",
    league: "Bundesliga",
    logo: "Obrázky/Freiburg.png",
    stadium: "Europa-Park Stadion",
    city: "Freiburg",
    founded: "1904",
    trophies: "Žiadne významné trofeje",
    description: "Freiburg je známy stabilnými výkonmi a rozumnou futbalovou filozofiou."
  },
  brémy: {
    name: "SV Werder Bremen",
    league: "Bundesliga",
    logo: "Obrázky/Brémy.png",
    stadium: "Weserstadion",
    city: "Bremen",
    founded: "1899",
    trophies: "4× Bundesliga",
    description: "Klub s bohatou históriou a veľkými úspechmi v nemeckom futbale."
  },
  augsburg: {
    name: "FC Augsburg",
    league: "Bundesliga",
    logo: "Obrázky/Augsburg.png",
    stadium: "WWK Arena",
    city: "Augsburg",
    founded: "1907",
    trophies: "Žiadne významné trofeje",
    description: "Augsburg sa snaží stabilizovať svoju pozíciu v najvyššej nemeckej súťaži."  
  },
  unionberlin: {
    name: "1. FC Union Berlin",
    league: "Bundesliga",
    logo: "Obrázky/Union Berlín.png",
    stadium: "Stadion An der Alten Försterei",
    city: "Berlin",
    founded: "1966",
    trophies: "Žiadne významné trofeje",
    description: "Union Berlin je klub s veľmi oddanými fanúšikmi a rýchlo rastúcim renomé."
  },
  kolín: {
    name: "1. FC Köln",
    league: "Bundesliga",
    logo: "Obrázky/FC Köln.png",
    stadium: "RheinEnergieStadion",
    city: "Köln",
    founded: "1948",
    trophies: "Žiadne významné trofeje",
    description: "Köln je tradičný nemecký klub s veľkou fanúšikovskou základňou."  
  },
  hamburg: {
    name: "Hamburger SV",
    league: "Bundesliga",
    logo: "Obrázky/Hamburg.png",
    stadium: "Volksparkstadion",
    city: "Hamburg",
    founded: "1887",
    trophies: "3× Bundesliga",
    description: "HSV sa vrátil do Bundesligy po období v 2. Bundeslige a usiluje o stabilitu."  
  },
  wolfsburg: {
    name: "VfL Wolfsburg",
    league: "Bundesliga",
    logo: "Obrázky/Wolfsburg.png",
    stadium: "Volkswagen Arena",
    city: "Wolfsburg",
    founded: "1945",
    trophies: "1× Bundesliga",
    description: "Wolfsburg je klub spojený s silným priemyselným zázemím a stabilnou prácou v lige."
  },
  mainz: {
    name: "1. FSV Mainz 05",
    league: "Bundesliga",
    logo: "Obrázky/Mainz.png",
    stadium: "MEWA Arena",
    city: "Mainz",
    founded: "1905",
    trophies: "Žiadne významné trofeje",
    description: "Mainz sa pravidelne drží v strede tabuľky a usiluje sa o lepšie umiestnenia."  
  },
  mönchengladbach: {
    name: "Borussia Mönchengladbach",
    league: "Bundesliga",
    logo: "Obrázky/Mönchengladbach.png",
    stadium: "BORUSSIA-PARK",
    city: "Mönchengladbach",
    founded: "1900",
    trophies: "5× Bundesliga",
    description: "Mönchengladbach je tradičný klub z bohatej histórie nemeckého futbalu."  
  },
  stpauli: {
    name: "FC St. Pauli",
    league: "Bundesliga",
    logo: "Obrázky/FC St. Pauli.png",
    stadium: "Millerntor-Stadion",
    city: "Hamburg",
    founded: "1910",
    trophies: "Žiadne významné trofeje",
    description: "St. Pauli je kultový klub s nepriestrelnou fanúšikovskou scénou."  
  },
  heidenheim: {
    name: "1. FC Heidenheim",
    league: "Bundesliga",
    logo: "Obrázky/Heidenheim.png",
    stadium: "Voith-Arena",
    city: "Heidenheim",
    founded: "1846",
    trophies: "Žiadne významné trofeje",
    description: "Heidenheim sa snaží upevniť svoju pozíciu v najvyššej nemeckej lige."
  },


  /* LIGUE 1 */

  psg: {
    name: "Paris Saint-Germain FC",
    league: "Ligue 1",
    logo: "Obrázky/PSG.png",
    stadium: "Parc des Princes",
    city: "Paris",
    founded: "1970",
    trophies: "11× Ligue 1, 1× Liga majstrov finalist",
    description: "PSG je dominantný francúzsky klub známy hviezdnym kádrom a častými titulmi doma."
  },
  
  marseille: {
    name: "Olympique de Marseille",
    league: "Ligue 1",
    logo: "Obrázky/Marseille.png",
    stadium: "Stade Vélodrome",
    city: "Marseille",
    founded: "1899",
    trophies: "9× Ligue 1, 1× Liga majstrov",
    description: "Tradičný francúzsky veľkoklub s vášnivými fanúšikmi a silnou európskou históriou."
  },
  
  monako: {
    name: "AS Monaco FC",
    league: "Ligue 1",
    logo: "Obrázky/Monako.png",
    stadium: "Stade Louis II",
    city: "Monaco",
    founded: "1924",
    trophies: "8× Ligue 1",
    description: "Monaco je stabilný člen európskych súťaží s dôrazom na mladé talenty."
  },
  
  nice: {
    name: "OGC Nice",
    league: "Ligue 1",
    logo: "Obrázky/Nice.png",
    stadium: "Allianz Riviera",
    city: "Nice",
    founded: "1904",
    trophies: "4× Ligue 1",
    description: "Nice sa vracia ako stabilný stredopoliar ligy s ambíciou hrať európske poháre."
  },
  
  lille: {
    name: "LOSC Lille",
    league: "Ligue 1",
    logo: "Obrázky/Lille.png",
    stadium: "Stade Pierre-Mauroy",
    city: "Lille",
    founded: "1944",
    trophies: "4× Ligue 1",
    description: "Lille je konkurencieschopný francúzsky klub známy defenzívnou silou a organizáciou."
  },
  
  lyon: {
    name: "Olympique Lyonnais",
    league: "Ligue 1",
    logo: "Obrázky/Lyon.png",
    stadium: "Parc Olympique Lyonnais",
    city: "Lyon",
    founded: "1950",
    trophies: "7× Ligue 1",
    description: "Lyon je historicky jeden z najsilnejších francúzskych klubov s bohatou tradíciou."
  },
  
  štrasburg: {
    name: "RC Strasbourg Alsace",
    league: "Ligue 1",
    logo: "Obrázky/Štrasburg.png",
    stadium: "Stade de la Meinau",
    city: "Strasbourg",
    founded: "1906",
    trophies: "1× Ligue 1 (historicky)",
    description: "Strasbourg je tradičný francúzsky klub s lojálnymi fanúšikmi a stabilnými výkonmi."
  },
  
  lens: {
    name: "RC Lens",
    league: "Ligue 1",
    logo: "Obrázky/Lens.png",
    stadium: "Stade Bollaert-Delelis",
    city: "Lens",
    founded: "1906",
    trophies: "1× Ligue 1",
    description: "Lens je klub s veľkou komunitou fanúšikov a silnou atmosférou na domácom štadióne."
  },
  
  toulouse: {
    name: "Toulouse FC",
    league: "Ligue 1",
    logo: "Obrázky/Toulouse.png",
    stadium: "Stadium de Toulouse",
    city: "Toulouse",
    founded: "1937",
    trophies: "Žiadne významné trofeje",
    description: "Toulouse sa usiluje o stabilitu v hornej polovici tabuľky Ligue 1."
  },
  
  auxerre: {
    name: "AJ Auxerre",
    league: "Ligue 1",
    logo: "Obrázky/Auxerre.png",
    stadium: "Stade Abbé Deschamps",
    city: "Auxerre",
    founded: "1905",
    trophies: "1× Ligue 1, 1× Coupe de France",
    description: "Auxerre je historický klub známy svojou akadémiou a tradičnou filozofiou."
  },
  
  rennes: {
    name: "Stade Rennais FC",
    league: "Ligue 1",
    logo: "Obrázky/Rennes.png",
    stadium: "Roazhon Park",
    city: "Rennes",
    founded: "1901",
    trophies: "1× Ligue 1",
    description: "Rennes je etablovaný klub s kvalitnou mládežníckou štruktúrou a stabilitou v Ligue 1."
  },
  
  angers: {
    name: "Angers SCO",
    league: "Ligue 1",
    logo: "Obrázky/Angers.png",
    stadium: "Stade Raymond Kopa",
    city: "Angers",
    founded: "1919",
    trophies: "Žiadne významné trofeje",
    description: "Angers bojuje o ligovú stabilitu s dôrazom na tímovú obetavosť."
  },
  
  brest: {
    name: "Stade Brestois 29",
    league: "Ligue 1",
    logo: "Obrázky/Brest.png",
    stadium: "Stade Francis-Le Blé",
    city: "Brest",
    founded: "1950",
    trophies: "Žiadne významné trofeje",
    description: "Brest je klub západnej Francúzska so silným komunitným zázemím."
  },
  
  nantes: {
    name: "FC Nantes",
    league: "Ligue 1",
    logo: "Obrázky/Nantes.png",
    stadium: "Stade de la Beaujoire",
    city: "Nantes",
    founded: "1943",
    trophies: "8× Ligue 1",
    description: "Nantes má bohatú históriu francúzskeho futbalu s dôrazom na technický štýl hry."
  },
  
  lehavre: {
    name: "Le Havre AC",
    league: "Ligue 1",
    logo: "Obrázky/Le Havre.png",
    stadium: "Stade Océane",
    city: "Le Havre",
    founded: "1872",
    trophies: "1× Ligue 2",
    description: "Le Havre je jeden z najstarších francúzskych klubov, známy výbornou akadémiou."
  },
  
  lorient: {
    name: "FC Lorient",
    league: "Ligue 1",
    logo: "Obrázky/Lorient.png",
    stadium: "Stade du Moustoir",
    city: "Lorient",
    founded: "1926",
    trophies: "Žiadne významné trofeje",
    description: "Lorient sa vracia do Ligue 1 po roku s ambíciou upevniť svoju pozíciu."  
  },
  
  parisfc: {
    name: "Paris FC",
    league: "Ligue 1",
    logo: "Obrázky/Paris FC.png",
    stadium: "Stade Jean-Bouin",
    city: "Paris",
    founded: "1969",
    trophies: "Žiadne významné trofeje",
    description: "Paris FC sa po 46 rokoch vrátil do Ligue 1 a predstavuje druhý parížsky klub."  
  },
  
  méty: {
    name: "FC Metz",
    league: "Ligue 1",
    logo: "Obrázky/Méty.png",
    stadium: "Stade Saint-Symphorien",
    city: "Metz",
    founded: "1932",
    trophies: "1× Coupe de France",
    description: "Metz sa vrátilo do francúzskej elity po roku a bojuje o ligovú stabilitu."  
  },


  /* SERIE A */

  atalanta: {
    name: "Atalanta BC",
    league: "Serie A",
    logo: "Obrázky/Atalanta.png",
    stadium: "Gewiss Stadium",
    city: "Bergamo",
    founded: "1907",
    trophies: "1× Coppa Italia",
    description: "Atalanta je klub známy svojou ofenzívnou hrou a stabilnou prácou v európskych súťažiach."
  },
  bologna: {
    name: "Bologna FC 1909",
    league: "Serie A",
    logo: "Obrázky/Bologna.png",
    stadium: "Stadio Renato Dall’Ara",
    city: "Bologna",
    founded: "1909",
    trophies: "7× Serie A",
    description: "Bologna má bohatú históriu v talianskom futbale a snaží sa vrátiť medzi európsku elitu."
  },
  cagliari: {
    name: "Cagliari Calcio",
    league: "Serie A",
    logo: "Obrázky/Cagliari.png",
    stadium: "Unipol Domus",
    city: "Cagliari",
    founded: "1920",
    trophies: "1× Serie A",
    description: "Cagliari je tradičný klub Sardínie, známy svojou vášnivou fanúšikovskou základňou."
  },
  como: {
    name: "Como 1907",
    league: "Serie A",
    logo: "Obrázky/Como.png",
    stadium: "Stadio Giuseppe Sinigaglia",
    city: "Como",
    founded: "1907",
    trophies: "Žiadne významné trofeje",
    description: "Como sa po dlhých rokoch vrátil do najvyššej talianskej ligy."
  },
  cremonesse: {
    name: "US Cremonese",
    league: "Serie A",
    logo: "Obrázky/Cremonese.png",
    stadium: "Stadio Giovanni Zini",
    city: "Cremona",
    founded: "1903",
    trophies: "Žiadne významné trofeje",
    description: "Cremonese sa vrátilo do Serie A a usiluje o udržanie v lige."
  },
  fiorentina: {
    name: "ACF Fiorentina",
    league: "Serie A",
    logo: "Obrázky/Fiorentina.png",
    stadium: "Stadio Artemio Franchi",
    city: "Florencia",
    founded: "1926",
    trophies: "2× Serie A",
    description: "Fiorentina je tradičný veľkoklub s bohatou históriou a stabilným európskym angažmánom."
  },
  fcjanov: {
    name: "Genoa CFC",
    league: "Serie A",
    logo: "Obrázky/FC Janov.png",
    stadium: "Stadio Luigi Ferraris",
    city: "Genua",
    founded: "1893",
    trophies: "9× Serie A",
    description: "FC Janov je historicky najstarší taliansky klub s bohatou ligovou históriou."
  },
  inter: {
    name: "FC Internazionale Milano",
    league: "Serie A",
    logo: "Obrázky/Inter.png",
    stadium: "San Siro",
    city: "Milano",
    founded: "1908",
    trophies: "20× Serie A, 3× Liga majstrov",
    description: "Inter je jeden z najúspešnejších talianskych klubov, pravidelný účastník európskych súťaží."
  },
  juventus: {
    name: "Juventus FC",
    league: "Serie A",
    logo: "Obrázky/Juventus.png",
    stadium: "Allianz Stadium",
    city: "Turín",
    founded: "1897",
    trophies: "36× Serie A, 2× Liga majstrov",
    description: "Juventus je historicky najúspešnejší klub v talianskej lige s obrovskou fanúšikovskou základňou."
  },
  lazio: {
    name: "SS Lazio",
    league: "Serie A",
    logo: "Obrázky/Lazio.png",
    stadium: "Stadio Olimpico",
    city: "Rím",
    founded: "1900",
    trophies: "2× Serie A",
    description: "Lazio je známe silnou rivalitou s AS Rím a stabilnými výkonmi v Serie A."
  },
  lecce: {
    name: "US Lecce",
    league: "Serie A",
    logo: "Obrázky/Lecce.png",
    stadium: "Stadio Via del Mare",
    city: "Lecce",
    founded: "1908",
    trophies: "Žiadne významné trofeje",
    description: "Lecce bojuje o stabilitu v talianskej top lige."
  },
  acmiláno: {
    name: "AC Milan",
    league: "Serie A",
    logo: "Obrázky/AC Miláno.png",
    stadium: "San Siro",
    city: "Milano",
    founded: "1899",
    trophies: "19× Serie A, 7× Liga majstrov",
    description: "AC Milan je legendárny klub s bohatou európskou a domáco-ligovou históriou."
  },
  neapol: {
    name: "SSC Napoli",
    league: "Serie A",
    logo: "Obrázky/Neapol.png",
    stadium: "Stadio Diego Armando Maradona",
    city: "Neapol",
    founded: "1926",
    trophies: "3× Serie A",
    description: "Napoli je silný klub z juhu Talianska s vášnivou fanúšikovskou základňou."
  },
  parma: {
    name: "Parma Calcio 1913",
    league: "Serie A",
    logo: "Obrázky/Parma.png",
    stadium: "Stadio Ennio Tardini",
    city: "Parma",
    founded: "1913",
    trophies: "3× Serie A (historicky)",
    description: "Parma sa vracia do Serie A a snaží sa získať stabilitu."
  },
  pisa: {
    name: "Pisa SC",
    league: "Serie A",
    logo: "Obrázky/Pisa.png",
    stadium: "Arena Garibaldi – Stadio Romeo Anconetani",
    city: "Pisa",
    founded: "1909",
    trophies: "Žiadne významné trofeje",
    description: "Pisa sa vrátilo do najvyššej talianskej ligy po dlhej pauze."
  },
  asrím: {
    name: "AS Roma",
    league: "Serie A",
    logo: "Obrázky/AS Rím.png",
    stadium: "Stadio Olimpico",
    city: "Rím",
    founded: "1927",
    trophies: "3× Serie A",
    description: "AS Roma je tradičný klub talianskeho futbalu s veľkou fanúšikovskou základňou."
  },
  sassuolo: {
    name: "US Sassuolo Calcio",
    league: "Serie A",
    logo: "Obrázky/Sassuolo.png",
    stadium: "Mapei Stadium – Città del Tricolore",
    city: "Sassuolo",
    founded: "1920",
    trophies: "Žiadne významné trofeje",
    description: "Sassuolo je mladý, ale ambiciózny klub snažiaci sa upevniť svoje postavenie v lige."
  },
  turín: {
    name: "Torino FC",
    league: "Serie A",
    logo: "Obrázky/Turín.png",
    stadium: "Stadio Olimpico Grande Torino",
    city: "Turín",
    founded: "1906",
    trophies: "7× Serie A (historicky)",
    description: "Turín je klub so silnou tradíciou a fanúšikovskou základňou."
  },
  udinese: {
    name: "Udinese Calcio",
    league: "Serie A",
    logo: "Obrázky/Udinese.png",
    stadium: "Bluenergy Stadium",
    city: "Udine",
    founded: "1896",
    trophies: "Žiadne významné trofeje",
    description: "Udinese sa snaží udržať stabilnú pozíciu v talianskej najvyššej lige."
  },
  verona: {
    name: "Hellas Verona FC",
    league: "Serie A",
    logo: "Obrázky/Verona.png",
    stadium: "Stadio Marcantonio Bentegodi",
    city: "Verona",
    founded: "1903",
    trophies: "1× Serie A",
    description: "Hellas Verona je historický klub, ktorý vyhral titul Serie A v minulosti."
  }
};

/* ELEMENTY */
const teamName = document.getElementById('teamName');
const teamLeague = document.getElementById('teamLeague');
const teamLogo = document.getElementById('teamLogo');

const teamStadium = document.getElementById('teamStadium');
const teamCity = document.getElementById('teamCity');
const teamFounded = document.getElementById('teamFounded');
const teamTrophies = document.getElementById('teamTrophies');
const teamDescription = document.getElementById('teamDescription');

/* ZOBRAZENIE TÍMU */
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

/* SÚPISKY HRÁČOV */
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

  liverpool: [
    // BRANKÁRI
    { number: 1, name: "Alisson Becker", position: "Brankár", country: "BRA" },
    { number: 25, name: "Giorgi Mamardashvili", position: "Brankár", country: "GEO" },
    { number: 62, name: "Caoimhín Kelleher", position: "Brankár", country: "IRL" },

    // OBRANCOVIA
    { number: 4, name: "Virgil van Dijk", position: "Obranca", country: "NED" },
    { number: 5, name: "Ibrahima Konaté", position: "Obranca", country: "FRA" },
    { number: 66, name: "Trent Alexander-Arnold", position: "Obranca", country: "ENG" },
    { number: 26, name: "Andrew Robertson", position: "Obranca", country: "SCO" },
    { number: 2, name: "Joe Gomez", position: "Obranca", country: "ENG" },
    { number: 21, name: "Kostas Tsimikas", position: "Obranca", country: "GRE" },
    { number: 78, name: "Jarell Quansah", position: "Obranca", country: "ENG" },
    { number: 84, name: "Conor Bradley", position: "Obranca", country: "NIR" },

    // ZÁLOŽNÍCI
    { number: 10, name: "Alexis Mac Allister", position: "Záložník", country: "ARG" },
    { number: 8, name: "Dominik Szoboszlai", position: "Záložník", country: "HUN" },
    { number: 38, name: "Ryan Gravenberch", position: "Záložník", country: "NED" },
    { number: 17, name: "Curtis Jones", position: "Záložník", country: "ENG" },
    { number: 19, name: "Harvey Elliott", position: "Záložník", country: "ENG" },
    { number: 3, name: "Wataru Endo", position: "Záložník", country: "JPN" },

    // ÚTOČNÍCI
    { number: 11, name: "Mohamed Salah", position: "Útočník", country: "EGY" },
    { number: 7, name: "Luis Díaz", position: "Útočník", country: "COL" },
    { number: 20, name: "Diogo Jota", position: "Útočník", country: "POR" },
    { number: 9, name: "Darwin Núñez", position: "Útočník", country: "URU" },
    { number: 18, name: "Cody Gakpo", position: "Útočník", country: "NED" },
    { number: 15, name: "Federico Chiesa", position: "Útočník", country: "ITA" }
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
  ],


  /* LA LIGA */

  barcelona: [
    // BRANKÁRI
    { number: 1, name: "Marc-André ter Stegen", position: "Brankár", country: "GER" },
    { number: 13, name: "Joan García", position: "Brankár", country: "ESP" },
    { number: 25, name: "Diego Kochen", position: "Brankár", country: "ESP" },
  
    // OBRANCOVIA
    { number: 3, name: "Alejandro Balde", position: "Obranca", country: "ESP" },
    { number: 4, name: "Ronald Araújo", position: "Obranca", country: "URU" },
    { number: 5, name: "Pau Cubarsí", position: "Obranca", country: "ESP" },
    { number: 15, name: "Andreas Christensen", position: "Obranca", country: "DEN" },
    { number: 23, name: "Jules Koundé", position: "Obranca", country: "FRA" },
  
    // ZÁLOŽNÍCI
    { number: 6, name: "Gavi", position: "Záložník", country: "ESP" },
    { number: 8, name: "Pedri", position: "Záložník", country: "ESP" },
    { number: 16, name: "Fermín López", position: "Záložník", country: "ESP" },
    { number: 20, name: "Dani Olmo", position: "Záložník", country: "ESP" },
    { number: 22, name: "Marc Bernal", position: "Záložník", country: "ESP" },
  
    // ÚTOČNÍCI
    { number: 7, name: "Ferran Torres", position: "Útočník", country: "ESP" },
    { number: 9, name: "Robert Lewandowski", position: "Útočník", country: "POL" },
    { number: 10, name: "Lamine Yamal", position: "Útočník", country: "ESP" },
    { number: 11, name: "Raphinha", position: "Útočník", country: "BRA" },
    { number: 14, name: "Marcus Rashford", position: "Útočník", country: "ENG" }
  ],
  realmadrid: [
    { number: 1, name: "Thibaut Courtois", position: "Brankár", country: "BEL" },
    { number: 13, name: "Andriy Lunin", position: "Brankár", country: "UKR" },
    { number: 31, name: "Sergio Mestre", position: "Brankár", country: "ESP" },
  
    { number: 2, name: "Dani Carvajal", position: "Obranca", country: "ESP" },
    { number: 3, name: "David Alaba", position: "Obranca", country: "AUT" },
    { number: 5, name: "Éder Militão", position: "Obranca", country: "BRA" },
    { number: 12, name: "Thiago Silva", position: "Obranca", country: "BRA" },
    { number: 23, name: "Trent Alexander-Arnold", position: "Obranca", country: "ENG" },
  
    { number: 8, name: "Federico Valverde", position: "Záložník", country: "URU" },
    { number: 10, name: "Jude Bellingham", position: "Záložník", country: "ENG" },
    { number: 14, name: "Aurélien Tchouaméni", position: "Záložník", country: "FRA" },
    { number: 15, name: "Rodrygo", position: "Záložník", country: "BRA" },
  
    { number: 7, name: "Vinícius Júnior", position: "Útočník", country: "BRA" },
    { number: 9, name: "Gonzalo García", position: "Útočník", country: "ESP" },
    { number: 11, name: "Kylian Mbappé", position: "Útočník", country: "FRA" }
  ],
  athleticomadrid: [
    { number: 13, name: "Jan Oblak", position: "Brankár", country: "SVN" },
    { number: 1, name: "Ivo Grbić", position: "Brankár", country: "CRO" },
  
    { number: 3, name: "Stefan Savić", position: "Obranca", country: "MNE" },
    { number: 4, name: "David Hancko", position: "Obranca", country: "SVK" },
    { number: 14, name: "Valentin Castellanos", position: "Obranca", country: "ARG" },
  
    { number: 8, name: "Rodrigo De Paul", position: "Záložník", country: "ARG" },
    { number: 10, name: "Álex Baena", position: "Záložník", country: "ESP" },
    { number: 17, name: "Thiago Almada", position: "Záložník", country: "ARG" },
  
    { number: 7, name: "Antoine Griezmann", position: "Útočník", country: "FRA" },
    { number: 9, name: "Julián Álvarez", position: "Útočník", country: "ARG" },
    { number: 21, name: "Botic van de Zandschulp", position: "Útočník", country: "NED" }
  ],
  athleticobilbao: [
    { number: 1, name: "Unai Simón", position: "Brankár", country: "ESP" },
    { number: 13, name: "Juninho Bacuna", position: "Brankár", country: "CUR" },
  
    { number: 3, name: "Iñigo Martínez", position: "Obranca", country: "ESP" },
    { number: 4, name: "Óscar De Marcos", position: "Obranca", country: "ESP" },
    { number: 22, name: "Nico Williams", position: "Obranca", country: "ESP" },
  
    { number: 8, name: "Oihan Sancet", position: "Záložník", country: "ESP" },
    { number: 16, name: "Luka Sucic", position: "Záložník", country: "CRO" },
    { number: 18, name: "Sergio Gómez", position: "Záložník", country: "ESP" },
  
    { number: 9, name: "Umar Sadiq", position: "Útočník", country: "NGA" },
    { number: 19, name: "Asier Villalibre", position: "Útočník", country: "ESP" }
  ],
  celtavigo: [
    { number: 1, name: "Iván Cuéllar", position: "Brankár", country: "ESP" },
    { number: 13, name: "Pablo Torre", position: "Záložník", country: "ESP" },
  
    { number: 2, name: "Pablo Maffeo", position: "Obranca", country: "ESP" },
    { number: 3, name: "Johan Mojica", position: "Obranca", country: "COL" },
  
    { number: 8, name: "Sergi Darder", position: "Záložník", country: "ESP" },
    { number: 10, name: "David Rodríguez", position: "Záložník", country: "ESP" },
  
    { number: 9, name: "Vedat Muriqi", position: "Útočník", country: "KOS" }
  ],

  /* BUNDESLIGA */

  bayern: [
    { number: 1, name: "Manuel Neuer", position: "Brankár", country: "GER" },
    { number: 21, name: "Sacha Lenz", position: "Brankár", country: "GER" },

    { number: 2, name: "Benjamin Pavard", position: "Obranca", country: "FRA" },
    { number: 4, name: "Dayot Upamecano", position: "Obranca", country: "FRA" },
    { number: 5, name: "Matthijs de Ligt", position: "Obranca", country: "NED" },
    { number: 6, name: "Raphaël Guerreiro", position: "Obranca", country: "POR" },
    { number: 17, name: "Alphonso Davies", position: "Obranca", country: "CAN" },

    { number: 8, name: "Joshua Kimmich", position: "Záložník", country: "GER" },
    { number: 10, name: "Leroy Sané", position: "Záložník", country: "GER" },
    { number: 18, name: "Jamal Musiala", position: "Záložník", country: "GER" },
    { number: 25, name: "Leon Goretzka", position: "Záložník", country: "GER" },

    { number: 9, name: "Harry Kane", position: "Útočník", country: "ENG" },
    { number: 11, name: "Kingsley Coman", position: "Útočník", country: "FRA" },
    { number: 29, name: "Mathys Tel", position: "Útočník", country: "FRA" }
  ],

  dortmund: [
    { number: 1, name: "Gregor Kobel", position: "Brankár", country: "SUI" },
    { number: 26, name: "Marwin Hitz", position: "Brankár", country: "SUI" },

    { number: 4, name: "Mats Hummels", position: "Obranca", country: "GER" },
    { number: 5, name: "Nico Schlotterbeck", position: "Obranca", country: "GER" },
    { number: 16, name: "Niklas Süle", position: "Obranca", country: "GER" },
    { number: 32, name: "Nico González", position: "Obranca", country: "ESP" },

    { number: 6, name: "Julian Brandt", position: "Záložník", country: "GER" },
    { number: 8, name: "Jude Bellingham", position: "Záložník", country: "ENG" },
    { number: 10, name: "Marco Reus", position: "Záložník", country: "GER" },
    { number: 21, name: "Emre Can", position: "Záložník", country: "GER" },

    { number: 7, name: "Karim Adeyemi", position: "Útočník", country: "GER" },
    { number: 9, name: "Donyell Malen", position: "Útočník", country: "NED" },
    { number: 11, name: "Donyell Malen", position: "Útočník", country: "NED" }
  ],

  rbLeipzig: [
    { number: 1, name: "Janis Blaswich", position: "Brankár", country: "GER" },
    { number: 40, name: "Péter Gulácsi", position: "Brankár", country: "HUN" },

    { number: 2, name: "Josko Gvardiol", position: "Obranca", country: "CRO" },
    { number: 3, name: "Ibrahima Konaté", position: "Obranca", country: "FRA" },
    { number: 4, name: "Willi Orban", position: "Obranca", country: "HUN" },

    { number: 8, name: "Konrad Laimer", position: "Záložník", country: "AUT" },
    { number: 10, name: "Christopher Nkunku", position: "Záložník", country: "FRA" },
    { number: 27, name: "Xavi Simons", position: "Záložník", country: "NED" },

    { number: 9, name: "Yussuf Poulsen", position: "Útočník", country: "DEN" },
    { number: 11, name: "Benjamin Sesko", position: "Útočník", country: "SVN" }
  ],

  leverkusen: [
    { number: 1, name: "Lukáš Hrádecký", position: "Brankár", country: "FIN" },
    { number: 35, name: "Finn Dahmen", position: "Brankár", country: "GER" },

    { number: 3, name: "Piero Hincapié", position: "Obranca", country: "ECU" },
    { number: 5, name: "Edmond Tapsoba", position: "Obranca", country: "BFA" },
    { number: 22, name: "Jonathan Tah", position: "Obranca", country: "GER" },

    { number: 7, name: "Moussa Diaby", position: "Záložník", country: "FRA" },
    { number: 8, name: "Exequiel Palacios", position: "Záložník", country: "ARG" },
    { number: 10, name: "Florian Wirtz", position: "Záložník", country: "GER" },

    { number: 9, name: "Victor Boniface", position: "Útočník", country: "NGA" },
    { number: 11, name: "Robert Andrich", position: "Útočník", country: "GER" }
  ],

  frankfurt: [
    { number: 1, name: "Kevin Trapp", position: "Brankár", country: "GER" },
    { number: 30, name: "Frederik Rønnow", position: "Brankár", country: "DEN" },

    { number: 4, name: "Tuta", position: "Obranca", country: "BRA" },
    { number: 5, name: "Martin Hinteregger", position: "Obranca", country: "AUT" },
    { number: 19, name: "Evan Ndicka", position: "Obranca", country: "FRA" },

    { number: 6, name: "Djibril Sow", position: "Záložník", country: "SUI" },
    { number: 8, name: "Daichi Kamada", position: "Záložník", country: "JPN" },
    { number: 10, name: "Ansgar Knauff", position: "Záložník", country: "GER" },

    { number: 9, name: "Rafael Borré", position: "Útočník", country: "COL" },
    { number: 11, name: "Jesper Lindstrøm", position: "Útočník", country: "DEN" }
  ],

  wolfsburg: [
    { number: 1, name: "Koen Casteels", position: "Brankár", country: "BEL" },
    { number: 35, name: "Alexander Nübel", position: "Brankár", country: "GER" },

    { number: 2, name: "Maxence Lacroix", position: "Obranca", country: "FRA" },
    { number: 3, name: "Kevin Mbabu", position: "Obranca", country: "SUI" },
    { number: 5, name: "Sebastian Bornauw", position: "Obranca", country: "BEL" },

    { number: 7, name: "Xaver Schlager", position: "Záložník", country: "AUT" },
    { number: 8, name: "Maximilian Arnold", position: "Záložník", country: "GER" },
    { number: 10, name: "Julian Draxler", position: "Záložník", country: "GER" },

    { number: 9, name: "Vincenzo Grifo", position: "Útočník", country: "ITA" },
    { number: 11, name: "Lukas Nmecha", position: "Útočník", country: "GER" }
  ],

  

  stuttgart: [
    { number: 1, name: "Gregor Kobel", position: "Brankár", country: "SUI" },
    { number: 35, name: "Borna Sosa", position: "Brankár", country: "CRO" },

    { number: 2, name: "Waldemar Anton", position: "Obranca", country: "GER" },
    { number: 4, name: "Marcin Kamiński", position: "Obranca", country: "POL" },

    { number: 6, name: "Chris Führich", position: "Záložník", country: "GER" },
    { number: 8, name: "Sasa Kalajdzic", position: "Záložník", country: "AUT" },

    { number: 9, name: "Serhou Guirassy", position: "Útočník", country: "GUI" },
    { number: 11, name: "Silas Wamangituka", position: "Útočník", country: "COD" }
  ],

  kolín: [
    { number: 1, name: "Timo Horn", position: "Brankár", country: "GER" },
    { number: 28, name: "Markus Schubert", position: "Brankár", country: "GER" },

    { number: 2, name: "Benno Schmitz", position: "Obranca", country: "GER" },
    { number: 4, name: "Sebastian Andersson", position: "Obranca", country: "SWE" },

    { number: 6, name: "Ellyes Skhiri", position: "Záložník", country: "TUN" },
    { number: 8, name: "Jonas Hector", position: "Záložník", country: "GER" },

    { number: 9, name: "Anthony Modeste", position: "Útočník", country: "FRA" },
    { number: 11, name: "Luca Waldschmidt", position: "Útočník", country: "GER" }
  ],

  freiburg: [
    { number: 1, name: "Mark Flekken", position: "Brankár", country: "NED" },
    { number: 35, name: "Philipp Lienhart", position: "Brankár", country: "AUT" },

    { number: 2, name: "Nicolas Höfler", position: "Obranca", country: "GER" },
    { number: 4, name: "Christian Günter", position: "Obranca", country: "GER" },

    { number: 8, name: "Florian Niederlechner", position: "Záložník", country: "GER" },
    { number: 10, name: "Vincenzo Grifo", position: "Záložník", country: "ITA" },

    { number: 9, name: "Michael Gregoritsch", position: "Útočník", country: "AUT" },
    { number: 11, name: "Roland Sallai", position: "Útočník", country: "HUN" }
  ],

  hoffenheim: [
    { number: 1, name: "Oliver Baumann", position: "Brankár", country: "GER" },
    { number: 35, name: "Kevin Vogt", position: "Brankár", country: "GER" },

    { number: 3, name: "Kevin Vogt", position: "Obranca", country: "GER" },
    { number: 5, name: "Boubacar Kamara", position: "Obranca", country: "FRA" },

    { number: 8, name: "Dennis Geiger", position: "Záložník", country: "GER" },
    { number: 10, name: "Florian Grillitsch", position: "Záložník", country: "AUT" },

    { number: 9, name: "Ihlas Bebou", position: "Útočník", country: "TOG" },
    { number: 11, name: "Christoph Baumgartner", position: "Útočník", country: "AUT" }
  ],

  augsburg: [
    { number: 1, name: "Rafal Gikiewicz", position: "Brankár", country: "POL" },
    { number: 25, name: "Mark Flekken", position: "Brankár", country: "NED" },

    { number: 2, name: "Mads Pedersen", position: "Obranca", country: "DEN" },
    { number: 4, name: "Jeffrey Gouweleeuw", position: "Obranca", country: "NED" },

    { number: 6, name: "Rani Khedira", position: "Záložník", country: "GER" },
    { number: 8, name: "Lukas Gruev", position: "Záložník", country: "GER" },

    { number: 9, name: "Florian Niederlechner", position: "Útočník", country: "GER" },
    { number: 11, name: "Jorge Mere", position: "Útočník", country: "ESP" }
  ],

  mainz: [
    { number: 1, name: "Robin Zentner", position: "Brankár", country: "GER" },
    { number: 24, name: "Jonathan Burkardt", position: "Brankár", country: "GER" },

    { number: 3, name: "Gideon Jung", position: "Obranca", country: "GER" },
    { number: 5, name: "Luca Kilian", position: "Obranca", country: "GER" },

    { number: 8, name: "Leandro Barreiro", position: "Záložník", country: "LUX" },
    { number: 10, name: "Silvan Widmer", position: "Záložník", country: "SUI" },

    { number: 9, name: "Dominik Kohr", position: "Útočník", country: "GER" },
    { number: 11, name: "Karim Onisiwo", position: "Útočník", country: "AUT" }
  ],

  

  
  union: [
    { number: 1, name: "Rafal Gikiewicz", position: "Brankár", country: "POL" },
    { number: 24, name: "Lukas Kruse", position: "Brankár", country: "GER" },

    { number: 2, name: "Robin Knoche", position: "Obranca", country: "GER" },
    { number: 4, name: "Paul Jaeckel", position: "Obranca", country: "GER" },

    { number: 6, name: "Robert Andrich", position: "Záložník", country: "GER" },
    { number: 8, name: "Kevin Behrens", position: "Záložník", country: "GER" },

    { number: 9, name: "Sheraldo Becker", position: "Útočník", country: "SUR" },
    { number: 11, name: "Jordan Siebatcheu", position: "Útočník", country: "USA" }
  ],

  heidenheim: [
    { number: 1, name: "Marius Müller", position: "Brankár", country: "GER" },
    { number: 21, name: "Nils Körber", position: "Brankár", country: "GER" },

    { number: 2, name: "Tim Kleindienst", position: "Obranca", country: "GER" },
    { number: 5, name: "Timo Becker", position: "Obranca", country: "GER" },

    { number: 6, name: "Fabian Klos", position: "Záložník", country: "GER" },
    { number: 8, name: "Tim Kleindienst", position: "Záložník", country: "GER" },

    { number: 9, name: "Sascha Mölders", position: "Útočník", country: "GER" },
    { number: 11, name: "Philipp Förster", position: "Útočník", country: "GER" }
  ],

  
  /* LIGUE 1 */

  psg: [
    { number: 1, name: "Gianluigi Donnarumma", position: "Brankár", country: "ITA" },
    { number: 16, name: "Marcin Bułka", position: "Brankár", country: "POL" },

    { number: 2, name: "Achraf Hakimi", position: "Obranca", country: "MAR" },
    { number: 4, name: "Marquinhos", position: "Obranca", country: "BRA" },
    { number: 5, name: "Presnel Kimpembe", position: "Obranca", country: "FRA" },

    { number: 6, name: "Vitinha", position: "Záložník", country: "POR" },
    { number: 8, name: "Désiré Doué", position: "Záložník", country: "FRA" },
    { number: 18, name: "Kang-in Lee", position: "Záložník", country: "KOR" },
    { number: 20, name: "Warren Zaïre-Emery", position: "Záložník", country: "FRA" },

    { number: 7, name: "Ousmane Dembélé", position: "Útočník", country: "FRA" },
    { number: 10, name: "Khvicha Kvaratskhelia", position: "Útočník", country: "GEO" },
    { number: 9, name: "Gonçalo Ramos", position: "Útočník", country: "POR" }
  ],

  marseille: [
    { number: 16, name: "Gerónimo Rulli", position: "Brankár", country: "ARG" },
    { number: 30, name: "Pau López", position: "Brankár", country: "ESP" },

    { number: 2, name: "Benjamin Pavard", position: "Obranca", country: "FRA" },
    { number: 5, name: "Leo Balerdi", position: "Obranca", country: "ARG" },

    { number: 8, name: "Adrien Rabiot", position: "Záložník", country: "FRA" },
    { number: 10, name: "Angel Gomes", position: "Záložník", country: "ENG" },
    { number: 23, name: "Pierre-Emile Højbjerg", position: "Záložník", country: "DEN" },

    { number: 22, name: "Mason Greenwood", position: "Útočník", country: "ENG" },
    { number: 25, name: "Amine Gouiri", position: "Útočník", country: "FRA" },
    { number: 18, name: "Tim Weah", position: "Útočník", country: "USA" }
  ],

  monako: [
    { number: 1, name: "Alexander Nübel", position: "Brankár", country: "GER" },
    { number: 40, name: "Tomas Koubek", position: "Brankár", country: "CZE" },

    { number: 2, name: "Jean-Clair Todibo", position: "Obranca", country: "FRA" },
    { number: 24, name: "Nayef Aguerd", position: "Obranca", country: "MAR" },

    { number: 6, name: "Paul Pogba", position: "Záložník", country: "FRA" },
    { number: 8, name: "Denis Zakaria", position: "Záložník", country: "SUI" },
    { number: 25, name: "Maghnes Akliouche", position: "Záložník", country: "FRA" },

    { number: 7, name: "Folarin Balogun", position: "Útočník", country: "ENG" },
    { number: 11, name: "Ansu Fati", position: "Útočník", country: "ESP" }
  ],

  lille: [
    { number: 16, name: "Roman Bürki", position: "Brankár", country: "SUI" },
    { number: 30, name: "Leo Jardim", position: "Brankár", country: "BRA" },

    { number: 5, name: "Aïssa Mandi", position: "Obranca", country: "ALG" },
    { number: 29, name: "Edon Zhegrova", position: "Obranca", country: "KOS" },

    { number: 8, name: "Benjamin André", position: "Záložník", country: "FRA" },
    { number: 23, name: "Olivier Giroud", position: "Záložník", country: "FRA" },

    { number: 9, name: "Hákon Haraldsson", position: "Útočník", country: "ISL" },
    { number: 11, name: "Ayyoub Bouaddi", position: "Útočník", country: "MAR" }
  ],

  rennes: [
    { number: 1, name: "Alban Lafont", position: "Brankár", country: "FRA" },
    { number: 30, name: "Steve Mandanda", position: "Brankár", country: "FRA" },

    { number: 3, name: "Lilian Brassier", position: "Obranca", country: "FRA" },
    { number: 24, name: "Quentin Merlin", position: "Obranca", country: "FRA" },

    { number: 6, name: "Seko Fofana", position: "Záložník", country: "CIV" },
    { number: 10, name: "Martin Terrier", position: "Záložník", country: "FRA" },

    { number: 9, name: "Esteban Le Paul", position: "Útočník", country: "FRA" },
    { number: 11, name: "Serhou Guirassy", position: "Útočník", country: "GUI" }
  ],

  lyon: [
    { number: 16, name: "Mickaël Ciani", position: "Brankár", country: "FRA" },
    { number: 30, name: "Khalis Merah", position: "Záložník", country: "FRA" },

    { number: 3, name: "Nicolas Tagliafico", position: "Obranca", country: "ARG" },
    { number: 24, name: "Moussa Niakhaté", position: "Obranca", country: "FRA" },

    { number: 8, name: "Corentin Tolisso", position: "Záložník", country: "FRA" },
    { number: 10, name: "Pablo Sarabia", position: "Záložník", country: "ESP" },

    { number: 9, name: "Georges Mikautadze", position: "Útočník", country: "GEO" },
    { number: 11, name: "Ernest Nuamah", position: "Útočník", country: "GHA" }
  ],

  štrasburg: [
    { number: 1, name: "Matz Sels", position: "Brankár", country: "BEL" },
    { number: 30, name: "Jean-Leo Scherrer", position: "Brankár", country: "FRA" },

    { number: 5, name: "Youssouf Sabaly", position: "Obranca", country: "SEN" },
    { number: 14, name: "Florian Chabrolle", position: "Obranca", country: "FRA" },

    { number: 8, name: "Joaquin Panichelli", position: "Záložník", country: "FRA" },
    { number: 20, name: "Iñaki Mateu", position: "Záložník", country: "ESP" },

    { number: 9, name: "Stanislas Reznik", position: "Útočník", country: "FRA" },
    { number: 11, name: "Ghani Mubarak", position: "Útočník", country: "MAR" }
  ],

  toulouse: [
    { number: 1, name: "Baptiste Reynet", position: "Brankár", country: "FRA" },
    { number: 30, name: "Rémy Riou", position: "Brankár", country: "FRA" },

    { number: 2, name: "Nicolas Isimat-Mirin", position: "Obranca", country: "FRA" },
    { number: 24, name: "Yann Gboho", position: "Záložník", country: "FRA" },
    { number: 9, name: "Max Alary", position: "Útočník", country: "FRA" }
  ],

  auxerre: [
    { number: 1, name: "Mickaël Landreau", position: "Brankár", country: "FRA" },
    { number: 5, name: "Elisha Owusu", position: "Záložník", country: "FRA" },
    { number: 9, name: "Yoann Touzghar", position: "Útočník", country: "FRA" }
  ],

  angers: [
    { number: 1, name: "Paul Bernardoni", position: "Brankár", country: "FRA" },
    { number: 5, name: "Pierrick Capelle", position: "Obranca", country: "FRA" },
    { number: 10, name: "Romain Hamouma", position: "Útočník", country: "FRA" }
  ],

  brest: [
    { number: 1, name: "Marco Bizot", position: "Brankár", country: "NED" },
    { number: 5, name: "Brendan Chardonnet", position: "Obranca", country: "FRA" },
    { number: 9, name: "Pierre Le Barrois", position: "Útočník", country: "FRA" }
  ],

  lehavre: [
    { number: 1, name: "Aly Keita", position: "Brankár", country: "SEN" },
    { number: 5, name: "Pape Diarra", position: "Obranca", country: "MLI" },
    { number: 9, name: "Habib Diallo", position: "Útočník", country: "SEN" }
  ],

  nantes: [
    { number: 1, name: "Marçal", position: "Brankár", country: "BRA" },
    { number: 6, name: "Abdoulaye Touré", position: "Záložník", country: "FRA" },
    { number: 10, name: "Randal Kolo Muani", position: "Útočník", country: "FRA" }
  ],

  nice: [
    { number: 1, name: "Walter Benítez", position: "Brankár", country: "ARG" },
    { number: 5, name: "Melvin Bard", position: "Obranca", country: "FRA" },
    { number: 11, name: "Terem Moffi", position: "Útočník", country: "NGA" }
  ],

  lorient: [
    { number: 1, name: "Jérémy Gavrila", position: "Brankár", country: "FRA" },
    { number: 10, name: "Mohamed Bamba", position: "Útočník", country: "CIV" }
  ],

  metz: [
    { number: 1, name: "Gauthier Hein", position: "Záložník", country: "FRA" },
    { number: 9, name: "Lassine Sinayoko", position: "Útočník", country: "MLI" }
  ],

  paris_fc: [
    { number: 1, name: "Matthieu Gorgelin", position: "Brankár", country: "FRA" },
    { number: 8, name: "Ilan Kebbal", position: "Záložník", country: "FRA" },
    { number: 11, name: "Abdou Diallo", position: "Obranca", country: "FRA" }
  ],

  /* SERIE A */

  inter: [
    // BRANKÁRI
    { number: 1, name: "Samir Handanović", position: "Brankár", country: "SLO" },
    { number: 31, name: "Julian Conz", position: "Brankár", country: "ITA" },

    // OBRANCOVIA
    { number: 2, name: "Denzel Dumfries", position: "Obranca", country: "NED" },
    { number: 15, name: "Stefan de Vrij", position: "Obranca", country: "NED" },
    { number: 23, name: "Federico Dimarco", position: "Obranca", country: "ITA" },

    // ZÁLOŽNÍCI
    { number: 5, name: "Nicolò Barella", position: "Záložník", country: "ITA" },
    { number: 8, name: "Henrikh Mkhitaryan", position: "Záložník", country: "ARM" },
    { number: 77, name: "Kristjan Asllani", position: "Záložník", country: "ALB" },

    // ÚTOČNÍCI
    { number: 9, name: "Lautaro Martínez", position: "Útočník", country: "ARG" },
    { number: 10, name: "Marko Arnautović", position: "Útočník", country: "AUT" }
  ],

  juventus: [
    // BRANKÁRI
    { number: 30, name: "Michele Di Gregorio", position: "Brankár", country: "ITA" },
    { number: 23, name: "Carlo Pinsoglio", position: "Brankár", country: "ITA" },

    // OBRANCOVIA
    { number: 3, name: "Federico Gatti", position: "Obranca", country: "ITA" },
    { number: 6, name: "Lloyd Kelly", position: "Obranca", country: "ENG" },
    { number: 15, name: "Pierre Kalulu", position: "Obranca", country: "FRA" },

    // ZÁLOŽNÍCI
    { number: 5, name: "Manuel Locatelli", position: "Záložník", country: "ITA" },
    { number: 8, name: "Teun Koopmeiners", position: "Záložník", country: "NED" },
    { number: 22, name: "Weston McKennie", position: "Záložník", country: "USA" },

    // ÚTOČNÍCI
    { number: 9, name: "Dusan Vlahović", position: "Útočník", country: "SRB" },
    { number: 30, name: "Jonathan David", position: "Útočník", country: "CAN" }
  ],

  neapol: [
    // BRANKÁRI
    { number: 25, name: "Alex Meret", position: "Brankár", country: "ITA" },
    { number: 22, name: "Nikita Contini", position: "Brankár", country: "ITA" },

    // OBRANCOVIA
    { number: 4, name: "Giovanni Di Lorenzo", position: "Obranca", country: "ITA" },
    { number: 6, name: "Kim Min-jae", position: "Obranca", country: "KOR" },

    // ZÁLOŽNÍCI
    { number: 8, name: "Stanislav Lobotka", position: "Záložník", country: "SVK" },
    { number: 14, name: "Scott McTominay", position: "Záložník", country: "SCO" }, // hviezda sezóny :contentReference[oaicite:1]{index=1}

    // ÚTOČNÍCI
    { number: 9, name: "Giovanni Simeone", position: "Útočník", country: "ARG" },
    { number: 99, name: "Victor Osimhen", position: "Útočník", country: "NGA" }
  ],

  asrím: [
    // BRANKÁRI
    { number: 1, name: "Wojciech Szczęsny", position: "Brankár", country: "POL" },
    { number: 22, name: "Daniele Ghilardi", position: "Brankár", country: "ITA" }, // nový prírastok :contentReference[oaicite:2]{index=2}

    // OBRANCOVIA
    { number: 3, name: "Gianluca Mancini", position: "Obranca", country: "ITA" },
    { number: 4, name: "Marash Kumbulla", position: "Obranca", country: "ALB" },

    // ZÁLOŽNÍCI
    { number: 8, name: "Matías Soulé", position: "Záložník", country: "ARG" },
    { number: 23, name: "Nicolo Zaniolo", position: "Záložník", country: "ITA" },

    // ÚTOČNÍCI
    { number: 10, name: "Evan Ferguson", position: "Útočník", country: "IRL" }, // forma v sezóne :contentReference[oaicite:3]{index=3}
    { number: 11, name: "Paulo Dybala", position: "Útočník", country: "ARG" }
  ],

  acmiláno: [
    { number: 1, name: "Mike Maignan", position: "Brankár", country: "FRA" },
    { number: 2, name: "Theo Hernández", position: "Obranca", country: "FRA" },
    { number: 4, name: "Alessandro Florenzi", position: "Obranca", country: "ITA" },
    { number: 8, name: "Ismaël Bennacer", position: "Záložník", country: "ALG" },
    { number: 9, name: "Christian Pulisic", position: "Útočník", country: "USA" }
  ],

  atalanta: [
    { number: 29, name: "Marco Carnesecchi", position: "Brankár", country: "ITA" },
    { number: 16, name: "Giorgio Scalvini", position: "Obranca", country: "ITA" },
    { number: 8, name: "Yunus Musah", position: "Záložník", country: "USA" },
    { number: 90, name: "Krstović Nikola", position: "Útočník", country: "SRB" }
  ],

  bologna: [
    { number: 1, name: "Luke Massagli", position: "Brankár", country: "ITA" },
    { number: 11, name: "Riccardo Orsolini", position: "Útočník", country: "ITA" }
  ],

  cagliari: [
    { number: 25, name: "Elia Caprile", position: "Brankár", country: "ITA" },
    { number: 3, name: "Tommaso Augello", position: "Obranca", country: "ITA" },
    { number: 91, name: "Roberto Piccoli", position: "Útočník", country: "ITA" }
  ],

  como: [
    { number: 30, name: "Jean Butez", position: "Brankár", country: "BEL" },
    { number: 10, name: "Patrick Cutrone", position: "Útočník", country: "ITA" }
  ],

  cremonese: [
    { number: 1, name: "Federico Bonazzoli", position: "Útočník", country: "ITA" },
    { number: 9, name: "Jamie Vardy", position: "Útočník", country: "ENG" } 
  ],

  fiorentina: [
    { number: 10, name: "Christian Kouamé", position: "Útočník", country: "CIV" },
    { number: 24, name: "Luca Ranieri", position: "Obranca", country: "ITA" }
  ],

  fcjanov: [
    { number: 8, name: "Valentin Carboni", position: "Útočník", country: "ARG" }
  ],

  verona: [
    { number: 9, name: "Gift Orban", position: "Útočník", country: "NGA" }
  ],

  lazio: [
    { number: 1, name: "Ivan Provedel", position: "Brankár", country: "ITA" },
    { number: 17, name: "Mattia Zaccagni", position: "Útočník", country: "ITA" }
  ],

  lecce: [
    { number: 1, name: "Wladimiro Falcone", position: "Brankár", country: "ITA" }
  ],

  parma: [
    { number: 1, name: "Enrico Delprato", position: "Brankár", country: "ITA" }
  ],

  pisa: [
    { number: 9, name: "Antonio Caracciolo", position: "Útočník", country: "ITA" }
  ],

  sassuolo: [
    { number: 10, name: "Domenico Berardi", position: "Útočník", country: "ITA" }
  ],

  torino: [
    { number: 9, name: "Andrea Belotti", position: "Útočník", country: "ITA" }
  ],

  udinese: [
    { number: 7, name: "Tolgay Arslan", position: "Záložník", country: "GER" }
  ]
}


/* VYKRESLENIE SÚPISKY */
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

/* TABY */
document.querySelectorAll('.team-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.team-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.team-tab-content').forEach(c => c.classList.remove('active'));

    tab.classList.add('active');
    document.querySelector(`.team-tab-content[data-tab="${tab.dataset.tab}"]`)
      .classList.add('active');
  });
});