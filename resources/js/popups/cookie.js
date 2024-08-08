document.addEventListener('DOMContentLoaded', function() {
    const cookiePopup = document.getElementById('cookiePopup');
    const cookieMessage = document.getElementById('cookieMessage');
    const closeCookiePopup = document.querySelector('.close-cookie-popup');
    const displayDuration = 15000;

    // Array of funny cookie messages
    const messages = [
        "🍪 Hier gibt's keine Kekse, nur ein Keks-Vakuum!",
        "😋 Kekse? Nein, wir haben nur Spaß und gute Laune!",
        "🚫🍪 Kekse? Hier nicht! Wir sind auf Diät – der digitalen Art.",
        "👀 Keine Kekse, nur ein geheimnisvoller Zaubertrick!",
        "🙅‍♂️ Kekse? Nicht hier, aber jede Menge witzige Sprüche!",
        "🥳 Kekse sind nicht auf der Speisekarte, aber Lachen ist erlaubt!",
        "🤖 Keine Kekse, aber dafür jede Menge Technik-Gespräche!",
        "🪓 Keine Kekse, nur Abenteuer und ein Hauch von Magie!",
        "🌟 In dieser Dimension gibt es keine Kekse, nur Glitzer und Sterne!",
        "⚔️ Vorsicht! Keine Kekse in dieser Gegend, nur heldenhafte Geschichten!",
        "🔮 Unser Reich hat keine Kekse, aber dafür viele Geheimnisse!",
        "🏰 In unserem Schloss gibt es keine Kekse – nur Rittersagen und Burgabenteuer!",
        "🧙‍♂️ Keine Kekse für Zauberer, nur Zaubersprüche und magische Geschichten!",
        "🎮 In diesem Spiel gibt’s keine Kekse, aber epische Levels und spannende Herausforderungen!",
        "🌌 Keine Kekse im Universum – nur Sterne und galaktische Abenteuer!",
        "🛡️ In dieser Festung gibt es keine Kekse, nur mutige Quests und geheimnisvolle Relikte!",
        "⚒️ Unsere Schmiede hat keine Kekse, aber viele glühende Abenteuer und schimmernde Schätze!",
        "📜 Auf diesem Pergament stehen keine Kekse, nur epische Epen und große Legenden!",
        "🧪 In diesem Labor gibt es keine Kekse – nur spannende Experimente und magische Tränke!",
        "🏹 Keine Kekse in dieser Bogenschießarena, nur prächtige Treffer und heldenhafte Taten!",
        "🗡️ Dieser Schmied hat keine Kekse, nur scharfe Schwerter und edle Waffen!",
        "⚗️ Keine Kekse im Zauberturm – nur mächtige Zauber und geheimes Wissen!",
        "🦄 In diesem Märchenwald gibt es keine Kekse, nur fantastische Wesen und alte Magie!",
        "🛡️ In dieser Festung fehlen die Kekse – stattdessen gibt es Ruhm und große Taten!",
        "⚔️ Keine Kekse in diesem Ritterlager, nur Ritterehre und tapfere Schlachten!",
        "🧝‍♂️ Keine Kekse in dieser Elfenwelt, nur uralte Geheimnisse und mystische Schönheit!",
        "🏆 In dieser Heldengilde gibt es keine Kekse, nur legendäre Quests und heldenhafte Triumphe!"
    ];


    // Function to display a random message
    function showRandomMessage() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        cookieMessage.textContent = messages[randomIndex];
    }

    // Show the popup and a random message
    showRandomMessage();
    cookiePopup.style.display = 'block';

    // Automatically fade out after a certain time
    setTimeout(() => {
        cookiePopup.classList.add('fade-out');
        setTimeout(() => {
            cookiePopup.style.display = 'none';
        }, 500); // Match this duration with the CSS fade-out animation
    }, displayDuration);

    // Close the popup when the close button is clicked
    closeCookiePopup.onclick = function() {
        cookiePopup.classList.add('fade-out');
        setTimeout(() => {
            cookiePopup.style.display = 'none';
        }, 500); // Match this duration with the CSS fade-out animation
    }

    window.onclick = function(event) {
        if (event.target == cookiePopup) {
            cookiePopup.classList.add('fade-out');
            setTimeout(() => {
                cookiePopup.style.display = 'none';
            }, 500); // Match this duration with the CSS fade-out animation
        }
    }
});

function createCookieParticle() {
    const container = document.getElementById('explosionContainer');
    const cookie = document.createElement('div');
    cookie.className = 'cookie';

    // Randomly place cookie within container
    const containerRect = container.getBoundingClientRect();
    const randomX = Math.random() * (containerRect.width - 20); // Subtract cookie width to prevent overflow
    const randomY = Math.random() * (containerRect.height - 20); // Subtract cookie height to prevent overflow
    cookie.style.left = `${randomX}px`;
    cookie.style.top = `${randomY}px`;

    container.appendChild(cookie);

    // Remove particle after animation ends
    cookie.addEventListener('animationend', () => {
        container.removeChild(cookie);
    });
}

function startExplosion() {
    for (let i = 0; i < 20; i++) { // Create 20 particles
        setTimeout(createCookieParticle, i * 100); // Stagger the creation
    }
}

// Start explosion on load or when needed
window.onload = startExplosion;
