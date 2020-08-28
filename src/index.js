document.addEventListener("DOMContentLoaded", () => {

  const submit = document.getElementsByTagName('input')[1]
  const output = document.getElementsByTagName('ul')[0]

  submit.addEventListener('click', function(event) {
    event.preventDefault();
    let text = document.getElementById('new-task-description').value
    let li = document.createElement('li')
    li.innerHTML = text
    debugger;
    alert ('I was clicked!');
    output.appendChild(li);
   });
 
});
