import './style.css';
import { format } from 'date-fns';
import * as dom from './dom';
// // PROJECT HTML
// const projectItem = dom.myElement('li');
// projectItem.classList.add('project-item');
// const projectName = dom.myElement('span');
// projectName.textContent = 'Buy more food';
// const projectButton = dom.myElement('button');
// projectButton.classList.add('btn', 'btn-danger', 'm-1');
// const projectButtonIcon = dom.myElement('i');
// projectButtonIcon.classList.add('bi', 'bi-folder');
// projectButton.append(projectButtonIcon);
// projectItem.append(projectButton, projectName);
// dom.myAppend('.project-items-list', projectItem);
// // TODO HTML
// const todoItem = dom.myElement('li');
// todoItem.classList.add('todo-item');
// const todoName = dom.myElement('span');
// todoName.textContent = 'Buy more food';
// const todoButton = dom.myElement('button');
// todoButton.classList.add('btn', 'btn-danger', 'm-1');
// const todoButtonIcon = dom.myElement('i');
// todoButtonIcon.classList.add('bi', 'bi-folder');
// todoButton.appendChild(todoButtonIcon);
// todoItem.append(todoButton, todoName);
// dom.myAppend('.todo-items-list', todoItem);
// let projects = {
//   project1 = {
//     title: 'dsfsdf',
//     description: 'sdfsdf',
//     dueDate: '',
//     priority: 5
//   }
// }
const addTodo = dom.myQuery('.add-todo');
const form = dom.myQuery('.form');
addTodo.addEventListener('click', (e) => {
  if (form.classList.contains('d-none')) {
    e.target.innerHTML = 'Hide Form';
    form.classList.remove('d-none');
  } else {
    e.target.innerHTML = '<i class="bi bi-plus"></i>';
    form.classList.add('d-none');
  }
});

const projects = {};
const todoItem = (title, description, dueDate, priority) => {
  const itemTitle = title;
  const itemDescription = description;
  const itemDueDate = dueDate;
  const itemPriority = priority;
  return {
    itemTitle, itemDescription, itemDueDate, itemPriority,
  };
};

const formData = document.querySelector('.submit-btn');
formData.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(formData);
});

const item = todoItem('hello', 'hello', 'heelo', 'heldf');
localStorage.setItem('key', JSON.stringify(item));
console.log(JSON.parse(localStorage.getItem('key')).itemTitle);
