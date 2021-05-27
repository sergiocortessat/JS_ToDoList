import * as dom from './dom';
function createTodoList(todoList) {
  const todoItem = dom.myCreate('li');
  todoItem.classList.add('todo-item');
  const todoName = dom.myCreate('span');
  todoName.textContent = todoList.title;
  const todoButton = dom.myCreate('button');
  todoButton.classList.add('btn', 'btn-danger', 'm-1');
  const todoButtonIcon = dom.myCreate('i');
  todoButtonIcon.classList.add('bi', 'bi-folder');
  todoButton.appendChild(todoButtonIcon);
  todoItem.append(todoButton, todoName);
  return todoItem;
}
export default createTodoList;