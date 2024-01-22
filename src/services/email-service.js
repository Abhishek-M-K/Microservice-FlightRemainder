const transport = require("../config/emailConfig");

const { NotificationRepository } = require("../repository/index");

const notificationRepository = new NotificationRepository();

const sendBasicEmail = (mailFrom, mailTo, mailSubject, mailBody) => {
  try {
    transport.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody,
    });
  } catch (error) {
    console.log("Something went wrong while sending email", error);
  }
};

const fetchPendingEmails = async () => {
  try {
    const response = await notificationRepository.get({ status: "pending" });
    return response;
  } catch (error) {
    console.log("Something went wrong while fetching pending emails", error);
  }
};

const createNotification = async (data) => {
  try {
    const response = await notificationRepository.create(data);
    return response;
  } catch (error) {
    console.log("Something went wrong while creating notification", error);
  }
};

const updateNotification = async (id, status) => {
  try {
    const response = await notificationRepository.update(id, status);
    return response;
  } catch (error) {
    console.log("Something went wrong while fetching pending emails", error);
  }
};

module.exports = {
  sendBasicEmail,
  fetchPendingEmails,
  createNotification,
  updateNotification,
};
