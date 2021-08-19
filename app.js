const input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const todoItems = document.querySelector('.todo-items');
const closes = document.querySelector('.closeBtn');
const template = document.querySelector('.template');
const readyTodoItems = document.querySelector('.ready-todo-items');
let localTodo = [];
let readyLocalTodo = [];
addBtn.addEventListener('click', () => {
    createTodoItem();
    
});

function addToActiveTodos(textTodo) {
    localTodo.push(textTodo);
};

function addToBackActiveTodos(textTodo) {
    localTodo.push(textTodo);
    readyLocalTodo.shift(textTodo);
};

function addToReadyTodos(textTodo) {
    readyLocalTodo.push(textTodo);
    localTodo.shift(textTodo);
};

function createTodoItem() { 
    const newTodo = template.cloneNode(true);
    const text = newTodo.getElementsByClassName('text')[0];
    text.innerHTML = input.value;
    newTodo.classList.remove('template');
    todoItems.appendChild(newTodo);
    addToActiveTodos(input.value);
    
    input.value = '';
};

function deleteItem (todoItem) {
    if (!todoItem) {
        return;
    }
    todoItem.remove();
};

function onReadyClickTodo(todoItem) {
    const readyTodoItem = todoItem.cloneNode(true);
    const text = todoItem.getElementsByClassName('text')[0];

    readyTodoItem.classList.add('todo-item-ready');
    addToReadyTodos(text.textContent);
    readyTodoItems.appendChild(readyTodoItem);
    deleteItem(todoItem);
};

function onReadyBackClickTodo(todoItem) {
    const backTodoItem = todoItem.cloneNode(true);
    const text = todoItem.getElementsByClassName('text')[0];

    backTodoItem.classList.remove('todo-item-ready');
    todoItems.appendChild(backTodoItem);
    addToBackActiveTodos(text.textContent);
    deleteItem(todoItem);
};

function showInput(todoItem) {
    const editForm = todoItem.getElementsByClassName('edit-form')[0];
    const readyButton = todoItem.getElementsByClassName('ready-button')[0];

    readyButton.classList.add('hide');
    editForm.classList.remove('hide');
};

function editInput(todoItem) {
    const editInput = todoItem.getElementsByClassName('edit-input')[0];
    const newValue = editInput.value;

    todoItem.getElementsByClassName('text')[0].innerHTML = newValue;
    const editForm = todoItem.getElementsByClassName('edit-form')[0];
    const readyButton = todoItem.getElementsByClassName('ready-button')[0];
    readyButton.classList.remove('hide');
    editForm.classList.add('hide');
};
document.addEventListener('click',function(e){
    if (!e.target) {
        return;
    }
    if(e.target.classList.contains('closeBtn')){
        deleteItem(e.target.closest('.todo-item'));
        
        return;
    }
    if(e.target.classList.contains('back-button')){
        onReadyBackClickTodo(e.target.closest('.todo-item'));
        
        return;
    }
    if(e.target.classList.contains('ready-button')){
        onReadyClickTodo(e.target.closest('.todo-item'));
        
        return;
    }
    if (e.target.classList.contains('edit-button')){
        editInput(e.target.closest('.todo-item'));
        
        return;
    }
    if (e.target.classList.contains('edit')){
        showInput(e.target.closest('.todo-item'));
        
        return;
    }
 });
