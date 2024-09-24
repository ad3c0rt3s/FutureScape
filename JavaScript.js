document.addEventListener('DOMContentLoaded', function() {
    function createStars(count) {
        const universe = document.getElementById('starfield');
        if (!universe) return; // Just in case, prevent further execution if the element is not found
        
        for(let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.width = '2px';
            star.style.height = '2px';
            star.style.backgroundColor = 'white';
            star.style.left = `${Math.random() * window.innerWidth}px`;
            star.style.top = `${Math.random() * window.innerHeight}px`;
            star.style.boxShadow = `0 0 5px #fff, 0 0 10px #fff`;
            universe.appendChild(star);
            animateStar(star);
        }
    }

    function animateStar(star) {
        const timer = Math.random() * 3000 + 5000;
        setTimeout(() => {
            star.style.left = `${Math.random() * window.innerWidth}px`;
            star.style.top = `${Math.random() * window.innerHeight}px`;
            animateStar(star);
        }, timer);
    }

    createStars(150); // Adjust the number of stars as needed
});
