const NotificationService = require("../services/email-service");

const create = async (req, res) => {
  try {
    const response = await NotificationService.createNotification(req.body);
    return res.status(201).json({
      success: true,
      data: response,
      err: {},
      message: "Notification reminder created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      err: error,
      message: "Not able to create notification reminder",
    });
  }
};

module.exports = {
  create,
};
