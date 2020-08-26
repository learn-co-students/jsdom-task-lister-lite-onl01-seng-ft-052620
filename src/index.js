document.addEventListener("DOMContentLoaded", () => {

  form = document.querySelector("#create-task-form")
  form.addEventListener("submit", function(event){
    event.preventDefault();
    addItem();
  }, false)

});

addItem = function(){
  p = document.createElement('p')
  p.innerText = document.querySelector("#new-task-description").value
  document.querySelector('#tasks').appendChild(p)
}

//it's okay for a start I guess
// will come back for the extra tasks later
// love the pink!
