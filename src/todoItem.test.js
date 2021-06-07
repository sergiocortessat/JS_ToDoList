import todoItem from './todoItem';

const testProjects = [
  {
    name: 'test project',
    todoList: [
      {
        itemTitle: 'Your first todo',
        itemDescription: 'Finish this',
        itemDueDate: new Date(2021, 8, 19),
        itemPriority: 1,
        itemStatus: false,
      },
    ],
  },
];

test('It return the correct object', () => {
  expect(todoItem(testProjects[0].todoList.itemTitle,
    testProjects[0].todoList.itemDescription,
    testProjects[0].todoList.itemDueDate,
    testProjects[0].todoList.itemPriority,
    testProjects[0].todoList.itemStatus)).not.toBe(1);
});