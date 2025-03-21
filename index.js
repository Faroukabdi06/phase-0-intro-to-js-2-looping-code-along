// Code your solutions in this file

// for (let age = 30; age < 40; age++){
//     console.log(`i'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     for(let i = 0; i < gifts.length; i++ ){
//         console.log(`wrapped ${gifts[i]} and added a bow`);
//         debugger;
//     }
//     return gifts;
// }
// wrapGifts(gifts);

const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards){
    let copyOfCards = [];
    for(let x = 0; x < cards.length; x++){
        copyOfCards.push (`Thank you, ${cards[x]}, for the wonderful surprise gift!`);
    }

    return copyOfCards;
}

function countDown(number){
    let f = number;
    while(f >=0){
        console.log(f);
        f--;
        debugger;
    }
}
countDown(6);
