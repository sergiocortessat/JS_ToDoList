import * as dom from './dom';
import createProject from './createProject';

const renderProjects = (projects) => {
  if (projects) {
    const projectItemsList = dom.myQuery('.project-items-list');
    projectItemsList.innerHTML = '';
    projects.forEach((project) => {
      projectItemsList.append(createProject(project));
    });
  }
};

export default renderProjects;