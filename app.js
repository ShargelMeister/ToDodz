const input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const todoItems = document.querySelector('.todo-items');
const closes = document.querySelector('.closeBtn');
const template = document.querySelector('.template');
const readyTodoItems = document.querySelector('.ready-todo-items');

addBtn.addEventListener('click', () => {
    createTodoItem();
    todoLocal();
})
function createTodoItem() { 
    const newTodo = template.cloneNode(true);
    const text = newTodo.getElementsByClassName('text')[0];
    text.innerHTML = input.value;
    newTodo.classList.remove('template');
    todoItems.appendChild(newTodo);
};
function todoLocal(todoLocals) {
    todoLocals = todoItems.innerHTML;
    localStorage.setItem('todo',todoLocals);
};
function deleteItem (todoItem) {
    if (!todoItem) {
        return;
    }
    todoItem.remove();
};
function onClickActive(todoItem) {
    todoItem.classList.toggle('active');
    todoItem.classList.toggle('checked');
};
function onClickChecked(todoItem) {
    todoItem.classList.toggle('checked');
    todoItem.classList.toggle('active');
};
function onReadyClickTodo(todoItem) {
    const readyTodoItem = todoItem.cloneNode(true);
    readyTodoItem.classList.add('todo-item-ready');
    readyTodoItems.appendChild(readyTodoItem);
    deleteItem(todoItem);
};
function onReadyBackClickTodo(todoItem) {
    const backTodoItem = todoItem.cloneNode(true);
    backTodoItem.classList.remove('todo-item-ready');
    todoItems.appendChild(backTodoItem);
    deleteItem(todoItem);
};
function showInput(todoItem) {
    const editForm = todoItem.getElementsByClassName('edit-form')[0];
    editForm.classList.remove('hide');
};
function editInput(todoItem) {
    const editInput = todoItem.getElementsByClassName('edit-input')[0];
    const newValue = editInput.value;

    todoItem.getElementsByClassName('text')[0].innerHTML = newValue;
    const editForm = todoItem.getElementsByClassName('edit-form')[0];
    editForm.classList.add('hide');
};

document.addEventListener('click',function(e){
    if (!e.target) {
        return;
    }
    if(e.target.classList.contains('closeBtn')){
        deleteItem(e.target.closest('.todo-item'));
        todoLocal();
        return;
    }
    if(e.target.classList.contains('back-button')){
        onReadyBackClickTodo(e.target.closest('.todo-item'));
        todoLocal();
        return;
    }
    if(e.target.classList.contains('ready-button')){
        onReadyClickTodo(e.target.closest('.todo-item'));
        todoLocal();
        return;
    }
    if (e.target.classList.contains('edit-button')){
        editInput(e.target.closest('.todo-item'));
        todoLocal();
        return;
    }
    if (e.target.classList.contains('edit')){
        showInput(e.target.closest('.todo-item'));
        todoLocal();
        return;
    }
    if(e.target.closest('active')){
        onClickActive(e.target.closest('active'));
        return;
    }
    if(e.target.classList.contains('active')){
        onClickActive(e.target);
        return;
    }
    if(e.target.closest('checked')){
        onClickChecked(e.target.closest('checked'));
        return;
    }
    if(e.target.classList.contains('checked')){
        onClickChecked(e.target);
        return;
    }
 });
