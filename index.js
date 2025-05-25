
const heatScore = document.getElementById("heat-score")
const guestScore = document.getElementById("guest-score")
console.log(heatScore)
console.log(guestScore)

let heatCount = 0
let guestCount = 0

const addPoints = (bucket) => {
    heatCount += bucket
}


addPoints(3)
console.log(heatCount)

heatScore.textContent = heatCount