//This library needs cards.js

//Player
function Player(name) {
	this.name = name;
	this.level = 0;
	this.cardList = [];
	this.deck = new Deck("Generic Player Deck");
	//Print
	this.print = function print() {
		console.log("Player  - - - - - - - - - -");
		console.log("name: " + this.name);
		console.log("level: " + this.level);
		console.log("# of cards: " + this.cardList.length);
	}
}