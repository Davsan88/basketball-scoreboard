const scoreBtns = document.querySelectorAll("button")
const resetBtn = document.getElementById("reset-btn")
// console.log(resetBtn)

let heatScore = document.getElementById("heat-score")
let guestScore = document.getElementById("guest-score")
let scores = []

let scoreFromLocalStorage = JSON.parse(localStorage.getItem("scores"))

if (scoreFromLocalStorage) {
    scores = scoreFromLocalStorage
    heatScore.textContent = scores[0]
    guestScore.textContent = scores[1]
}

scoreBtns.forEach((button) => {
    button.addEventListener("click", function () {

        const team = button.dataset.team
        const score = parseInt(button.dataset.score)
        const teamScore = document.getElementById(`${team}-score`)

        let intScore = parseInt(teamScore.textContent)
        intScore += score
        teamScore.textContent = intScore

        scores = [heatScore.textContent, guestScore.textContent]

        localStorage.setItem("scores", JSON.stringify(scores))
    })
})

resetBtn.addEventListener("click", function() {
    localStorage.clear()

    heatScore.textContent = "0"
    guestScore.textContent = "0"

})



