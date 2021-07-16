const onlyContent = document.querySelector('main main').innerHTML;

document.querySelector('main').innerHTML = onlyContent;

const removeClasses = Array.from(document.querySelector('main').getElementsByTagName('*'));
const lis = document.querySelectorAll('ol li');
const main = document.querySelector('main');
const buttons = document.querySelectorAll('button');
const thirdColumns = document.querySelectorAll('table tr td:nth-child(4)');
const thirdColumnsHeaders = document.querySelectorAll('table tr th:nth-child(4)');
const h1 = document.querySelector('h1').innerText;
const title = document.querySelector('title');
const titleText = document.querySelector('title').innerText;

thirdColumnsHeaders.forEach(thirdColumnsHeader => thirdColumnsHeader.remove())
thirdColumns.forEach(thirdColumn => thirdColumn.remove());

buttons.forEach(button => button.style.display = 'none');

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

title.innerText = h1;