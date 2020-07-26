/*
  Media queries for generating different layouts
*/
const mobile = window.matchMedia(
  '(max-width: 767px)'
);
const tablet = window.matchMedia(
  '(min-width: 768px) and (max-width: 1199px)'
);
const desktop = window.matchMedia(
  '(min-width: 1200px)'
);

/*
  creates an HTML element with classname(s), content and src
*/
const createElement = (elementType, className, content = '', src = '') => {
  let element = elementType === 'img' && !src
    ? document.createElement('div') // If img src is empty then create a div with same class (grey background)
    : document.createElement(elementType);
  let classList = className.split(' ');
  classList.forEach(className => {
    element.classList.add(className);
  });

  if (elementType === 'img' && src) {
    element.setAttribute('src', src);
  } else {
    element.innerText = content;
  }

  return element;
}

/*
  Converts a Date object to it's string representation MM/DD/YYYY
*/
const getDateString = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month > 9 ? '' : '0'}${month}/${day > 9 ? '' : '0'}${day}/${year}`
}