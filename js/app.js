
/*------------------------- Constants -------------------------*/
let images = ['brook', 'dusk', 'fog', 'mountain', 'road', 'shore', 'tree', 'waterfall']

const getData = () => [
  {imgSrc: './images/brook.jpg', name: 'brook'},
  {imgSrc: './images/dusk.jpg', name: 'dusk'},
  {imgSrc: './images/fog.jpg', name: 'fog'},
  {imgSrc: './images/mountain.jpg', name: 'mountain'},
  {imgSrc: './images/road.jpg', name: 'road'},
  {imgSrc: './images/shore.jpg', name: 'shore'},
  {imgSrc: './images/tree.jpg', name: 'tree'},
  {imgSrc: './images/waterfall.jpg', name: 'waterfall'}
]


/*--------------------- Variables (state) ---------------------*/
let cardsInPlay
let firstCard, secondCard
let winner
let cardTotal



/*----------------- Cached Element References -----------------*/
let cardEls = document.querySelectorAll('cards')

let messageEl = document.getElementById('message')


/*---------------------- Event Listeners ----------------------*/
cardEls.forEach(function(cardEl) {
  cardEl.addEventListener('click', handleClick)
})

// document.querySelectorAll('card').addEventListener('click', () => console.log('clicked'))


/*------------------------- Functions -------------------------*/
init ()

function init() {
  const cardImageList = [...images, ...images]
  // console.log(cardImageList)
  const cardTotal = cardImageList.length
  winner = false
  stopChoices = false
  hasFlippedCard = false
  render()
}

function handleClick(evt) {
  let cardsInPlay = document.getElementById('.card')
  cardsInPlay.addEventListener('click', function () {
    cardsInPlay.classList.toggle('is-flipped')
  })
}

function updateCards() {}

function updateMessage() {}

function render() {
  updateCards()
  updateMessage()
}

  
for (let i = 0; i < cardTotal; i++) {
  let randomIndex = Math.floor(Math.random() * cardImageList.length)
  let image = cardImageList[randomIndex]
  }
  








// ---------------------PSEUDO CODE----------------------
// Define the required variables used to track the state of the game:
	// A variable named Cards (to represent the state of the cards on the board)
	// A variable named Winner to represent when the game has been won (all matches have been found)
	// An array for the cardsInPlay

  // Store cached element references:
  // cardEls to store the 16 elements representing the cards
// messageEl to store the element displaying the game’s status message 

// Upon loading, the game state should be initialized
// Create an ‘init’ function to be called when app loads
// Set ‘cards’ variable to an array showing 16 cards (8 pairs) in their “upside down” state 
// Set ‘winner’ to ‘false’

// Call function named ‘render’ at the end of the init function
// The state of the game should be rendered to the user
// Including: render, updateCards, updateMessage (will include values displaying ‘winner’, ‘match’, ‘not a match’ messages 

// Define the required constants (Fischer Yates shuffle)
// Define the locations of matching pairs of cards on the board? Or randomize with each reset: Utilize a shuffling method (Fisher Yates)
// Handle a player clicking a card with a `handleClick` function
// Set a ‘click’ function that will flip a card when selected.  If a matching set is revealed, the player may click a 3rd and 4th card, and so on, until a mismatch is revealed, which will turn only those mismatch cards back over
// Create reset functionality
	// Add a reset button to the HTML that responds to the ‘click’ event and will call the ‘init’ function, so game can be reset without reloading browser
// Using HTML and CSS, add pictures/images and styling to the cards (<div>),  top and bottom and easily reflect matching pairs when flipped  
// Add animation feature so when a card is selected, the process of “flipping” is animated
//  Add sound effects to play when a match is “found”
