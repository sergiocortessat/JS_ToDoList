const todoItem = (title, description, dueDate, priority, project, status = false) => {
  const itemTitle = title;
  const itemDescription = description;
  const itemDueDate = dueDate;
  const itemPriority = priority;
  const itemProject = project;
  const itemStatus = status;
  return {
    itemTitle, itemDescription, itemDueDate, itemPriority, itemProject, itemStatus,
  };
};
export default todoItem;