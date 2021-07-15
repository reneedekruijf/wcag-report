const removeClasses = Array.from(document.querySelector('main').getElementsByTagName('*'));
const lis = document.querySelectorAll('ol li');
const main = document.querySelector('main');

removeClasses.forEach(item => {
  item.hasAttribute('class') ? item.removeAttribute('class') : null;
});

document.querySelectorAll('ul')[0].setAttribute('class', 'list');

lis.forEach(li => {
  let firstSpan = li.children[0].innerHTML;
  let secondSpan = li.children[1].innerHTML;
  const html = `<span>${firstSpan}</span> - <a href="${secondSpan}">${secondSpan}</a>`;
  li.innerHTML = '';
  li.innerHTML = html;
});

const printButton = `<button class="printButton">print rapport</button>`;
const pdfButton = `<button class="pdfButton">opslaan als pdf</button>`;
main.insertAdjacentHTML('beforeend', printButton);
main.insertAdjacentHTML('beforeend', pdfButton);