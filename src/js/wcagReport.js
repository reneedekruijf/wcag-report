const evalData = require('../../wcag/evaluation.json');

ol = document.createElement('ol');
// const list = document.querySelector('.wcargReport').append(ol);


evalData.auditSample.forEach(item => {
  const criteria = item.test.id;
  const result = item.result.outcome.title;

  let li = document.createElement('li');
  ol.appendChild(li);

  li.innerHTML += result;
});

console.log(evalData.auditSample[0]);