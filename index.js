
const heatScore = document.getElementById("heat-score")
const guestScore = document.getElementById("guest-score")
console.log(heatScore)
console.log(guestScore)

let heat = 0
let guest = 0

const addPoints = (team, bucket) => {
    if (team === heat) {
        heat += bucket
    } else {
        guest += bucket
    }
}




addPoints(heat, 3)
addPoints(heat, 3)
addPoints(guest, 3)
addPoints(guest, 3)
addPoints(heat, 3)
addPoints(heat, 3)
addPoints(guest, 3)
addPoints(guest, 3)
addPoints(heat, 2)
addPoints(heat, 2)
addPoints(guest, 1)
addPoints(guest, 1)
console.log(heat)
console.log(guest)

heatScore.textContent = heat
guestScore.textContent = guest