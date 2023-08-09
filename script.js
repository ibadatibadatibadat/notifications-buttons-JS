let notifies_box = document.getElementById("notifies-box");
let success_msg =
  '<i class="fa-solid fa-square-check"></i> successfully Submitted';
let error_msg =
  '<i class="fa-solid fa-square-xmark"></i> Please Fix The error!';
let invalid_msg =
  '<i class="fa-solid fa-triangle-exclamation"></i> invalid Input, Check Again';
let show_notification = (msg) => {
  let notification = document.createElement("div");
  notification.classList.add("class", "notifies");
  notification.innerHTML = msg;
  notifies_box.appendChild(notification);
  if (msg.includes("error")) {
    notification.classList.add("error");
  }
  if (msg.includes("success")) {
    notification.classList.add("success");
  }
  if (msg.includes("invalid")) {
    notification.classList.add("invalid");
  }
  setTimeout(() => {
    notification.remove();
  }, 3000);
};
// show_notification(success_msg);
// show_notification(error_msg);
// show_notification(invalid_msg);

