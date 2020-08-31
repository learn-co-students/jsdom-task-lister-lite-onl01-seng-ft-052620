const form = () => document.querySelector('form');
const input = () => document.querySelector('input#new-task-description');
const select = () => document.querySelector('select');
const taskList = () => document.querySelector('ul#tasks')

const highPriority = []
const mediumPriority = []
const lowPriority = []

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  form().addEventListener('submit', createTodo)

});

function createTodo(e) {
  e.preventDefault();

  const title = input().value
  const priority = select().value 

  const li = document.createElement('li');
  li.innerText = title;

  const button = document.createElement('button');
  button.innerText = "X"

  button.addEventListener('click', deleteTask)

  li.appendChild(button);

  if (priority === "high") {
    li.classList.add('red')
    highPriority.push(li);
  } else if (priority === "medium") {
    li.classList.add('yellow')
    mediumPriority.push(li);
  } else {
    li.classList.add('green')
    lowPriority.push(li);
  }

  displayTasks();
  
  resetInput();
}

function deleteTask(){
  this.parentNode.remove()
}

function clearTaskLists() {
  taskList().innerHTML = ""
}

function displayTasks() {
  clearTaskLists();

  displayPriority(highPriority)
  displayPriority(mediumPriority)
  displayPriority(lowPriority)
}

function displayPriority(array) {
 array.forEach(li => taskList().appendChild(li))
}

function resetInput(){
  input().value = ""
}

/*
  WHAT IS THE CAUSE AND EFFECT?

  WHAT TYPE OF EVENT IS THE CAUSE?

  WHEN SHOULD WE BE ABLE TO CAUSE THIS TO HAPPEN?

*/