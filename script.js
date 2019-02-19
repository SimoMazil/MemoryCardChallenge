let cardFlipped, visibleCards = false
let firstCard, secondCard;

const allCards = document.querySelectorAll('.card')
allCards.forEach(card => card.addEventListener('click', flipCard))

function flipCard() {
  if(visibleCards) {
    return;
  }

  this.classList.add('flip')

  if(!cardFlipped) {
    cardFlipped = true
    firstCard = this
    return;
  }

  cardFlipped = false
  secondCard = this
  checkCards()
}

function checkCards() {
  if(firstCard.dataset.card === secondCard.dataset.card) {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
  } else {
    flipOver()
  }
}

function flipOver() {
  visibleCards = true
  setTimeout(() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    visibleCards = false
  }, 800)
}