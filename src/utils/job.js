const cron = require("node-cron");
const emailService = require("../services/email-service");
const transport = require("../config/emailConfig");

/*
 * we will run a cron job every 10 minutes
 * to check for pending notifications emails and send them
 */

const setupCronJobs = () => {
  cron.schedule("*/10 * * * *", async () => {
    const response = await emailService.fetchPendingEmails();
    response.forEach((email) => {
      /*emailService.sendBasicEmail(
        "FlightReminder@indigoAir.com",
        email.receipentEmail,
        email.subject,
        email.content
      );*/

      transport.sendMail(
        {
          to: email.receipentEmail,
          subject: email.subject,
          text: email.content,
        },
        //error first callback
        async (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
            await emailService.updateNotification(email.id, "sent");
          }
        }
      );
    });
    console.log(response);
  });
};

module.exports = setupCronJobs;
