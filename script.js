let coins = 1000;
let inventory = [];
const ADMIN_CODE = "ZORO66"; // Ton code secret

// Initialisation
window.onload = () => {
    let savedCoins = localStorage.getItem('coins');
    if(savedCoins) coins = parseInt(savedCoins);
    updateUI();
};

function updateUI() {
    document.getElementById('coin-count').innerText = coins;
    document.getElementById('card-count').innerText = inventory.length;
    localStorage.setItem('coins', coins);
}

function buyPack() {
    if (coins < 100) return alert("Pas assez de coins !");
    
    coins -= 100;
    const cardId = Math.floor(Math.random() * 1000) + 1; // ID entre 1 et 1000
    const luck = Math.random() * 100;

    let rarity = "common";
    if (luck > 98) rarity = "legendary"; // 2% de chance
    else if (luck > 85) rarity = "epic"; // 15% de chance

    addCard(cardId, rarity);
    updateUI();
}

function addCard(id, rarity) {
    inventory.push({id, rarity});
    const grid = document.getElementById('card-grid');
    
    const cardHTML = `
        <div class="card ${rarity}">
            <div class="card-img">${getRarityEmoji(rarity)}</div>
            <div style="padding:10px">
                <div style="font-size:12px; opacity:0.7">ID: #${id}</div>
                <div style="font-weight:bold; color:${rarity == 'legendary' ? 'gold' : 'white'}">Pierre d'Animé</div>
                <div style="font-size:11px; margin-top:5px uppercase">${rarity}</div>
            </div>
        </div>`;
    grid.insertAdjacentHTML('afterbegin', cardHTML);
}

function getRarityEmoji(r) {
    if (r === 'legendary') return "💎";
    if (r === 'epic') return "🔮";
    return "🪨";
}

// --- SYSTEME ADMIN ---
function promptAdmin() {
    let pass = prompt("Code d'accès Admin :");
    if (pass === ADMIN_CODE) {
        document.getElementById('admin-panel').style.display = 'flex';
    }
}

function executeCommand() {
    let cmd = document.getElementById('admin-cmd').value;
    if (cmd.startsWith("addcoins")) {
        let amount = parseInt(cmd.split(" ")[1]);
        coins += amount;
        alert(amount + " coins ajoutés !");
    } else if (cmd === "unlockall") {
        alert("Mode Dieu activé : Inventaire infini débloqué.");
    }
    updateUI();
}

function closeAdmin() {
    document.getElementById('admin-panel').style.display = 'none';
}
