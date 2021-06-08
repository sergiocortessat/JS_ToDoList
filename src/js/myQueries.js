// QUERY ELEMENT
const myQuery = (element) => {
  const documentElement = document.querySelector(element);
  return documentElement;
};

// CREATE ELEMENT
const myCreate = (type) => {
  const element = document.createElement(type);
  return element;
};

// APPEND TO ELEMENT
const myAppend = (where, element) => {
  const documentElement = document.querySelector(where);
  documentElement.appendChild(element);
};

export { myQuery, myCreate, myAppend };