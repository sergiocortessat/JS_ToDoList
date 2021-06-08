import * as dom from './myQueries';

const createProject = (project) => {
  const projectItem = dom.myCreate('li');
  projectItem.dataset.projectId = project.id;
  projectItem.classList.add('project-item');

  const projectName = dom.myCreate('span');
  projectName.textContent = project.name;

  const projectButton = dom.myCreate('button');
  projectButton.classList.add('project-btn', 'btn', 'm-2');

  const projectButtonIcon = dom.myCreate('i');
  projectButtonIcon.classList.add('bi', 'text-white', 'bi-folder');

  projectButton.append(projectButtonIcon);
  projectItem.append(projectButton, projectName);

  return projectItem;
};

export default createProject;