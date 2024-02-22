// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   const form = document.getElementById('create-task-form');
//   const taskList = document.getElementById('tasks');
//   form.addEventListener('submit', addTask);

  
//   taskList.addEventListener('click', removeTask);
//   form.reset()
  
  
//   function addTask(e){
//     e.preventDefault();
//     const newTaskDescription = document.getElementById('new-task-description').value;
//     console.log(newTaskDescription);


//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(newTaskDescription));


//     const deleteBtn = document.createElement('button');
//     deleteBtn.appendChild(document.createTextNode('X'));


//     li.appendChild(deleteBtn);
//     taskList.appendChild(li);
//   }

//   function removeTask(e) {
//     if (e.target.nodeName === 'BUTTON') {
//       if(confirm('Are you sure?')) {
//         let li = e.target.parentElement;
//         taskList.removeChild(li);
//       }
//     }

//   }
// f
// });

document.addEventListener("DOMContentLoaded",()=>{
  let form=document.querySelector("form")
  form.addEventListener("submit",(e)=>{
    e.preventDefault()
    addTask(e.target.new_task_description.value)
    form.reset()
  })
})
function addTask(todo){
  let p=document.createElement("p")
  p.textContent=`${todo}`
  let btn=document.createElement("button")
  btn.textContent="x"
  document.querySelector("#list").appendChild(p)
  p.appendChild(btn)
  btn.addEventListener("click",handleDelete)
}
function handleDelete(e){
  e.target.parentNode.remove()
}
