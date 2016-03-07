//Card
function Card(name, rarity, st1, st2, st3, st4, st5) {
	this.name = name;
	this.rarity = rarity;
	this.status1 = st1;
	this.status2 = st2;
	this.status3 = st3;
	this.status4 = st4;
	this.status5 = st5;
	//Print()
	this.print = function print() {
		console.log("Card  - - - - - - - - - - -");
		console.log("name: " + this.name);
		console.log("rarity: " + this.rarity);
		console.log("status1:" + this.status1);
		console.log("status2:" + this.status2);
		console.log("status3:" + this.status3);
		console.log("status4:" + this.status4);
		console.log("status5:" + this.status5);
	}
}

//Card List
var cardList = [];
cardList[0]= {name:"Pupa",		rarity:"D", status1: 10, status2: 20, status3: 30, status4: 5, status5: 5};
cardList[1]= {name:"Granfo",	rarity:"D", status1: 20, status2: 10, status3: 30, status4: 5, status5: 5};
cardList[2]= {name:"Patrulla",	rarity:"D", status1: 30, status2: 20, status3: 10, status4: 5, status5: 5};
cardList[3]= {name:"Pogo",		rarity:"D", status1: 5, status2: 30, status3: 20, status4: 10, status5: 5};
cardList[4]= {name:"Xoranta",	rarity:"D", status1: 5, status2: 5, status3: 30, status4: 20, status5: 10};
cardList[5]= {name:"Cofcof",	rarity:"D", status1: 5, status2: 30, status3: 5, status4: 10, status5: 20};
cardList[6]= {name:"Tapitu",	rarity:"D", status1: 30, status2: 5, status3: 10, status4: 20, status5: 5};
cardList[7]= {name:"Jairo",		rarity:"D", status1: 5, status2: 10, status3: 20, status4: 30, status5: 5};
cardList[8]= {name:"Ekki",		rarity:"D", status1: 10, status2: 20, status3: 5, status4: 5, status5: 30};
cardList[9]= {name:"Sapo",		rarity:"D", status1: 20, status2: 10, status3: 5, status4: 30, status5: 5};
cardList[10]= {name:"Urigo",	rarity:"D", status1: 5, status2: 20, status3: 10, status4: 5, status5: 30};
cardList[11]= {name:"Sabire",	rarity:"D", status1: 5, status2: 30, status3: 20, status4: 10, status5: 5};
cardList[12]= {name:"Pigirosso",rarity:"C", status1: 10, status2: 30, status3: 20, status4: 10, status5: 10};
cardList[12]= {name:"Flora",	rarity:"C", status1: 20, status2: 30, status3: 20, status4: 3, status5: 7};
cardList[13]= {name:"Birubiro",	rarity:"C", status1: 12, status2: 35, status3: 15, status4: 11, status5: 7};
cardList[14]= {name:"Creco",	rarity:"C", status1: 12, status2: 7, status3: 20, status4: 11, status5: 30};
cardList[15]= {name:"Laroi",	rarity:"C", status1: 40, status2: 10, status3: 10, status4: 10, status5: 10};
cardList[16]= {name:"Guma",		rarity:"C", status1: 10, status2: 15, status3: 15, status4: 10, status5: 30};

//Get Random Card from CardList
var getRandomCard = function() {
	//Generate random number
	var index = Math.floor(Math.random() * cardList.length);
	//Create the card
	var theCard = new Card(cardList[index].name,	cardList[index].rarity,
								cardList[index].status1, cardList[index].status2,
								cardList[index].status3, cardList[index].status4,
								cardList[index].status5);
	return theCard;
};

//Deck
function Deck(name) {
	this.name = name;
	this.size = 0;
	this.cards = [];
	//add();
	this.add = function add(newCard) {
		this.cards.push(newCard);
		this.size +=1;
	}
	//drawCard
	this.drawCard = function drawCard() {
		var lastPos = (this.cards.length)-1;
		var theCard = this.cards[lastPos];
		this.cards.pop();
		this.size -=1;
		return theCard;
	}
	//shuffle
	this.shuffle = function shuffle() {
		var length = this.cards.length;
		for(var i=0; i<length; i++) {
			var index = Math.floor(Math.random() * length);
			var temp = this.cards[i];
			this.cards[i] = this.cards[index];
			this.cards[index] = temp;
		}
	}
	//Print
	this.print = function print() {
		console.log("Deck  - - - - - - - - - - -");
		console.log("name: " + this.name);
		console.log("size: " + this.size);
		var length = this.cards.length;
		for(var i=0; i<length; i++) {
			console.log(i+":" +this.cards[i].name);
		}
	}
}