const redScuare = document.querySelector("#redSquare")
console.log(redSquare)

redScuare.style.height = "100px"
redScuare.style.width = "100px"
redScuare.style.backgroundColor = "red"

redScuare.classList.add("redSquare")

const greenSquare = document.querySelector("#greenSquare")
console.log(greenSquare)
greenSquare.style.backgroundColor = "green"
greenSquare.classList.add("greenSquare")

const cardContainer = document.querySelector("#cardContainer")
console.log(cardContainer)

const cardHeading = document.createElement("h1")
console.log(cardHeading)
cardHeading.textContent="Hei"

cardContainer.appendChild(cardHeading)