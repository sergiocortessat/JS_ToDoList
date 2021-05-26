import './style.css';
import { compareAsc, format } from 'date-fns';

function elementFactory(type) {
  const element = document.createElement(type);
  
  return element;
}
function appendEl(where, element) {
  const documentElement = document.querySelector(where);
  documentElement.appendChild(element);
}

// console.log(format(new Date("1995, 12, 17"), 'eeee-MM-dd-yyyy'));

const projectItemsList = document.querySelector('.project-items-list');

const listItem = elementFactory('li');
listItem.textContent = 'Default';
listItem.classList.add('project-item');
const buttonItems = elementFactory('button');
buttonItems.classList.add('btn');

const iListitems = elementFactory('i');
iListitems.classList.add('bi', 'bi-folder');

buttonItems.appendChild(iListitems);
listItem.appendChild(buttonItems);
projectItemsList.appendChild(listItem)

console.log(projectItemsList.childNodes)
