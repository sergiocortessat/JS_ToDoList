import './style.css';
// import { format } from 'date-fns';
import * as dom from './dom';
import createProject from './createProject';
import createTodoList from './createTodoList';
import './addTodo';
//import submitButton from './submit';

const projects = [];

function pushToDom() {
  const projectItemsList = dom.myQuery('.project-items-list');
  projectItemsList.innerHTML = '';
  projects.forEach((project) => {
    projectItemsList.append(createProject(project));
    const projectButton = dom.myQuery('.project-btn');
    projectButton.addEventListener('click', () => {
      if (project.todoList.length > 0) {
        const ul = dom.myQuery('.todo-items-list');
        // ul.innerHTML = '';
        ul.appendChild(createTodoList(project.todoList));
      }
    });
    const todoItem = (title, description, dueDate, priority, ID) => {
      const itemTitle = title;
      const itemDescription = description;
      const itemDueDate = dueDate;
      const itemPriority = priority;
      const itemID = ID;
      return {
        itemTitle, itemDescription, itemDueDate, itemPriority, itemID,
      };
    };
    function submitButton(project) {
      const submitBtn = dom.myQuery('.submit-btn');
      submitBtn.addEventListener('click', (todoData) => {
        todoData.preventDefault();
        const title = dom.myQuery('#title').value;
        const description = dom.myQuery('#description').value;
        const dueDate = dom.myQuery('#due-date').value;
        const priority = dom.myQuery('#priority').value;

        const newTodoItem = todoItem(title, description, dueDate, priority);
        console.log(project);
      });
    }
    submitButton(project);
  });
}
const addProject = dom.myQuery('.new-project-btn');
addProject.addEventListener('click', (e) => {
  e.preventDefault();
  const projectName = dom.myQuery('#new-project').value;
  const project = {
    name: projectName,
    todoList: [],
    id: 0,
  };
  projects.push(project);
  pushToDom();
});