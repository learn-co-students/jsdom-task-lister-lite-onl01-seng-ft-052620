document.addEventListener("DOMContentLoaded", () => {
  let tasks = document.getElementById("tasks")
  let submitForm = document.getElementById('create-task-form')
  
  let taskContent = document.getElementById("new-task-description")
  submitForm.addEventListener("click", function(e) {
    let text = taskContent.value
      if (text !== ""){
        let listTask = document.createElement("li")
        let listText = document.createTextNode(`${text}`)
        listTask.appendChild(listText)
        tasks.appendChild(listTask)
        taskContent.value = ""
      }
    e.preventDefault();
  }, false);
});

// document.addEventListener("DOMContentLoaded", () => {
//   // initialize taskList class
//   const taskList = new TaskList();
//   //grab all the necessary DOM elements

//   //form and relevant input fields
//   const newTaskForm = document.getElementById("create-task-form");
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTaskPriority = document.getElementById("new-task-priority");

//   //ul where new tasks will live on the DOM
//   const taskUl = document.getElementById("tasks");

//   const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());
//   //attach event listeners

//   newTaskForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     taskList.createNewTask(newTaskDescription.value);
//     // reset form
//     e.target.reset();
//     renderApp();
//   });

//   taskUl.addEventListener("click", (e) => {
//     if (e.target.nodeName === "BUTTON") {
//       taskList.deleteTask(e.target.dataset.description);
//       renderApp();
//     }
//   });
// });
