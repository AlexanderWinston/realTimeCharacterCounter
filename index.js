const textAreaElement = document.getElementById("textArea");
const totalCharactersElement = document.getElementById("totalCounter");
const remainingCharactersElement = document.getElementById("remaining");

textAreaElement.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  totalCharactersElement.innerText = textAreaElement.value.length;
  remainingCharactersElement.innerText =
    textAreaElement.getAttribute("maxLength") - textAreaElement.value.length;
}
