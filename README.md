# Super-Trunfo-js

###Description:
Card Game Like Top Trumps write in HTML5 + Javascript using the Canvas and OOP

##Start Date:
1/3/2016

###Last Update:
3/3/2016

###Status:
In Progress

###Features:
- Card: can now create a card object with properties

 ```
 var myCard = new Card("cardName", "cardRarity","cardStatus1", ... , "cardStatus5")
 ```
 
- cardList: our card "database"

```
cardList[n]= {name:"cardName",	rarity:"cardRarity", status1: x, status2: y, status3: z, status4: w, status5: t};
```

- getRandomCard: generates a random card from the cardList

```
var randomCard = getRandomCard();
```

- Deck: can now create your deck with name, size, push cards into your deck and draw cards from your deck

```
var myDeck = new Deck("deckName");
myDeck.add(randomCard);
myDeck.drawCard();
```

###Development:
Im a little confused on how to draw in canvas the card. I already can draw a generic card with no information and position setting its x and y position in canvas but Im not sure if I should implement a GameObject that handle the position stuff alone or if I should incorporate the position and draw stuff inside the Card class.

