function buyPack() {
    if (coins < 100) return alert("Pas assez de coins !");
    
    coins -= 100;
    updateUI();

    const id = Math.floor(Math.random() * 1000) + 1;
    const luck = Math.random() * 100;
    
    let rarityClass = "rarity-common";
    let rarityName = "COMMUN";
    let power = Math.floor(Math.random() * 50);

    if (luck > 95) { // 5% de chance
        rarityClass = "rarity-legendary";
        rarityName = "LÉGENDAIRE";
        power += 500;
    } else if (luck > 80) { // 15% de chance
        rarityClass = "rarity-epic";
        rarityName = "ÉPIQUE";
        power += 150;
    }

    createCardUI(id, rarityClass, rarityName, power);
}

function createCardUI(id, rarityClass, rarityName, power) {
    const grid = document.getElementById('card-grid');
    const cardHTML = `
        <div class="card ${rarityClass}">
            <div class="card-inner">
                <div class="card-glow"></div>
                <div style="padding:5px; font-size:10px;">#${id} - ${rarityName}</div>
                <div class="card-image"><img src="https://api.dicebear.com{id}" width="80"></div>
                <div class="card-name">Gemme Animé</div>
                <div style="font-size:12px">💎 ${power}</div>
            </div>
        </div>`;
    grid.insertAdjacentHTML('afterbegin', cardHTML);
}
