//  Title: Registration Form

//   Version:1.0 v

//   Developer: Ashkan Salehpour

// Description : registration form with validation, functioned with JS .


const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const checkBox= document.getElementById("checkbox")

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();  
});

function checkInputs() {
  // trim to remove the whitespaces 
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmValue = confirm.value.trim();

  if (nameValue === "") {
    setErrorFor(name, "Please enter your name");
  } else {
    setSuccessFor(name);
  }

  if (emailValue === "") {
    setErrorFor(email, "Please enter your email");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email not valid");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Please enter password");
  } else if (!isPassword(passwordValue)) {
    setErrorFor(
      password,
      "at least one number, one uppercase, lowercase letter, and at least 8 character"
    );
  } else {
    setSuccessFor(password);
  }

  if (confirmValue === "") {
    setErrorFor(confirm, "Please re-enter password");
  } else if (!isConfirm(confirmValue)) {
    setErrorFor(confirm, "Invalid password");
  } else if (passwordValue !== confirmValue) {
    setErrorFor(confirm, "Passwords does not match");
  } else {
    setSuccessFor(confirm);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isPassword(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
}

function isConfirm(confirm) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(confirm);
}
