document.addEventListener("DOMContentLoaded", () => {
  
  const tasks = document.getElementById("tasks")

  document.getElementById("create-task-form").addEventListener("submit", function(e) {

    const input = document.getElementById("new-task-description")

    let task = document.createElement('li')
    task.innerHTML = input.value

    tasks.appendChild(task)

    input.value = ""

    e.preventDefault()
  })

});
