import {usePottery} from "./PotteryCatalog.js"



export const potteryList = () => {
  let potList = usePottery()

    let potteryHTML = " "

    for (const pot of potList) {
    potteryHTML += `<section class="pottery" id="pottery-${pot.id}">
     <h2 class="pottery_shape">${pot.shape}</h2>
     <div class="pottery_properties">
       Item weighs ${pot.weight} grams and is ${pot.weight} cm in height
     </div>
     <div class="pottery_price">Price is $${pot.price}</div>
   </section>`
    }
    return potteryHTML

}
