const userLogin = () => {
  let form1 = document.getElementById("form1");

  let username = form1.elements[0].value;
  let password = form1.elements[1].value;

  if (username === "user1111@gmail.com" && password === "user@123") {
    window.location = "/Users/user_index.html";
  } else {
    window.alert("Please enter correct credentials!");
  }
};

const adminLogin = () => {
  let adminForm = document.getElementById("adminForm");

  let username = adminForm.elements[0].value;
  let password = adminForm.elements[1].value;

  if (username === "admin@gmail.com" && password === "admin@123") {
    window.location = "/Admin/appointment_list.html";
  } else {
    window.alert("Please enter correct credentials!");
  }
};
