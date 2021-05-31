import * as dom from './dom';
import renderProjects from './renderProjects';

const editButton = (projects, projectButton) => {
  const buttonsDiv = dom.myQuery('.buttons');
  const clearButton = dom.myCreate('button');
  clearButton.classList.add('btn', 'text-white', 'm-1');
  clearButton.innerText = 'Clear Completed Tasks';
  buttonsDiv.appendChild(clearButton);
  clearButton.addEventListener('click', () => {
    const proj = (projects.find(({ name }) => name === projectButton.nextElementSibling.innerText));
    const notCompleted = proj.todoList.filter((notCompleted) => notCompleted.itemStatus === false);
    proj.todoList = notCompleted;
    localStorage.setItem('projects', JSON.stringify(projects));
    renderProjects();
    window.location.reload();
  });
};

export default editButton;