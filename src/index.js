document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form")
    form.addEventListener("submit", function(event){
    let todo = form.elements["new-task-description"].value
    let li = document.createElement("li")
    let ul = document.getElementById("tasks")
    let new_ul = ul.appendChild(li)
    new_ul.innerText = todo
    event.preventDefault();
  })
   const delete_button = document.getElementById("delete-button")
   delete_button.addEventListener("click", function(event){
     let ul = document.getElementById("tasks")
     ul.removeChild(ul.childNodes[ul.childNodes.length-1])
     event.preventDefault();
   })
});
