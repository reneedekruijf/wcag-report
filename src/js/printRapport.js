const { jsPDF } = require("jspdf");

const title = document.querySelector('h1').innerText + '.pdf';
const allContent = document.querySelector('main').firstChild;
const setStyling = document.querySelector('.pageWrapper');

document.querySelector('.pdfButton').addEventListener('click', applyStyles);
document.querySelector('.printButton').addEventListener('click', function () { window.print() });

function applyStyles() {
  setStyling.style.maxWidth = '900px';
  setStyling.style.paddingLeft = '3rem';
  setStyling.style.paddingRight = '3rem';

  setTimeout(() => {
    savetoPdf();
  }, 1000);
}

function savetoPdf() {
  const doc = new jsPDF({
    unit: 'px',
    hotfixes: ["px_scaling"],
  })


  doc.html(allContent, {
    callback: function (doc) {
      doc.save(title);
    },
    x: 10,
    y: 5,
  });

  setTimeout(() => {
    setStyling.removeAttribute('style');
  }, 1500);
}
