document.addEventListener('DOMContentLoaded', function() {
    const cookiePopup = document.getElementById('cookiePopup');
    const cookieMessage = document.getElementById('cookieMessage');
    const closeCookiePopup = document.querySelector('.close-cookie-popup');
    const displayDuration = 15000;

    // Array of funny cookie messages
    const messages = [
        "🍪 No cookies here! Just a crumb of a message.",
        "😋 We don't use cookies, but we do use a lot of puns!",
        "🚫🍪 This site is cookie-free. You won’t find any sweet treats here!",
        "👀 No cookies, just pure web magic! 🪄",
        "🙅‍♂️ We’ve got no cookies, only a splash of humor!",
        "🥳 Cookies are not on our menu, but humor is! Enjoy!",
        "🤖 No cookies! Just some good ol' tech talk!",
        "🪓 No cookies here, just enchanted potions and mystical spells!",
        "🌟 This realm has no cookies—only magical pixels and epic quests!",
        "⚔️ Beware! No cookies in this land, only legendary tales and adventures!",
        "🔮 Our castle has no cookies, but plenty of magical treasures and lore!",
        "🏰 In this kingdom, cookies are but a myth—join our quest for glory instead!",
        "🧙‍♂️ No cookies for heroes in this domain, only quests and mythical creatures!",
        "🎮 This dungeon has no cookies, only epic loot and legendary challenges!",
        "🌌 No cookies in this galaxy—only star maps and cosmic adventures await!",
        "🛡️ No cookies in this stronghold, only valiant quests and ancient relics!",
        "⚒️ Our forge has no cookies, but plenty of enchanted gear and mystical ores!",
        "📜 No cookies on this scroll, just epic lore and grand tales of yore!",
        "🧪 In this alchemist's lab, we brew no cookies—only potions of wonder!",
        "🏹 No cookies in this archery range—only skilled shots and heroic feats!",
        "🗡️ This swordsmith forges no cookies, only blades of legend and honor!",
        "⚗️ No cookies in this wizard's tower—only spells and arcane knowledge!",
        "🦄 No cookies in this enchanted forest, just magical creatures and ancient wisdom!",
        "🛡️ In this medieval bastion, cookies are absent—only heroic deeds and grand victories!",
        "⚔️ No cookies in this knight's keep, just chivalry and legendary battles!",
        "🧝‍♂️ No cookies in this elven glade, just ancient secrets and mystical beauty!",
        "🏆 No cookies in this hero's guild, only epic quests and heroic achievements!"
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
