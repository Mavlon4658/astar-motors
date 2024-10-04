const rangeInputs = document.querySelectorAll('input[type="range"]');
if (rangeInputs.length) {
    rangeInputs.forEach(inp => {
        const fnc = () => {
            const percentage = 100*(inp.value-inp.min)/(inp.max-inp.min);
            const bg = `linear-gradient(90deg, #DC2626 ${percentage}%, #E7E5E4 ${percentage+0.1}%)`;
            inp.style.background = bg;
        }

        fnc();

        inp.addEventListener('input', fnc)
    })
}

let media_menu = document.querySelector('.media_menu');
let burger = document.querySelector('.burger');
let body = document.querySelector('.body');
let close = document.querySelector('.close');
let open = document.querySelector('.open');

burger.addEventListener('click', () => {
    media_menu.classList.toggle('hidden');
    body.classList.toggle('overflow-hidden');
    open.classList.toggle('hidden');
    close.classList.toggle('hidden');

})


let swiper = new Swiper(".bankSwiper", {
    spaceBetween: 12,
    slidesPerView: 1.2,
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4,
        },
        1280: {
            slidesPerView: 5,
        },
    },
});
