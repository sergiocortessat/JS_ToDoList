import populate from 'populate.js';
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

  const editButton = dom.myCreate('button');
  editButton.classList.add('btn', 'edit-btn', 'text-white', 'm-1');

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

  editButton.addEventListener('click', () => {
    const formElement = dom.myQuery('#submit-edit-form');
    const formSubmit = dom.myQuery('#submit-form');

    if (formElement.classList.contains('d-none')) {
      formElement.classList.remove('d-none');
      formSubmit.classList.add('d-none');
    } else {
      formElement.classList.add('d-none');
    }
    const data = {todoList
      'edit-title': todoList.itemTitle,
      'edit-description': todoList.itemDescription,
      'edit-read': todoList.itemDueDate,
      'edit-priority': todoList.itemPriority,
    };

    populate(formElement, data);
  });

  const editSubmitBtn = dom.myQuery('.submit-btn-edit');

  editSubmitBtn.addEventListener('click', (todoData) => {
    todoData.preventDefault();
    const title = dom.myQuery('#edit-title').value;
    const description = dom.myQuery('#edit-description').value;
    const dueDate = dom.myQuery('#edit-due-date').value;
    const priority = dom.myQuery('#edit-priority').value;

    todoList.itemTitle = title;
    todoList.itemDescription = description;
    todoList.itemDueDate = dueDate;
    todoList.itemPriority = priority;
    localStorage.setItem('projects', JSON.stringify(projects));
    window.location.reload();
  });

  return todoItem;
};

export default createTodoList;