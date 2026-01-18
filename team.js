// -------------------------
        // ZO URL načítaj parametre
        // -------------------------
        const params = new URLSearchParams(window.location.search);
        const teamKey = params.get('team');
        const leagueKey = params.get('league');

        // -------------------------
        // Dáta o kluboch (pridaj podľa potreby)
        // -------------------------
        const teams = {
            liverpool: {
                name: "Liverpool",
                league: "Premier League",
                logo: "Obrázky/Liverpool.png",
                stadium: "Anfield",
                city: "Liverpool",
                founded: "1892",
                description: "Liverpool FC je anglický futbalový klub z mesta Liverpool. Je známy svojou bohatou históriou a fanúšikovskou kultúrou.",
                trophies: "19× Premier League, 6× Liga Majstrov"
            },
            manunited: {
                name: "Manchester United",
                league: "Premier League",
                logo: "Obrázky/Man United.png",
                stadium: "Old Trafford",
                city: "Manchester",
                founded: "1878",
                description: "Manchester United je jeden z najúspešnejších klubov v Anglicku s obrovskou fanúšikovskou základňou po celom svete.",
                trophies: "20× Premier League, 3× Liga Majstrov"
            },
            barcelona: {
                name: "Barcelona",
                league: "La Liga",
                logo: "Obrázky/Barcelona.png",
                stadium: "Camp Nou",
                city: "Barcelona",
                founded: "1899",
                description: "FC Barcelona je španielsky klub známy svojím štýlom hry a množstvom úspechov v domácej i európskej súťaži.",
                trophies: "26× La Liga, 5× Liga Majstrov"
            }
        };

        const card = document.getElementById('teamCard');

        // -------------------------
        // Ak tím existuje, zobraz
        // -------------------------
        if (!teamKey || !teams[teamKey]) {
            card.innerHTML = `<p>Klub nebol nájdený. Skontroluj URL alebo klikni na tím v tabuľke.</p>`;
        } else {
            const team = teams[teamKey];

            card.innerHTML = `
            <div class="team-info-card">
                <img src="${team.logo}" alt="${team.name}" class="team-logo-large">
                <h2>${team.name}</h2>
                <p><strong>Liga:</strong> ${team.league}</p>
                <p><strong>Štadión:</strong> ${team.stadium}</p>
                <p><strong>Mesto:</strong> ${team.city}</p>
                <p><strong>Založený:</strong> ${team.founded}</p>
                <p><strong>Trofeje:</strong> ${team.trophies}</p>
                <p>${team.description}</p>
            </div>
        `;
        }