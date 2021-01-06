function getRandomValue() {
    let num = Math.ceil(Math.random() * 13)
    let value;
    switch(num) {
        case 1:
            value = "A";
            break;
        case 11:
            value = "J";
            break;
        case 12:
            value = "Q";
            break;
        case 13:
            value = "K";
            break;
        default:
            value = String(num);
    }
    return value
}

function getRandomSuit() {
    const suits = ["hearts", "diamonds", "clubs", "spades"]
    return suits[Math.floor(Math.random() * suits.length)]
}

function getCard() {
    const cardObject = {
        value: getRandomValue(),
        suit: getRandomSuit()
    }
    return cardObject
}

console.log(getCard())