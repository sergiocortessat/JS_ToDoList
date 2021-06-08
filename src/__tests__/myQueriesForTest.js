const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><body><div class = "test"><p>test</p></div></body>');

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