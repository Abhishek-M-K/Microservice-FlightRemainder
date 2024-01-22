const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");

//const { sendBasicEmail } = require("./services/email-service");
const NotificationController = require("./controllers/notification-controller");

const jobs = require("./utils/job");

const app = express();

const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/api/v1/notification", NotificationController.create);

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    jobs();
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
