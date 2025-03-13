const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let currentIndex = 0;

function showImage(index) {
    if (index >= 0 && index < images.length) {
        lightboxImg.src = images[index].src;
        currentIndex = index;
        lightbox.classList.remove("hidden");
        lightbox.classList.add("flex");
    }
}

images.forEach((img, index) => {
    img.addEventListener("click", () => showImage(index));
});

closeBtn.addEventListener("click", () => lightbox.classList.add("hidden"));
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.add("hidden");
});

prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
nextBtn.addEventListener("click", () => showImage(currentIndex + 1));