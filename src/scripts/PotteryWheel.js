

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
makePottery("Mug", 6, 4)
makePottery("Plater", 8, 2)
makePottery("Vase", 12, 10)
makePottery("Bowl", 5, 4)
let mug = makePottery("Mug", 4, 3)

console.log(mug)

