import * as dom from './dom';

const addTodo = dom.myQuery('.add-todo');
const form = dom.myQuery('.form');
addTodo.addEventListener('click', (e) => {
  if (form.classList.contains('d-none')) {
    e.target.innerHTML = 'Hide Form';
    form.classList.remove('d-none');
  } else {
    e.target.innerHTML = '<i class="bi bi-plus"></i>';
    form.classList.add('d-none');
  }
});