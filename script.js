const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let list = document.getElementById('todo-list')
let itemCountSpan = document.getElementById('item-count')
let uncheckedCountSpan = document.getElementById('unchecked-count')

let deleteToDo = function(itemNum) {
  let child = document.getElementById(classNames.TODO_ITEM + itemNum);
  
  itemCountSpan.innerText--;
  
  let checkBox = document.getElementById(classNames.TODO_CHECKBOX + itemNum);
  if (!checkBox.checked) {
    uncheckedCountSpan.innerText--;
  }
  
  child.parentNode.removeChild(child);
   
}

// create function to increment unCheckedCountSpan
let decrementCheckedItems = function(itemNum) {
  let checkBox = document.getElementById(classNames.TODO_CHECKBOX + itemNum);
  
  if (checkBox.checked) {
    uncheckedCountSpan.innerText--;
  } else {
    uncheckedCountSpan.innerText++;
  }  
}

function newTodo() {
  itemCountSpan.innerText++;
  uncheckedCountSpan.innerText++;
  
  let todoItem = document.createElement('div');
  todoItem.setAttribute('id', classNames.TODO_ITEM+itemCountSpan.innerText);
  
  let input = document.createElement('input');
  input.setAttribute('id', classNames.TODO_TEXT+itemCountSpan.innerText); 
  todoItem.appendChild(input);  
  
  let checkBox = document.createElement('input');
  checkBox.setAttribute('id', classNames.TODO_CHECKBOX+itemCountSpan.innerText); 
  checkBox.setAttribute('type', 'checkBox');
  checkBox.setAttribute('onClick', 'decrementCheckedItems(\'' + itemCountSpan.innerText + '\')');
  todoItem.appendChild(checkBox);
  
  let deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.setAttribute('onClick', 'deleteToDo(\'' + itemCountSpan.innerText + '\');');
  deleteBtn.setAttribute('id', classNames.TODO_DELETE+itemCountSpan.innerText);
  todoItem.appendChild(deleteBtn);
  
  list.appendChild(todoItem);
}