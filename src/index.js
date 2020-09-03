


const tagForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")


tagForm.addEventListener("submit", function(e) {
  e.preventDefault()
// user input
const newTask = document.querySelector("#new-task-description").value

// taskList.innerHTML += `
// <li> ${newTask} 
// <button data-action ="delete"> X for delete </button>
// </li>
// `

const taskItem = document.createElement("li")
taskItem.innerText = newTask
taskList.appendChild(taskItem)

//reset the form
tagForm.reset()

})

// taskList.addEventListener("click", function(e) {
//   console.log(e.target)
// })
