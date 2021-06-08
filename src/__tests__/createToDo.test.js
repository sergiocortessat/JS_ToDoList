/**
 * @jest-environment jsdom
 */

import createProject from '../js/createProject';

const projects = [
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
  {
    name: 'Your second project',
    todoList: [
      {
        itemTitle: 'Your second todo',
        itemDescription: 'Finish this',
        itemDueDate: new Date(2021, 8, 19),
        itemPriority: 1,
        itemStatus: false,
      },
    ],
  },
];

test('return the li element for the project', () => {
  expect(createProject(projects[0])).not.toBe(null);
});

test('return the li element for the project', () => {
  expect(createProject(projects[0]).textContent).toBe('Your first project');
});

test('return the li element for the project', () => {
  expect(createProject(projects[1])).not.toBe(null);
});

test('return the li element for the project', () => {
  expect(createProject(projects[1]).textContent).toBe('Your second project');
});