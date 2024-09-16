// Imports go first
//import {makePottery} from ("./PotteryWheel.js")
const {firePottery} = require("./Kiln.js")
const {makePottery} = require("./PotteryWheel.js")
const {toSellOrNotToSell} = require("./PotteryCatalog.js")


// Make 5 pieces of pottery at the wheel
const potOne = makePottery("Mug", 6, 4)
const potTwo = makePottery("Plater", 8, 2)
const potThree = makePottery("Vase", 12, 10)
const potFour = makePottery("Bowl", 5, 4)
const potFive = makePottery("Mug", 4, 3)



// Fire each piece of pottery in the kiln
const firedOne = firePottery(potOne, 2100)
const firedTwo = firePottery(potTwo, 1900)
const firedThree = firePottery(potThree, 2300)
const firedFour = firePottery(potFour, 2000)
const firedFive = firePottery(potFive, 2500)

// Determine which ones should be sold, and their price

const sellOne = toSellOrNotToSell(firedOne)
const sellTwo = toSellOrNotToSell(firedTwo)
const sellThree = toSellOrNotToSell(firedThree)
const sellFour = toSellOrNotToSell(firedFour)
const sellFive = toSellOrNotToSell(firedFive)

console.log(sellFour)






// Invoke the component function that renders the HTML list

