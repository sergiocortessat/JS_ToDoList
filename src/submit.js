import * as dom from './dom';

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
export default submitButton;