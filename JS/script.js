/*
UNIDADE 1
- Criação de variáveis com let e const (ok)
- Criação do arrey que irá simular um banco de dados para armazenar as tarefas (ok)
- Criação de objetos literais estáticos para simular registros de banco de dados (ok)
- Inclusão desses registros no array (ok)
- Criação e utilização de funções (ok)

UNIDADE 2
- Manipulação através de listeners (ok)
- Manipulação de enventos no botão, concluir e excluir tarefa(ok)
- Manipulação de enventos no combo filtro de tarefas
*/

//seleção do DOM
const todoInput = document.querySelector('.todo-input')

const todoButton = document.querySelector('.todo-button')

const todoList = document.querySelector('.todo-list')

const filteroption = document.querySelector('.filter-todo')

//escutar eventos

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deletedAndCheck )
filteroption.addEventListener('click', filterTodo)


let elementsArray =  [
    {
        taskName: 'Estudar Algoritimo',
        status: 'Pendente'
    },
    {
        taskName: 'Estudar JavaScript',
        status: 'Pendente'
    },
    {
        taskName: 'Entregar desafio JavaScript',
        status: 'Pendente'
    }
]


//funções

function addTodo(event) {
    event.preventDefault()
    let taskName = document.getElementById('inputText').value
        if(taskName >=0){
            validaInputs()
            return false;
        }
    elementsArray.push({taskName, status: 'pendente'})
    console.log({elementsArray})
    addElementToList()
    //bancotodos(todoInput).value
    
    // const todoDiv = document.createElement('div')
    // todoDiv.classList.add('todo')

    const todoLi = document.createElement('li')
    todoLi.classList.add('todo-list')
    todoLi.innerText = todoInput.value
    todoInput.value = ''
}

//manipulação da class todo-list no DOM 
function addElementToList() {
    let taskList = document.querySelector('#ulList')
    taskList.innerHTML = ``
    elementsArray.map((task, key) => taskList.innerHTML += 
    `
        <div class="todo">
            <li class="todo-item">${task.taskName}</li>
            <button class="check-btn" id="check-btn-${key}"><i class="fas fa-check" aria-hidden="true"></i></button>
            <button class="trash-btn" id="trash-btn-${key}"><i class="fas fa-trash" aria-hidden="true"></i></button>
        </div>
    `
    )
    document.querySelector('#inputText').value = ""
}

const validaInputs = () => {
    let taskName = document.getElementById('inputText').value
    if (taskName === '') {
        alert('preencha o campo')
    }
    
}

//fução do botão deletar e checar 

function deletedAndCheck (e) {
    

    const item = e.target 
    const todo = item.parentElement
        
    if(item.classList[0] === 'trash-btn'){
            todo.remove()
        }
       
        if(item.classList[0] === 'check-btn'){
            todo.classList.toggle('completed')
        }      
}

//função filtro

function filterTodo(event) {
    const todos = todoList.childNodes; //pegando os filhos da li 
    todos.forEach((todo) => {
        switch(event.target.value){
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if(!todo.classList.contains('uncompleted')){
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            
        }
    })
} 

//função local storage 
// function bancotodos(elementsArray){
    
//     if(localStorage.getItem('elementsArray') === null){
//         elementsArray = []
//     } else{
//         elementsArray = JSON.perse(localStorage.getItem('elementsArray'))
//     }
//     elementsArray.push(elementsArray)
//     localStorage.setItem('elementsArray', JSON.stringify(elementsArray))
// }


