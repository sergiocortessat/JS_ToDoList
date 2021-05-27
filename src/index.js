import './style.css';
// import { format } from 'date-fns';
import * as dom from './dom';
import createProject from './createProject';
import createTodoList from './createTodoList';
import './addTodo';

const projects = [];
function pushToDom() {
  const projectItemsList = dom.myQuery('.project-items-list');
  projectItemsList.innerHTML = '';
  projects.forEach((project) => {
    projectItemsList.append(createProject(project));
    const projectButton = dom.myQuery('.project-btn');
    projectButton.addEventListener('click', () => {
      const ul = dom.myQuery('.todo-items-list');
      ul.innerHTML = '';
      ul.appendChild(createTodoList(project.todoList));
      const submitButton = dom.myQuery('.submit-btn');
      submitButton.addEventListener('click', (todoData) => {
        todoData.preventDefault();
        const title = dom.myQuery('#title').value;
        const description = dom.myQuery('#description').value;
        const dueDate = dom.myQuery('#due-date').value;
        const priority = dom.myQuery('#priority').value;
        const newTodoItem = todoItem(title, description, dueDate, priority);
        project.todoList = newTodoItem;
        console.log(projects);
      });
    });
  });
}
const addProject = dom.myQuery('.new-project-btn');
addProject.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);
  const projectName = dom.myQuery('#new-project').value;
  const project = {
    name: projectName,
  };
  projects.push(project);
  pushToDom();
});
const todoItem = (title, description, dueDate, priority) => {
  const itemTitle = title;
  const itemDescription = description;
  const itemDueDate = dueDate;
  const itemPriority = priority;
  return {
    itemTitle, itemDescription, itemDueDate, itemPriority,
  };
};

const array = [
  {
    name: 'project1',
    todoList: [],
    id: new Date(),
  },
  {
    name: 'project2',
    todoList: [],
    id: new Date(),
  },
];

const x = {
  name: 'project4',
  todoList: [],
  id: new Date(),
};

array.push(x);

array.forEach((item) => {
  console.log(item.name);
});