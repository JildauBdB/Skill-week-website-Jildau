/* INFO Bij het includen van files kan je i.p.v "C:\Users\jilda\OneDrive\Bureaublad\Skill week\website.css" beter "./website.css" doen,
Anders werkt het op andere computers niet */

const carouselSlide = document.querySelector('.carousel-slider');
/* INFO we pakken een lijst met de image containers i.p.v "document.querySelector('.carousel-slider')"
voor de rest werkte je code gewoon goed */
const carouselImages = document.getElementsByClassName('imgContainer');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;

const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button list
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length -1) return ;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return ;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

//transition end and loop

carouselSlide.addEventListener('transitionend',  () => {
    console.log(carouselImages[counter]);
    if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

   if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
});


/* Tweede slider album rechts*/

const carouselSlide2 = document.querySelector('.carousel-slider2');
const carouselImages2 = document.getElementsByClassName('imgContainer2');

//buttons
const prevBtn2 = document.querySelector('#prevBtn2');
const nextBtn2 = document.querySelector('#nextBtn2');

//counter
let counter2 = 1;

const size2 = carouselImages2[0].clientWidth;

carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';

//button list
nextBtn2.addEventListener('click', () => {
    if (counter2 >= carouselImages2.length -1) return ;
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    counter2++;
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';

});

prevBtn2.addEventListener('click', () => {
    if (counter2 <= 0) return ;
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    counter2--;
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';

});

//transition end and loop

carouselSlide2.addEventListener('transitionend',  () => {
    console.log(carouselImages2[counter2]);
    if (carouselImages2[counter2].id === 'lastClone2') {
    carouselSlide2.style.transition = "none";
    counter2 = carouselImages2.length - 2;
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
}

   if (carouselImages2[counter2].id === 'firstClone2') {
    carouselSlide2.style.transition = "none";
    counter2 = carouselImages2.length - counter2;
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
}
});

