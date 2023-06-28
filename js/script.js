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
createMiniSlide(images);

let current = 0;

const next = document.querySelector('.next')

next.addEventListener('click', function(){
    const allSlides = document.querySelectorAll('.slides')
    const allMiniSlides = document.querySelectorAll('.mini-slides')

    allMiniSlides[current].classList.remove('bright');
    allSlides[current].classList.remove('active');
    if(current < allSlides.length - 1) {
        current++;
    }

    else {
        current = 0;
    }
    allSlides[current].classList.add('active');
    allMiniSlides[current].classList.add('bright');
})


const previous = document.querySelector('.back')

previous.addEventListener('click', function(){
    const allSlides = document.querySelectorAll('.slides')
    const allMiniSlides = document.querySelectorAll('.mini-slides')

    allMiniSlides[current].classList.remove('bright');
    allSlides[current].classList.remove('active');
    if(current > 0) {
        current--;
    }

    else {
        current = 4;
    }
    allSlides[current].classList.add('active');
    allMiniSlides[current].classList.add('bright');
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
        const title = document.createElement('h2')
        const text = document.createElement('p')
        slideContainer.append(slide)

        slide.append(title)
        title.append(element.title)
        title.classList.add('title-style')

        slide.append(text)
        text.append(element.text)
        text.classList.add('title-text')
        
        
        if (i == 0) {
            slide.classList.add('slides');   
            slide.classList.add('active');  
        }
    
        else {
            slide.classList.add('slides');  
        }

        for(let key in element) {
            slide.append(img)
            img.src = element.image;
        }
    }
} 


function createMiniSlide(array) {
    const miniSlideContainer = document.querySelector('.mini-slides-container') 
    for(j = 0; j < array.length; j++) {
        const element = array[j];
        const miniSlide = document.createElement('div');
        const miniImg = document.createElement('img')
        miniSlideContainer.append(miniSlide)

        if (j == 0) {
            miniSlide.classList.add('mini-slides');   
            miniSlide.classList.add('bright');  
        }
    
        else {
            miniSlide.classList.add('mini-slides');  
        }

        for(let key in element) {
            miniSlide.append(miniImg)
            miniImg.src = element.image;
        }
    }
    
}