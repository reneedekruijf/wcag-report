const evalData = require('./wcag/evaluation.json');

module.exports = {
  locals: {
    test: evalData.auditSample[0].date
  }
};