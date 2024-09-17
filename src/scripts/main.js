// Imports go first
import {makePottery} from "./PotteryWheel.js"
import {firePottery} from "./Kiln.js"
import {toSellOrNotToSell} from "./PotteryCatalog.js"
import {potteryList} from "./PotteryList.js"


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


// Invoke the component function that renders the HTML list

const potList = potteryList()
const listOfPottery = document.querySelector(".potteryList")

listOfPottery.innerHTML = potList

