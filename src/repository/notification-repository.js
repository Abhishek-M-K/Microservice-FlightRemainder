const { Op } = require("sequelize");

const { Notification } = require("../models/index");

class NotificationRepository {
  async create(data) {
    try {
      const notification = await Notification.create(data);
      return notification;
    } catch (error) {
      console.log("Something went wrong while creating notification", error);
    }
  }

  async getAll() {
    try {
      const notifications = await Notification.findAll();
      return notifications;
    } catch (error) {
      console.log("Something went wrong while fetching notifications", error);
    }
  }

  async get(filter) {
    try {
      const notifications = await Notification.findAll({
        where: {
          status: filter.status,
          notifyTime: {
            [Op.lte]: new Date(),
          },
        },
      });

      return notifications;
    } catch (error) {
      console.log("Something went wrong while fetching notifications", error);
    }
  }

  async update(id, status) {
    try {
      const notification = await Notification.findByPk(id);
      if (status) notification.status = status;
      await notification.save();
      return notification;
    } catch (error) {
      console.log("Something went wrong while updating notification", error);
    }
  }
}

module.exports = NotificationRepository;
