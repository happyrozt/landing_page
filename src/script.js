// script.js

document.addEventListener('DOMContentLoaded', function () {
    var dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(function (dropdown) {
        var button = dropdown.querySelector('.dropbtn');
        var content = dropdown.querySelector('.dropdown-content');

        button.addEventListener('mouseover', function (event) {
            dropdowns.forEach(function (d) {
                if (d !== dropdown) {
                    d.querySelector('.dropdown-content').style.display = 'none';
                }
            });
            
            content.style.display = 'block';
        });

        // dropdown.addEventListener('mouseleave', function (event) {
        //     content.style.display = 'none';
        // });
    });

    // Optionally, you can add a listener to close the dropdown if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropbtn')) {
            dropdowns.forEach(function (dropdown) {
                dropdown.querySelector('.dropdown-content').style.display = 'none';
            });
        }
    });
});



const reviewContainer = document.querySelector('.review-container');
const reviews = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showNextReview() {
    currentIndex++;
    if (currentIndex >= reviews.length / 2) {
        currentIndex = 0;
    }
    updateSlider();
}

function updateSlider() {
    reviewContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.getAttribute('data-index'));
        updateSlider();
    });
});

setInterval(showNextReview, 3000);




