// QUERY ELEMENT
function myQuery(element) {
  const documentElement = document.querySelector(element);
  return documentElement;
}

// CREATE ELEMENT
function myCreate(type) {
  const element = document.createElement(type);
  return element;
}

// APPEND TO ELEMENT
function myAppend(where, element) {
  const documentElement = document.querySelector(where);
  documentElement.appendChild(element);
}

export { myQuery, myCreate, myAppend };