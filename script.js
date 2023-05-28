const cardContainer = document.querySelector('.card-container');
const cardsWrapper = document.querySelector('.cards-wrapper');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

let cardIndex = 0;
let cardWidth;

function setCardWidth() {
  const windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    cardWidth = cardsWrapper.offsetWidth;
  } else {
    cardWidth = cardsWrapper.offsetWidth / 4.5;
  }
}

function updateCardOpacity() {
  const cards = document.querySelectorAll('.card-each');
  cards.forEach((card, index) => {
    card.classList.remove('opacity');

    if (index === cardIndex || index === cardIndex + 4) {
      card.classList.add('opacity');
    }
  });

  if (window.innerWidth < 768) {
    cardsWrapper.style.transform = `translateX(-${cardIndex * 50}%)`;
  } else {
    cardsWrapper.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
  }
}

setCardWidth();
updateCardOpacity();

window.addEventListener('resize', () => {
  setCardWidth();
  updateCardOpacity();
});

arrowLeft.addEventListener('click', () => {
  cardIndex = Math.max(cardIndex - 1, 0);
  updateCardOpacity();
});

arrowRight.addEventListener('click', () => {
  const numCards = cardsWrapper.children.length;
  cardIndex = Math.min(cardIndex + 1, numCards - 4.5);
  updateCardOpacity();
});

