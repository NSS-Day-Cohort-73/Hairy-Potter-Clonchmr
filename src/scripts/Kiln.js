 export const firePottery = (potObj, temp) => {
    let isCracked = false
    
    potObj.fired = true
    
    if (temp > 2200) {
        isCracked = true
    }
    potObj.cracked = isCracked

return potObj
}

