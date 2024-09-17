

let primaryKey  = 1
 export const makePottery = (shape, weight, height) => {
    let potteryObj = {}

    potteryObj.shape = shape
    potteryObj.weight = weight
    potteryObj.height = height
    potteryObj.id = primaryKey
    primaryKey++
    return potteryObj

}




