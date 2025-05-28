const scoreBtns = document.querySelectorAll("button")
console.log(scoreBtns)
const scores = []

scoreBtns.forEach((button) => {
    button.addEventListener("click", function() {
        const team = button.dataset.team
        const score = parseInt(button.dataset.score)
        const scoreDiv = document.getElementById(`${team}-score`)
        const span = scoreDiv.querySelector("span")

        let teamScore = parseInt(span.textContent)
        teamScore += score
        span.textContent = teamScore

        localStorage.setItem("scores", scoreDiv.span.textContent)

        console.log(team)
        console.log(score)
        console.log(span)

    })
})

