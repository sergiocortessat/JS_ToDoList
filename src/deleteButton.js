import * as dom from './dom';
import renderProjects from './renderProjects';

const deleteButton = (projects, projectButton) => {
  const buttonsDiv = dom.myQuery('.buttons');
  const deleteButton = dom.myCreate('button');
  deleteButton.classList.add('btn', 'text-white', 'm-1');
  deleteButton.innerText = 'Delete Project';
  buttonsDiv.appendChild(deleteButton);
  deleteButton.addEventListener('click', () => {
    const proj = (projects.find(({ name }) => name === projectButton.nextElementSibling.innerText));
    projects = projects.filter((project) => project !== proj);
    localStorage.setItem('projects', JSON.stringify(projects));
    renderProjects();
    window.location.reload();
  });
};

export default deleteButton;