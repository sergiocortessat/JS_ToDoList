import * as dom from './dom';

const addTodo = dom.myQuery('.add-todo');
const form = dom.myQuery('#submit-form');
const formEdit = dom.myQuery('#submit-edit-form');

addTodo.addEventListener('click', (e) => {
  if (form.classList.contains('d-none')) {
    e.target.innerHTML = 'Hide Form';
    form.classList.remove('d-none');
    formEdit.classList.add('d-none');
  } else {
    e.target.innerHTML = '<i class="bi bi-plus"></i>';
    form.classList.add('d-none');
    formEdit.classList.add('d-none');
  }
  form.reset();
});
