const express = require("express");
const bodyParser = require("body-parser");
const cron = require("node-cron");

const { PORT } = require("./config/serverConfig");

const { sendBasicEmail } = require("./services/email-service");

const app = express();

const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);

    /*sendBasicEmail(
      "test@admin.com",
      "abhishekkhandare794@gmail.com",
      "Test Email",
      "Hello Abhishek ! This is a test email"
    );*/

    // cron.schedule("*/1 * * * *", () => {
    //   console.log("running a task every one minutes");
    // });
  });
};

setupAndStartServer();
