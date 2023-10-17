import { notification } from "antd";

enum NotificationType {
  Sucess = "success",
  Info = "info",
  Warning = "warning",
  Error = "error",
}

export type NotificationConfig = {
  type?: NotificationType;
  message: string;
  description?: string;
};

const Notification = (config: NotificationConfig) => {
  const { type = NotificationType.Sucess, message, description = "" } = config;

  notification[type]({
    message,
    description,
    duration: 3,
  });
};

export { Notification, NotificationType };
