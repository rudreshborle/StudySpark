
function toggleMenu() {
            var menu = document.getElementById('menu');
            if (menu.style.display === 'block') {
                menu.style.display = 'none';
            } else {
                menu.style.display = 'block';
            }
        }

        let index = 0;

function moveSlide(step) {
    const slides = document.querySelector(".slider");
    const total = slides.children.length;
    index = (index + step + total) % total;
    slides.style.transform = `translateX(${-index * 100}vw)`;
}

// Auto-slide every 3 seconds
setInterval(() => moveSlide(1), 3000);
