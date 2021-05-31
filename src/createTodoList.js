import * as dom from './dom';

const createTodoList = (projects, todoList) => {
  const todoItem = dom.myCreate('li');
  todoItem.classList.add('todo-item');

  const todoName = dom.myCreate('span');
  todoName.textContent = todoList.itemTitle;

  const todoButton = dom.myCreate('button');
  todoButton.classList.add('todo-list-btn', 'btn', 'btn-danger', 'm-2');

  const todoButtonIcon = dom.myCreate('i');
  if (todoList.itemStatus === false) {
    todoButtonIcon.classList.add('bi', 'bi-circle');
  } else {
    todoButtonIcon.classList.add('bi', 'bi-check');
    todoName.classList.add('text-decoration-line-through');
  }

  const editButton = document.createElement('button');
  editButton.classList.add('btn', 'edit-btn');

  const editButtonIcon = dom.myCreate('i');
  editButtonIcon.classList.add('bi', 'bi-pencil-square');

  editButton.appendChild(editButtonIcon);
  todoButton.appendChild(todoButtonIcon);
  todoItem.append(todoButton, editButton, todoName);

  todoButton.addEventListener('click', () => {
    if (todoList.itemStatus === false) {
      todoList.itemStatus = true;
      todoButtonIcon.classList.remove('bi', 'bi-circle');
      todoButtonIcon.classList.add('bi', 'bi-check');
      todoName.classList.add('text-decoration-line-through');
    } else {
      todoList.itemStatus = false;
      todoButtonIcon.classList.remove('bi', 'bi-check');
      todoButtonIcon.classList.add('bi', 'bi-circle');
      todoName.classList.remove('text-decoration-line-through');
    }

    localStorage.setItem('projects', JSON.stringify(projects));
  });

  editButton.addEventListener('click', (e) => {
    console.log(todoList.itemTitle = "pizza");
  });

  return todoItem;
};

export default createTodoList;