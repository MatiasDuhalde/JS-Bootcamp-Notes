function shuffle(arr) {
    // Fischer-Yates algorithm
    for (let i = arr.length - 1; i > 0; --i) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

const deckObj = {
    deck: [],
    drawnCards: [],
    suits: ["hearts", "spades", "diamonds", "clubs"],
    values: ["A", "2", "3", "4", "5", "6", "7", "8",
             "9", "10", "J", "Q", "K"],
    initDeck() {
        for (let suit of this.suits) {
            for (let value of this.values){
                let card = {
                    suit,
                    value
                }
                this.deck.push(card)
            }
        }
        shuffle(this.deck)
    },
    drawCard() {
        const card = this.deck.pop()
        this.drawnCards.push(card)
        return card
    }
}

console.log(deckObj.deck)
deckObj.initDeck()
console.log(deckObj.deck)
console.log(deckObj.drawCard())
console.log(deckObj.drawCard())
console.log(deckObj.drawCard())
console.log(deckObj.drawCard())