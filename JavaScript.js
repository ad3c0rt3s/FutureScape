document.addEventListener('DOMContentLoaded', function() {
    function createStars(count) {
        const universe = document.getElementById('starfield');
        if (!universe) return; // Prevents further execution if the element is not found
        
        for (let i = 0; i < count; i++) {
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

    createStars(150);

    // Function to show categories after clicking "Start"
    window.showCategories = function() {
        document.querySelector('.content').classList.add('hidden');
        document.getElementById('categories').classList.remove('hidden');
    }

    // Function to show category descriptions
    function showDescription(categoryId) {
        const descriptions = document.querySelectorAll('.category-description');
        descriptions.forEach(desc => desc.classList.add('hidden'));

        const element = document.getElementById(categoryId);
        if (element) {
            element.classList.remove('hidden');
        } else {
            console.error('No element found with ID:', categoryId);
        }
    }
    // Attach event listeners to category buttons (if not done via HTML)
    document.querySelectorAll('.button-90s').forEach(button => {
        button.addEventListener('click', function() {
            showDescription(this.getAttribute('data-category'));
        });
    });
});
