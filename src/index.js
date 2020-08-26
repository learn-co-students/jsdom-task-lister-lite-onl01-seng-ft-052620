document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("DOMContentLoaded", () => {
  // your code here
const form = document.querySelector("#create-task-form")
const list = document.getElementById("tasks")





const getText = event => {
  event.preventDefault()
const input = document.getElementById("new-task-description").value



  list.innerHTML += `
  <li>${input} <button>X</button>
  </li>`

    
}

form.addEventListener("submit", getText)











});
