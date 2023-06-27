const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

createSlide(images);

let current = 0;
const next = document.querySelector('.next')

next.addEventListener('click', function(){
    const allSlides = document.querySelectorAll('.slides')

    if(current < allSlides.length - 1) {
        allSlides[current].classList.remove('active');
        current++;
        allSlides[current].classList.add('active');
    }

    else {
        allSlides[current].classList.remove('active');
        current = 0;
        allSlides[current].classList.add('active');
    }
})

const previous = document.querySelector('.back')

previous.addEventListener('click', function(){
    const allSlides = document.querySelectorAll('.slides')

    if(current > 0) {
        allSlides[current].classList.remove('active');
        current--;
        allSlides[current].classList.add('active');
    }

    else {
        allSlides[current].classList.remove('active');
        current = 4;
        allSlides[current].classList.add('active');
    }
})







/*********************
    FUNCTIONS
**********************/

function createSlide(array) {
    const slideContainer = document.querySelector('.slides-container')
    for(i = 0; i < array.length; i++) {
        const element = array[i];
        const slide = document.createElement('div');
        const img = document.createElement('img')
        slideContainer.append(slide)
        
        if (i == 0) {
            slide.classList.add('slides');   
            slide.classList.add('active');  
        }
    
        else {
            slide.classList.add('slides');  
        }

        for(let key in element) {
            console.log(key, element[key]);
            slide.append(img)
            img.src = element.image;
        }
    }
} 