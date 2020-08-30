document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form")
  
  const taskList = document.querySelector("#tasks") //add user input to dom

  taskForm.addEventListener("submit", function(event) {
    event.preventDefault() //prevents the default of form submission, stops it from going to page that says can't post '/'
    const newTask = document.querySelector("#new-task-description").value

    // const taskItem = document.createElement("li")
    // taskItem.innerText = newTask
    // taskList.appendChild(taskItem) //add task to dom

    taskList.innerHTML += `<li> ${newTask} 
      <button data-action="delete"> x for delete </button>
    </li>`

    taskForm.reset()
  })

  taskList.addEventListener("click", function(event) {
    console.log(event.target)  
// debugger;
    if (event.target.dataset.action === "delete") {
      event.target.parentElement.remove()
    }
  })
});

// grab the form by the id
// listen to see when form is submitted
// add what the user typed in 
//// get access to input field



// - As a user, I should be able to type a task into the input field.
// - As a user, I should be able to click some form of a submit button.
// - As a user, the task string that I provided should appear on the DOM after the submit button has been activated.