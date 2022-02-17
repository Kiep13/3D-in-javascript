const SLIDE_CLASS = 'scene__'
const SLIDES = [
  {
    className: `${SLIDE_CLASS}1`,
    display: 'flex'
  },
  {
    className: `${SLIDE_CLASS}2`,
    display: 'block'
  },
  {
    className: `${SLIDE_CLASS}3`,
    display: 'block'
  },
  {
    className: `${SLIDE_CLASS}4`,
    display: 'block'
  },
  {
    className: `${SLIDE_CLASS}5`,
    display: 'block'
  },
  {
    className: `${SLIDE_CLASS}6`,
    display: 'block'
  },
  {
    className: `${SLIDE_CLASS}7`,
    display: 'block'
  },
  {
    className: `${SLIDE_CLASS}8`,
    display: 'block'
  },
  {
    className: `${SLIDE_CLASS}9`,
    display: 'block'
  },
  {
    className: `${SLIDE_CLASS}10`,
    display: 'block'
  },
  {
    className: `${SLIDE_CLASS}11`,
    display: 'block'
  },
  {
    className: `${SLIDE_CLASS}12`,
    display: 'block'
  },
  {
    className: `${SLIDE_CLASS}13`,
    display: 'block'
  },
  {
    className: `${SLIDE_CLASS}14`,
    display: 'block'
  },
  {
    className: `${SLIDE_CLASS}15`,
    display: 'block'
  },
  {
    className: `${SLIDE_CLASS}16`,
    display: 'flex'
  }
]

let currentSlideNumber = 0;

function changeCurrentSlide(event) {
  let nextSlideNumber;

  if(event.deltaY > 0) {
    if(currentSlideNumber === SLIDES.length - 1) return;

    nextSlideNumber = currentSlideNumber + 1;
  } else {
    if(currentSlideNumber === 0) return;

    nextSlideNumber = currentSlideNumber - 1;
  }

  const currentSlide = document.getElementsByClassName(SLIDES[currentSlideNumber].className)[0];
  const nextSlide = document.getElementsByClassName(SLIDES[nextSlideNumber].className)[0];

  currentSlide.style.display = 'none';
  nextSlide.style.display = SLIDES[nextSlideNumber].display;

  currentSlideNumber = nextSlideNumber;
}

window.addEventListener('wheel', changeCurrentSlide);
