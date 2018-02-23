console.log("Up and running");
// Create an array to store all card objects
var cards = [
{	
	rank:  "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
  }
];

// Create an array to store the cards in play
var cardsInPlay = []; 

// Create a function to check for a match
var checkForMatch = function () {
// Check to see if two cards match and provide feedback to user
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

// Create a function to represent a user flipping a card
var flipCard = function () {
	
		// Get the data-id of the card that was just flipped and cache it
	cardId = this.getAttribute("data-id");
	
	// Display the card's image
	this.setAttribute("src", cards[cardId].cardImage);

	// Display the card the user just flipped	
	console.log("User flipped " + cards[cardId].rank);
		// Display the image path in the console
	console.log(cards[cardId].cardImage);

	// Display the suit in the console
	console.log(cards[cardId].suit);

	// Add card to array of cards that are in play
	cardsInPlay.push(cards[cardId].rank);

		// Check to see if two cards have been played
	if (cardsInPlay.length === 2) {
	// If so, call the checkForMatch function
	checkForMatch();

 };
 }

 var createBoard = function () {

 	// Loop through your cards array to create card elements for your board
 	for (var i = 0; i < cards.length; i ++) {

	// Create an img element which will be used as a card
	var cardElement = document.createElement("img");

	// set the src attribute to display the back of card image
	cardElement.setAttribute("src", "images/back.png");

	// set the cards data-id attribute to be the index of the current element
		// data - attributes are meant to store data about an element that is not tied to style
		cardElement.setAttribute("data-id", i);

		// add an event listener so that when a card is clicked,
	// the function flipCard will be executed
	cardElement.addEventListener("click", flipCard);

	// Append the card to the board
	document.getElementById("game-board").appendChild(cardElement);
  }

}


// Call the createBoard function
createBoard();




