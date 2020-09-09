document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //form and input fields
   const newTaskForm = document.getElementById("create-task-form");

   const taskDescription = () => document.getElementById('new-task-description');
    
   const newTaskUl = document.getElementById("tasks");
 
    newTaskForm.addEventListener("submit", createNewTask);
 });
 
 const createNewTask = event => {
   event.preventDefault();
   // keeps the page from reloading and erasing the content.
   const taskDescription = document.getElementById('new-task-description');
   const newTask = document.createElement('li');
   newTask.innerText = taskDescription.value;
 
   appendNewTask(newTask);
   event.target.reset();
 };
 
 const appendNewTask = task => {
   document.getElementById('tasks').appendChild(task);
 };
