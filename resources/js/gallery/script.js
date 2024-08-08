const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const closePopup = document.getElementById('close-popup');

async function loadImages() {
    try {
        const response = await fetch('gallery/');
        const text = await response.text();
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(text, 'text/html');
        const links = htmlDoc.getElementsByTagName('a');

        gallery.innerHTML = '';

        for (let link of links) {
            const href = link.getAttribute('href');
            if (href.match(/\.(jpe?g|png|gif)$/i)) {
                const item = document.createElement('div');
                item.classList.add('gallery-item');

                const img = document.createElement('img');
                img.src = `gallery/${href}`; // Corrected path
                img.alt = 'Minecraft Image';

                item.appendChild(img);
                gallery.appendChild(item);

                item.addEventListener('click', () => {
                    popupImage.src = img.src;
                    popup.style.display = 'flex';
                });
            }
        }
    } catch (error) {
        console.error('Error loading images:', error);
    }
}

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('load', loadImages);
window.addEventListener('resize', loadImages);