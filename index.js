const scoreBtns = document.querySelectorAll("button")
console.log(scoreBtns)
const scores = []

scoreBtns.forEach((button) => {
    button.addEventListener("click", function() {
        const team = button.dataset.team
        const score = parseInt(button.dataset.score)
        // const scoreDiv = document.getElementById(`${team}-score`)
        // const span = scoreDiv.querySelector("span")
        const teamScore = document.getElementById(`${team}-score`)

        let intScore = parseInt(teamScore.textContent)
        intScore += score
        teamScore.textContent = intScore

        localStorage.setItem("scores", scoreDiv.span.textContent)

        console.log(team)
        console.log(score)
        console.log(span)

    })
})

