// Imports go first
//import {makePottery} from ("./PotteryWheel.js")
const {firePottery} = require("./Kiln.js")
const {makePottery} = require("./PotteryWheel.js")


// Make 5 pieces of pottery at the wheel
makePottery("Mug", 6, 4)
makePottery("Plater", 8, 2)
makePottery("Vase", 12, 10)
makePottery("Bowl", 5, 4)
makePottery("Mug", 4, 3)



// Fire each piece of pottery in the kiln
firePottery(makePottery("Mug", 6, 4), 2100)
firePottery(makePottery("Plater", 8, 2), 1900)
let test = firePottery(makePottery("Vase", 12, 10), 2300)
firePottery(makePottery("Bowl", 5, 4), 2000)
firePottery(makePottery("Mug", 4, 3), 2500)
console.log(test)


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

