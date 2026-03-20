let coins = 1000;
let myCards = [];

function buyPack() {
    if (coins >= 100) {
        coins -= 100;
        document.getElementById('coin-count').innerText = coins;
        
        // Génère un ID entre 1 et 1000
        const cardId = Math.floor(Math.random() * 1000) + 1;
        addCardToInventory(cardId);
    } else {
        alert("Pas assez de coins ! Attends le bonus journalier.");
    }
}

function addCardToInventory(id) {
    myCards.push(id);
    const grid = document.getElementById('card-grid');
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.innerHTML = `💎<br>Pierre #${id}`;
    grid.appendChild(cardDiv);
    document.getElementById('card-count').innerText = myCards.length;
}

// Système Admin
function checkAdmin() {
    const code = prompt("Code Admin Secret :");
    if (code === "GOD_MODE_99") {
        coins += 1000000;
        document.getElementById('coin-count').innerText = coins;
        alert("Mode Admin Activé : +1M Coins ajoutés !");
    }
}
