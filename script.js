let cardFlipped = false
let visibleCards = false
let isMatch = false
let firstCard, secondCard;
let score = 0

const allCards = document.querySelectorAll('.card')
allCards.forEach(card => card.addEventListener('click', flipCard))

shuffleCards()

const resetButton = document.getElementById('reset')
resetButton.addEventListener('click', resetCards)

const shuffleButton = document.getElementById('shuffle')
shuffleButton.addEventListener('click', shuffleCards)

const scoreElement = document.getElementById('points')

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
  isMatch = firstCard.dataset.card === secondCard.dataset.card
  isMatch ? matchCards() : flipOver()
}

function matchCards() {
  firstCard.removeEventListener('click', flipCard)
  secondCard.removeEventListener('click', flipCard)
  setScore()
}

function flipOver() {
  visibleCards = true
  setTimeout(() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    visibleCards = false
    setScore()
  }, 800)
}

function setScore() {
  isMatch ? increase() : decrease()
  scoreElement.innerHTML = score
}

function increase() {
  score += 1
}

function decrease() {
  if(score > 0) {
    score -= 1
  }
}

function resetCards() {
  allCards.forEach(card => card.classList.remove('flip'))
  isMatch = false
  setScore()
}

function shuffleCards() {
  const allCardsCount = allCards.length
  allCards.forEach(card => {
    let randomPositions = Math.floor(Math.random() * allCardsCount)
    card.style.order = randomPositions
  })
}