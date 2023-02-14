const textAreaElement = document.getElementById("textArea")
const totalCharacters = document.getElementById("totalCounter")
textAreaElement.addEventListener("keyup", () =>{
	updateCounter()
})

function updateCounter(){
 totalCharacters.innerText = textAreaElement.value.length
}