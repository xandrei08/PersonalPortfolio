// getDomElement
const select = {
  domElement: (element) => {
    return document.querySelector(element);
  },
};
//Add element class
function addClass(domElement, newClass) {
  return domElement.classList.add(newClass);
}

// Call out parmeter set time out

function callSetTimeOut(parameter, time) {
  setTimeout(() => {
    return parameter;
  }, time);
}
