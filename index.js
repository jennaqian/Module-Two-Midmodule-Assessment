function rollDice() {
    let diceInput = document.getElementById("dice-input")
    let input = diceInput.value

    let possibleOutcomes = ["&#9856 = ⚀", "&#9857 = ⚁", "&#9858 = ⚂", "&#9859 = ⚃", "&#9860 = ⚄", "&#9861 = ⚅"]
    let sum = 0

    for(let i = 1; i <= input; i++) {
        let results = (Math.round(Math.random * 6))
        sum = sum + results
    }
  
    let uList = document.querySelector("dice-history")
    let liHistory = document.createElement('li')
    ul.appendChild(liHistory)
}

