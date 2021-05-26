import './style.css';
import { format } from 'date-fns';
import * as dom from './dom';
// const addTodo = dom.myQuery('.add-todo');
// const form = dom.myQuery('.form');
const newProjectBtn = dom.myQuery('.new-project-btn');
// addTodo.addEventListener('click', (e) => {
//   if (form.classList.contains('d-none')) {
//     e.target.innerHTML = 'Hide Form';
//     form.classList.remove('d-none');
//   } else {
//     e.target.innerHTML = '<i class="bi bi-plus"></i>';
//     form.classList.add('d-none');
//   }
// });
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
const projects = [];
newProjectBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const projectName = dom.myQuery('#new-project').value;
  const project = {
    name: projectName,
    todoList: {
      title: 'first task',
      description: 'stuff to do',
      dueDate: 'some time',
      priority: 'high',
    },
  };
  projects.push(project);
  localStorage.setItem("key", projectName);
  pushToDom();
});
function pushToDom() {
  const ul = dom.myQuery('.project-items-list');
  ul.innerHTML = '';
  projects.forEach((project) => {
    const projectItem = dom.myElement('li');
    projectItem.classList.add('project-item');
    const projectName = dom.myElement('span');
    projectName.textContent = project.name;
    const projectButton = dom.myElement('button');
    projectButton.classList.add('btn', 'btn-danger', 'm-1');
    const projectButtonIcon = dom.myElement('i');
    projectButtonIcon.classList.add('bi', 'bi-folder');
    projectButton.append(projectButtonIcon);
    projectItem.append(projectButton, projectName);
    dom.myAppend('.project-items-list', projectItem);
    projectButton.addEventListener('click', () => {
      const ul = dom.myQuery('.todo-items-list');
      ul.innerHTML = '';
      const todoItem = dom.myElement('li');
      todoItem.classList.add('todo-item');
      const todoName = dom.myElement('span');
      todoName.textContent = project.todoList.title;
      const todoButton = dom.myElement('button');
      todoButton.classList.add('btn', 'btn-danger', 'm-1');
      const todoButtonIcon = dom.myElement('i');
      todoButtonIcon.classList.add('bi', 'bi-folder');
      todoButton.appendChild(todoButtonIcon);
      todoItem.append(todoButton, todoName);
      dom.myAppend('.todo-items-list', todoItem);
      return ul;
    });
  });
}
// const projectItem = (name) => {
//   const projectName = name;
//   return projectName;
// };
// const todoItem = (title, description, dueDate, priority) => {
//   const itemTitle = title;
//   const itemDescription = description;
//   const itemDueDate = dueDate;
//   const itemPriority = priority;
//   return {
//     itemTitle, itemDescription, itemDueDate, itemPriority,
//   };
// };
// projects[0].todoList = {}
// projects[0].todoList.firstEntry = todoItem('first task', 'do stuff', 'sometime', 'high')
// console.log(projects[0])
// project {
//   project {
//     name qwert
//     todolist {
//       todo items
//     }
//   }
// }

const projects1 = [
  {
    name: 'first',
    ul: [1, 2, 3, 4, 5],
  },
  {
    name: 'second',
    ul: [1, 2, 3, 4, 5],
  },
];

projects1.forEach((x) => {
  console.log(x.ul.length);
});


console.log(localStorage.getItem("key"))