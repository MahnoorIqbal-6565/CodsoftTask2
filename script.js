// script.js
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function prevSlide() {
    if (currentIndex === 0) {
        currentIndex = slider.children.length - 1;
    } else {
        currentIndex--;
    }
    updateSlider();
}

function nextSlide() {
    if (currentIndex === slider.children.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateSlider();
}

function updateSlider() {
    const translateX = -currentIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

                // Gallery

document.getElementById("filter").addEventListener("change", filterImages);

function filterImages() {
    const category = document.getElementById("filter").value;
    const images = document.querySelectorAll(".image");

    images.forEach(image => {
        if (category === "all" || image.classList.contains(category)) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
}