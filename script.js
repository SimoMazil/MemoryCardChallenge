const allCards = document.querySelectorAll('.card')

allCards.forEach((card) => {
  return card.addEventListener('click', flipCard)
})

let cardFlipped, visibleCards = false
let firstCard, secondCard;
let score = 0

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
    // firstCard.removeEventListner('click', flipCard)
    // secondCard.removeEventListner('click', flipCard)
    score = score + 1
    setScore()
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
    score = score - 1
    setScore()
  }, 800)
}

function setScore() {
  document.getElementById("score").innerHTML = score;
}