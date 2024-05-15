// MENU MOBILE
let menuOpener = document.querySelector(".menu-opener");
let nav = document.querySelector("header nav");

menuOpener.addEventListener("click", () => {
    if(nav.classList.contains("opened")) {
        nav.classList.remove("opened");
        menuOpener.querySelector(".close-icon").style.display = "none";
        menuOpener.querySelector(".hamburger-icon").style.display = "flex";
    } else {
        nav.classList.add("opened");
        menuOpener.querySelector(".close-icon").style.display = "flex";
        menuOpener.querySelector(".hamburger-icon").style.display = "none";
    }
});

//TESTIMONIALS
let testimonials = [
    { quote: '"Mais do que nunca, seus pets de estimação são tratados como membros da família."', origin: 'life.png'},
    { quote: '"CatFood é um serviço de entrega direto ao consumidor, preparado na hora com ingredientes que os humanos reconheceriam."', origin: 'multiplay.png'},
    { quote: '"CatFood usa ingredientes ricos em proteína para seu felino."', origin: 'naja.png'},
    { quote: '"Seus pets vão ver você como um verdadeiro herói"', origin: 'fox.svg'}
];

let testimonialsQuote = document.querySelector('.testimonials .quote');
let testimonialsIcons = document.querySelector('.testimonials .icons');

for(let tindex in testimonials) {
    let img = document.createElement('img');
    img.setAttribute('src', './assets/images/' + testimonials[parseInt(tindex)].origin);
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => fillTestimonial(parseInt(tindex)));
    testimonialsIcons.appendChild(img);
}

let currentTestimonial = 0;
let testimonialsTimer;

const fillTestimonial = (index) => {
    clearTimeout(testimonialsTimer);
    currentTestimonial = index;
    testimonialsQuote.innerHTML = testimonials[currentTestimonial].quote;
    let imgs = testimonialsIcons.querySelectorAll('img');
    for(let img of imgs) img.style.opacity = 0.2;
    imgs[currentTestimonial].style.opacity = 1;
    testimonialTimer = setTimeout(nextTestimonial, 3000);
}

const nextTestimonial = () => {
    if(testimonials[currentTestimonial + 1]) {
        fillTestimonial(currentTestimonial + 1);
    } else {
        fillTestimonial(0);
    }
}
nextTestimonial();

//FAQ
let currentFaq = 0;
let faqItems = document.querySelectorAll('.faq .accordion .item');
faqItems.forEach((e, index) => {
    e.querySelector('.title').addEventListener('click', () => setFaq(index));
});

const setFaq = (index) => {
    currentFaq = index;

    if(faqItems[currentFaq].classList.contains('opened')) {
        faqItems[currentFaq].classList.remove('opened');
        return;
    }

    for(let item of faqItems) {
        item.classList.remove('opened');        
    }
    faqItems[currentFaq].classList.add('opened');
}