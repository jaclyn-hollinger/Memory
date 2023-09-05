
/*------------------------- Constants -------------------------*/



/*--------------------- Variables (state) ---------------------*/
let cards = []
let firstCard, secondCard
let stopChoices = false



/*----------------- Cached Element References -----------------*/
let cardEls = document.querySelectorAll('cards')


/*---------------------- Event Listeners ----------------------*/
cardEls.forEach(function(cardEl) {
  cardEl.addEventListener('click')
  console.log('clicked')
})

// document.querySelectorAll('card').addEventListener('click', () => console.log('clicked'))


/*------------------------- Functions -------------------------*/
init ()

function init() {
  cards = []
  winner = false
}