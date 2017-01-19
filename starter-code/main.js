console.log("JS file is connected to HTML! Woo!")

// array of cards within the game
var cards = ['queen','king','queen','king'];

// array of cards in play
var cardsInPlay = [];

// variable to find the board
var getBoard = document.getElementById('game-board')


var createBoard = function() {
	for (var i=(cards.length - 1); i>=0; i--) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		getBoard.appendChild(cardElement);
	}
};

// function to check is two cards are in play
function isTwoCards() {
	// add card to array of cards in play
	// 'this' gives you access to the card the user clicked on
	cardsInPlay.push(this.getAttribute('data-card'));

	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="king.png">';
	} else {
		this.innerHTML = '<img src="queen.png">';
	}
	// if two cards in play, check for a match
	if (cardsInPlay.length === 2) {
		// passes the cardsInPlay as an arguement to the isMatch function
		isMatch(cardsInPlay);
		// removes all inner HTML of every card to reset the game
		cardsInPlay = [];
	}
};

// function to test if two cards in play are a match
function isMatch(cards) {
	if (cards[0] === cards[1]) {
	(alert("You've found a match!"));
} else {
	(alert("Sorry, try again."));
}
};

function refreshPage() {
	window.location.reload();
}


createBoard();
