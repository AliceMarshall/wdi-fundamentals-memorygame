console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

// if (cardOne === cardThree || cardTwo === cardFour) {
// 	console.log(alert("You've found a match!"));
// } else {
// 	console.log(alert("Sorry, try again."));
// }

var newBoard = document.getElementById('game-board')

var createCards = function() {
	for (var i=0; i < 4; i++) {
		var newCards = document.createElement('div');
		newCards.className = 'card';
		newBoard.appendChild(newCards);
	}
};
createCards();