window.addEventListener('load',showTasks);
let addBtn = document.querySelector('button');
let taskList =document.querySelector('ul');
let input = document.querySelector('input');
let tasks;

if(!localStorage.getItem('todo')){
    tasks =[];
}else{
    tasks = getTasks();
}

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
    saveTasks(text);
})

taskList.addEventListener('click', (e)=>{
    if(e.target.nodeName === 'I'){
       let target = e.target.parentElement.parentElement;
       target.style = 'display : none';
        tasks.splice(tasks.indexOf(target.textContent),1);
        localStorage.setItem('todo', tasks);
    }
    if(e.target.nodeName === 'LI'){
        e.target.classList.toggle('done');
    }
})

function saveTasks(text){
    tasks.push(text)
    localStorage.setItem('todo', tasks);
}

function getTasks(){
    return localStorage.getItem('todo').split(',');
}

function showTasks(){
    for (let taskText of getTasks()) {
        let task = createTask(taskText);
        task.innerHTML += '<span class="closebtn"><i class="fa-solid fa-trash-can"></i></span>';
        taskList.appendChild(task);
    }
}
