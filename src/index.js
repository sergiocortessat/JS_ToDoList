import './style.css';
// import { format } from 'date-fns';
import * as dom from './dom';
import createTodoList from './createTodoList';
import './addTodo';
import deleteButton from './deleteButton';
import clearButton from './clearButton';
import renderProjects from './renderProjects';
import todoItem from './todoItem';

// CREATE FIRST PROJECTS

let projects = [
  {
    name: 'Your first project',
    todoList: [
      {
        itemTitle: 'Your first todo',
        itemDescription: 'Finish this',
        itemDueDate: new Date(2021, 8, 19),
        itemPriority: 1,
        itemStatus: false,
      },
    ],
  },
];
// GET FROM STORAGE
const getProjects = () => {
  const storage = JSON.parse(localStorage.getItem('projects'));
  if (storage) {
    projects = [];
    projects = projects.concat(storage);
  }
};
// ADD PROJECTS TO SUBMIT DROPDOWN
const addProjectsToDropdown = () => {
  if (projects) {
    const select = document.getElementById('projects');
    select.innerHTML = '';
    projects.forEach((project) => {
      select.add(new Option(project.name));
    });
  }
};
// FIND BUTTONS
const findProjectButtons = () => {
  const projectButtons = document.querySelectorAll('.project-btn');
  projectButtons.forEach((projectButton, index) => {
    projectButton.addEventListener('click', () => {
      const todoItemsList = dom.myQuery('.todo-items-list');
      todoItemsList.innerHTML = '';
      projects[index].todoList.forEach((todoList) => {
        todoItemsList.append(createTodoList(projects, todoList));
      });
      const buttonsDiv = dom.myQuery('.buttons');
      buttonsDiv.innerHTML = '';
      clearButton(projects, projectButton);
      deleteButton(projects, projectButton);
    });
  });
};
// ADD PROJECT
const addProject = dom.myQuery('.new-project-btn');
addProject.addEventListener('click', (e) => {
  e.preventDefault();
  const projectName = dom.myQuery('#new-project').value;
  if (projectName) {
    const project = {
      name: projectName,
      todoList: [],
      id: new Date(),
    };
    projects.push(project);
  }
  addProjectsToDropdown();
  renderProjects(projects);
  findProjectButtons();
  localStorage.setItem('projects', JSON.stringify(projects));
});

const submitButton = () => {
  const submitBtn = dom.myQuery('.submit-btn-new');
  submitBtn.addEventListener('click', (todoData) => {
    todoData.preventDefault();
    const title = dom.myQuery('#title').value;
    const description = dom.myQuery('#description').value;
    const dueDate = dom.myQuery('#due-date').value;
    const priority = dom.myQuery('#priority').value;
    const project = dom.myQuery('#projects').value;
    const newTodoItem = todoItem(title, description, dueDate, priority, project);
    projects.find(({ name }) => name === newTodoItem.itemProject).todoList.push(newTodoItem);
    const ui = dom.myQuery('.todo-items-list');
    ui.appendChild(createTodoList(projects, newTodoItem));
    localStorage.setItem('projects', JSON.stringify(projects));
  });
};
// RUN FUNCTIONS
getProjects();
addProjectsToDropdown();
renderProjects(projects);
findProjectButtons();
submitButton();