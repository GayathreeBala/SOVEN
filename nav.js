
    // JavaScript to handle popup functionality for each card
    document.addEventListener('DOMContentLoaded', function () {
        const cards = document.querySelectorAll('.card');
        const popups = document.querySelectorAll('.popup');
        const overlays = document.querySelectorAll('.overlay');
        const closeBtns = document.querySelectorAll('.close-btn');

        cards.forEach(function (card, index) {
            const readMoreBtn = card.querySelector('.read-more-btn');
            const viewLessBtn = card.querySelector('.view-less-btn');
            const popup = popups[index];
            const overlay = overlays[index];
            const closeBtn = closeBtns[index];

            readMoreBtn.addEventListener('click', function () {
                card.style.display = 'none';
                popup.style.display = 'block';
                overlay.style.display = 'block';
                viewLessBtn.style.display = 'block';
            });

            viewLessBtn.addEventListener('click', function () {
                card.style.display = 'block';
                popup.style.display = 'none';
                overlay.style.display = 'none';
                viewLessBtn.style.display = 'none';
            });

            closeBtn.addEventListener('click', function () {
                card.style.display = 'block';
                popup.style.display = 'none';
                overlay.style.display = 'none';
                viewLessBtn.style.display = 'none';
            });

            overlay.addEventListener('click', function () {
                card.style.display = 'block';
                popup.style.display = 'none';
                overlay.style.display = 'none';
                viewLessBtn.style.display = 'none';
            });
        });
    });
