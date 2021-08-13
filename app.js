const input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const todoItems = document.querySelector('.todo-items');
const closes = document.querySelector('.closeBtn');
const template = document.querySelector('.template');
const readyTodoItems = document.querySelector('ready-todo-items');
const readyButton = document.querySelector('ready-button')



addBtn.addEventListener('click', () => {
    createTodoItem();
})
function createTodoItem() { 
    const newTodo = template.cloneNode(true);
    const text = newTodo.getElementsByClassName('text')[0];
    text.innerHTML = input.value;
    newTodo.classList.remove('template');
    todoItems.appendChild(newTodo);
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
    };
    if(e.target.classList.contains('closeBtn')){
        deleteItem(e.target.closest('.todo-item'));
    };
    if (e.target.classList.contains('edit-button')){
        editInput(e.target.closest('.todo-item'));
        return;
    };
    if (e.target.classList.contains('edit')){
        showInput(e.target.closest('.todo-item'));
        return;
    };
    if(e.target.closest('active')){
        onClickActive(e.target.closest('active'));
        return;
    };
    if(e.target.classList.contains('active')){
        onClickActive(e.target);
        return;
    };
    if(e.target.closest('checked')){
        onClickChecked(e.target.closest('checked'));
        return;
    };
    if(e.target.classList.contains('checked')){
        onClickChecked(e.target);
        return;
    };
 });