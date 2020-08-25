document.addEventListener("DOMContentLoaded", () => {
let tasks = document.getElementById("tasks")


let submitForm = document.getElementById('create-task-form')

submitForm.addEventListener("click", function(event) {
  let content = document.getElementById("new-task-description")
  let text = content.value
    if (text !== ""){
      let tasks = document.getElementById("tasks")
      let listItem = document.createElement("li")
      let listText = document.createTextNode(`${text}`)
      // let button = document.createElement("button")
      // button.innerText = `Delete`
      // button.className = `delete-button`
      listItem.appendChild(listText)
      // listItem.appendChild(button)
      tasks.appendChild(listItem)
      content.value = ""
    }


  event.preventDefault();
  
}, false);

// let deleteButtons = document.getElementsByClassName("delete-button")

// deleteButtons.addEventListener("click", function(event) {
//   event.parentNode.parentNode.deleteChild();
// });





  
});
