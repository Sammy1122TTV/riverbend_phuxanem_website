document.addEventListener('DOMContentLoaded', function() {
    const originClasses = document.querySelectorAll('.origin-class');
    const popup = document.getElementById('originPopup');
    const popupImage = document.getElementById('originImage');
    const popupTitle = document.getElementById('originTitle');
    const popupDescription = document.getElementById('originDescription');
    const closeBtn = document.querySelector('.close');
    const body = document.body;

    originClasses.forEach(originClass => {
        originClass.addEventListener('click', function() {
            const origin = this.getAttribute('data-origin');
            const details = this.querySelector('.origin-details').innerHTML;

            // Set the image source (you'll need to have these images)
            popupImage.src = `/resources/img/classes/${origin.toLowerCase().replace(' ', '_')}.png`;

            popupTitle.textContent = origin;
            popupDescription.innerHTML = details;

            popup.style.display = 'block';
            body.classList.add('blurred'); // Add blur class to body
            body.style.overflow = 'hidden'; // Prevent body scroll
        });
    });

    closeBtn.onclick = function() {
        popup.style.display = 'none';
        body.classList.remove('blurred'); // Remove blur class from body
        body.style.overflow = 'auto'; // Restore body scroll
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
            body.classList.remove('blurred'); // Remove blur class from body
            body.style.overflow = 'auto'; // Restore body scroll
        }
    }
});
