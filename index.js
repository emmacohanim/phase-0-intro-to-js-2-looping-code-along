// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`)
//     debugger
// }
// const gifts = ["teddy bear", "drone", "doll"]

// function wrapGifts(gifts) {
//     for (let i= 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`) 
//     }
//     return gifts
// }
// wrapGifts(gifts)

function writeCards(name, event) {
    const newArray = []
    for( let i = 0; i < name.length; i++) {
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return newArray
}
function countDown() {
    let countdown = 10
    while (countdown >= 0) {
        console.log(countdown--)
    }
    
}