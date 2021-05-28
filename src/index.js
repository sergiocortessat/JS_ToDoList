import './style.css';
// import { format } from 'date-fns';
import * as dom from './dom';
import createProject from './createProject';
import createTodoList from './createTodoList';
import './addTodo';

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
      },
    ],
  },
];

// SAVE TO STORAGE
function saveProjects() {
  localStorage.setItem('projects', JSON.stringify(projects));
}

// GET FROM STORAGE
function getProjects() {
  const storage = JSON.parse(localStorage.getItem('projects'));
  if (storage) {
    projects = [];
    projects = projects.concat(storage);
  }
}

// ADD PROJECTS TO SUBMIT DROPDOWN
function addProjectsToDropdown() {
  if (projects) {
    const select = document.getElementById('projects');
    select.innerHTML = '';
    projects.forEach((project) => {
      select.add(new Option(project.name));
    });
  }
}

// RENDER PROJECTS AND TODO lISTS
function renderProjects() {
  if (projects) {
    const projectItemsList = dom.myQuery('.project-items-list');
    projectItemsList.innerHTML = '';
    projects.forEach((project) => {
      projectItemsList.append(createProject(project));
    });
  }
}

// FIND BUTTONS
function findProjectButtons() {
  const projectButtons = document.querySelectorAll('.project-btn');
  projectButtons.forEach((projectButton, index) => {
    projectButton.addEventListener('click', () => {
      const todoItemsList = dom.myQuery('.todo-items-list');
      todoItemsList.innerHTML = '';
      projects[index].todoList.forEach((todoList) => {
        todoItemsList.append(createTodoList(todoList));
      });
    });
  });
}

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
  renderProjects();
  findProjectButtons();

  saveProjects();
});

const todoItem = (title, description, dueDate, priority, project) => {
  const itemTitle = title;
  const itemDescription = description;
  const itemDueDate = dueDate;
  const itemPriority = priority;
  const itemProject = project;

  return {
    itemTitle, itemDescription, itemDueDate, itemPriority, itemProject,
  };
};

function submitButton() {
  const submitBtn = dom.myQuery('.submit-btn');

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
    ui.appendChild(createTodoList(newTodoItem));
    saveProjects();
  });
}

// RUN FUNCTIONS
getProjects();
addProjectsToDropdown();
renderProjects();
findProjectButtons();
submitButton();
