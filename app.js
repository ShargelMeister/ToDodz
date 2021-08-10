const input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const main = document.querySelector('.todo-main');
const todoItems = document.querySelector('.todo-items');
const closes = document.querySelector('.closeBtn');
const todoItem = document.querySelector('.todo-item');
const template = document.querySelector('.template');;


addBtn.addEventListener('click', () => {
    createTodoItem();
})
function createTodoItem() { 
    const List = template.cloneNode(true);
    const deleteButton = closes.cloneNode(true);
    todoItem.textContent = input.value
    todoItems.append(List);
    todoItem.appendChild(deleteButton);
    todoItem.classList.remove('template');
    input.value = '';
}
function deleteItem (closeBtn) {
    const item = closeBtn.closest('.todo-item');
    if (!item) {
        return
    }
    item.remove();
}
document.addEventListener('click',function(e){
    if(e.target && e.target.classList.contains('closeBtn')){
        deleteItem(e.target);
     }
 });
function checkedClasses (active) {
    const item = active.classList.add('checked');
    if (!item) {
        return
    }
    item.remove();
}
document.addEventListener('click',function(e){
    if(e.target && e.target.classList.contains('active')){
        checkedClasses(e.target);
     }
 });