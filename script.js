let cardFlipped = false
let visibleCards = false
let firstCard, secondCard;

const allCards = document.querySelectorAll('.card')
allCards.forEach(card => card.addEventListener('click', flipCard))

function flipCard() {
  if(visibleCards) return;
  
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
  const isMatch = firstCard.dataset.card === secondCard.dataset.card
  isMatch ? matchCards() : flipOver()
}

function matchCards() {
  firstCard.removeEventListener('click', flipCard)
  secondCard.removeEventListener('click', flipCard)
}

function flipOver() {
  visibleCards = true
  setTimeout(() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    visibleCards = false
  }, 800)
}

const resetButton = document.getElementById('reset')
resetButton.addEventListener('click', resetCards)

function resetCards() {
  allCards.forEach(card => card.classList.remove('flip'))
}