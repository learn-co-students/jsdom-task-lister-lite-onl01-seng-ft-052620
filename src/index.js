const form = () => document.querySelector("#create-task-form")
const input = () => document.querySelector('input#new-task-description')
const taskList = () => document.querySelector('ul#tasks')
const submitButton = () => document.querySelector('input[type=submit]')

const tasks = []
let editedTask = null

document.addEventListener("DOMContentLoaded", () => {
  form().addEventListener("submit", logSubmit)
  
});


function logSubmit(event) {
  event.preventDefault();
  if (submitButton().value == "Create New Task" ) {
    createTodo();
  } else {
    editTodo();
  }
  resetInput()
}


function createTodo() {
  task = {content: input().value}
  tasks.push(task)
  displayTasks();
}

function editTodo() {
  editedTask.content = input().value
  displayTasks();
  submitButton().value = "Create New Task"
}

function displayTasks() {
  clearTaskList();
  tasks.forEach(task => displayTask(task))
}

function displayTask(task) {
  const li = document.createElement('li');
  li.innerText = task.content

  const button = document.createElement('button');
  button.innerText = "delete"

  const editButton = document.createElement('button');
  editButton.innerText = 'edit'

  button.addEventListener('click', deleteTask )
  editButton.addEventListener('click', editTask)

  li.appendChild(editButton);
  li.appendChild(button);

  taskList().appendChild(li)
}

function deleteTask() {
  content = this.parentNode.childNodes[0].textContent
  this.parentNode.remove()
  i = tasks.findIndex(task => task.content === content )
  tasks.splice(i, 1)
}

function editTask() {
  content = this.parentNode.childNodes[0].textContent
  input().value = content
  editedTask = tasks.find(task => task.content === content)
  submitButton().value = "Edit Task"
}

function resetInput() {
  input().value = ""
}

function clearTaskList() {
  taskList().innerHTML = ""
}