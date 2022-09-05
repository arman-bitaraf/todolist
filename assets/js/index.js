let addBtn = document.querySelector('button');
let taskList =document.querySelector('ul');
let input = document.querySelector('input');

function createTask(text){
    let li = document.createElement('li');
    li.textContent= text;
    return li
}
addBtn.addEventListener('click', ()=>{
    let text = input.value;
    let task = createTask(text);
    task.innerHTML += '<span class="closebtn"><i class="fa-solid fa-trash-can"></i></span>';
    taskList.appendChild(task);
    input.value='';
})