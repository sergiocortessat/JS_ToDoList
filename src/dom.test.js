const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><body><div class = "test"></div></body>');

// QUERY ELEMENT
const myQuery = (element) => {
  const documentElement = dom.window.document.querySelector(element);
  return documentElement;
};

// CREATE ELEMENT
const myCreate = (type) => {
  const element = dom.window.document.createElement(type);
  return element;
};

// APPEND TO ELEMENT
const myAppend = (where, element) => {
  const documentElement = dom.window.document.querySelector(where);
  documentElement.appendChild(element);
};

export { myQuery, myCreate, myAppend };

test('It should be able to find the elements in DOM', () => {
  // const test = myCreate('div');
  const pTag = myQuery('p');
  const divTag = myQuery('div');
  const divClassTag = myQuery('.test');
  console.log(divTag.innerHTML);
  expect(pTag).toBe(null);
  expect(divTag).toBe(<div class="test" />);
  // expect(divClassTag.classList).toBe('<div class="test" />');
});
