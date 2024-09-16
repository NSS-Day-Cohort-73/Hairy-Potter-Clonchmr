const potteryToBeSold = []

//if weight is >= 6 add price property with value of 40

//if weight is < 6 add price property with value of 20

//if the piece of pottery is cracked, do not add price property

//if pottery is not cracked add to potteryToBeSold 



const toSellOrNotToSell = (potObj) => {

    if (potObj.weight >= 6 && potObj.cracked === false) {
        potObj.price = 40
        potteryToBeSold.push(potObj)

    } else if (potObj.weight < 6 && potObj.cracked === false) {
        potObj.price = 20
        potteryToBeSold.push(potObj)
    }
    return potObj
}

const usePottery = () => {
    let potteryMenu = potteryToBeSold.slice()
    return potteryMenu;
}

module.exports = {toSellOrNotToSell}