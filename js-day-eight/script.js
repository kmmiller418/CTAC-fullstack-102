const header = document.querySelector('header');
console.log(header);

const sections = document.getElementsByTagName('section');
console.log(sections);

const currentSection = document.querySelector('section.current');
console.log(currentSection);

const sectionAfterCurrent = currentSection.nextElementSibling;
console.log(sectionAfterCurrent);

const h2BeforeCurrent = currentSection.previousElementSibling.childNodes[1];
console.log(h2BeforeCurrent);

const divOfParentOfHighlight = document.querySelector('h2.highlight').parentElement.parentElement;
console.log(divOfParentOfHighlight);

const sectionsWithH2s = Array.from(document.querySelectorAll('h2')).map((el)=>el.parentElement); 
console.log(sectionsWithH2s);