let cardFlipped, visibleCards = false
let firstCard, secondCard;
let score = 0

const allCards = document.querySelectorAll('.card')
console.log('allCards :', allCards);
allCards.forEach(card => card.addEventListener('click', flipCard))

function flipCard() {
  if(visibleCards) {
    return;
  }
  console.log(this);

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