import todoItem from '../js/todoItem';

const testProjects = [
  {
    name: 'Your first project',
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

// TEST CREATING TODO ITEM OBJECT
describe('Creating', () => {
  test('todoItem constructs a todo item object', () => {
    expect(todoItem('testTitle', 'testDescription', new Date(2021, 8, 19), 5, 'Your first project', true)).not.toBe(null);
  });
  test('todoItem constructs a todo item object', () => {
    expect(todoItem('testTitle', 'testDescription', new Date(2021, 8, 19), 5, 'Your first project', true)).not.toBeInstanceOf(Array);
  });
  test('todoItem constructs a todo item object', () => {
    expect(todoItem('testTitle', 'testDescription', new Date(2021, 8, 19), 5, 'Your first project', true)).toBeInstanceOf(Object);
  });
});

// TEST PUSHING OBJECT TO PROJECT ARRAY
describe('Test pushing an object to the project array: ', () => {
  const newTodoItem = todoItem('testTitle', 'testDescription', new Date(2021, 8, 19), 5, 'Your first project', true);
  testProjects.find(({ name }) => name === newTodoItem.itemProject).todoList.push(newTodoItem);
  test('the new todo item can be pushed into the correct project', () => {
    expect(testProjects[0].todoList[0]).not.toBe(null);
  });
  test('the new todo item can be pushed into the correct project', () => {
    expect(testProjects[0].todoList[0]).not.toBe(newTodoItem);
  });
  test('the new todo item can be pushed into the correct project', () => {
    expect(testProjects[0].todoList[1]).not.toBe(null);
  });
  test('the new todo item can be pushed into the correct project', () => {
    expect(testProjects[0].todoList[1]).toBe(newTodoItem);
  });
});