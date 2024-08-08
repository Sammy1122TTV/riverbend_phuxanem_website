// Store the original title
let originalTitle = document.title;
let flashInterval; // To store the interval ID for flashing

// Array of medieval German texts
const messages = [
    'Komm zurück, es gibt Kekse!',
    'KEKSE!!!',
    'Hallo?',
    'Zurück! Sonst gibt\'s \'ne Torte!',
    'Nicht gehen, es wird spannend!',
    'Komm zurück, die Katze fehlt!',
    'Wir vermissen deinen Charme!',
    'Besser hier bleiben – wir haben Kaffee!',
    'Zurück oder die Welt wird langweilig!',
    'Wo bist du? Wir haben Fragen!',
    'Halt! Der Spaß beginnt jetzt!',
    'Zurück, sonst vermissen wir dich!'
];
// Function to get a random message
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// Function to start flashing the title
function startFlashingTitle() {
    let showingOriginalTitle = true;

    flashInterval = setInterval(() => {
        document.title = showingOriginalTitle ? getRandomMessage() : originalTitle;
        showingOriginalTitle = !showingOriginalTitle;
    }, 2000); // Flash every 2 seconds
}

// Function to stop flashing the title
function stopFlashingTitle() {
    clearInterval(flashInterval);
    document.title = originalTitle; // Reset to original title
}

// Event listener for visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        startFlashingTitle();
    } else {
        stopFlashingTitle();
    }
});
