const transport = require("../config/emailConfig");

const sendBasicEmail = (mailFrom, mailTo, mailSubject, mailBody) => {
  transport.sendMail({
    from: mailFrom,
    to: mailTo,
    subject: mailSubject,
    text: mailBody,
  });
};

module.exports = {
  sendBasicEmail,
};
