const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkUserNameLength(username, 3, 15);
  checkPasswordLength(password, 6);
  confirmPasswords(password, password2);
});

// CheckUserNameLength Function
function checkUserNameLength(input, min, max) {
  if (input.value.trim() === "") {
    showError(input, `${getFieldName(input.id)} is required`);
  } else if (input.value.trim().length < min) {
    showError(
      input,
      `${getFieldName(input.id)} cannot be less than ${min} characters`
    );
  } else if (input.value.trim().length > max) {
    showError(
      input,
      `${getFieldName(input.id)} cannot be more than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// checkPasswordLength Function
function checkPasswordLength(input, min) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input.id)} cannot be less than ${min} characters`
    );
  } else {
    showSuccess(input);
  }
}

// confirmPasswords Function
function confirmPasswords(pass1, pass2) {
  if (pass1.value != pass2.value) {
    showError(pass2, `Passwords don't match`);
  }
}

// Check Required Fields
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input.id)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// getFieldName Word Function
function getFieldName(word) {
  const firstLetter = word.charAt(0).toUpperCase();
  return firstLetter + word.slice(1);
}

// Show Error Function
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.textContent = message;
}

// Show Success Function
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
