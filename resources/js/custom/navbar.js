document.querySelectorAll('.nav-item').forEach(item => {
    const animations = [
        'magic-shake',
        'magic-bounce',
        'magic-glow',
        'magic-hops',
        'magic-wobble',
        'magic-spin',
        'magic-fade',
        'magic-pulse',
        'magic-flip',
        'magic-swing',
        'magic-bounce-spin',
        'magic-zoom',
        'magic-color-change'
    ];
    const cooldown = 10000;

    function activateMagic() {
        // Remove any existing magic classes
        item.classList.remove(...animations);

        // Pick a random animation
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        item.classList.add(randomAnimation);

        // Remove the magic class after the animation completes
        setTimeout(() => {
            item.classList.remove(randomAnimation);
        }, getAnimationDuration(randomAnimation));
    }

    function getAnimationDuration(animation) {
        switch (animation) {
            case 'magic-shake': return 500;
            case 'magic-bounce': return 600;
            case 'magic-glow': return 1000;
            case 'magic-hops': return 1000;
            case 'magic-wobble': return 600;
            case 'magic-spin': return 1000;
            case 'magic-fade': return 800;
            case 'magic-pulse': return 600;
            case 'magic-flip': return 1000;
            case 'magic-swing': return 1000;
            case 'magic-bounce-spin': return 1200;
            case 'magic-zoom': return 600;
            case 'magic-color-change': return 1000;
            default: return 0;
        }
    }

    function startMagicAnimation() {
        activateMagic();
        setTimeout(startMagicAnimation, cooldown);
    }

    const initialDelay = Math.random() * cooldown;
    setTimeout(startMagicAnimation, initialDelay);
});
