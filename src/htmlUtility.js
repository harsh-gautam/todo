function createElement(type, classes = [], id = "") {
  const element = document.createElement(type);
  for (let cls of classes) {
    element.classList.add(cls);
  }
  if (id !== undefined || id !== "" || id !== null) {
    element.id = id;
  }
  return element;
}

function createFragment() {
  return document.createDocumentFragment();
}

export default createElement;
