// Write your code here!
main.remove(`#main`)

const newHeader = document.createElement("h1")

newHeader.id = "victory"

newHeader.textContent = "Tarleton is the champion"

document.body.append(newHeader)

