function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let mobileNumber = document.getElementById("mobilenumber").value;
  let aadhaar = document.getElementById("aadhaar").value;
  let dob = document.getElementById("dob").value;
  let today = new Date().toISOString().split("T")[0];

  // Ensure passwords match
  if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return false;
  }

  // Validate mobile number (must be 10 digits)
  if (mobileNumber.length !== 10) {
      alert("Mobile number must be exactly 10 digits!");
      return false;
  }

  // Validate Aadhaar number (must be 12 digits)
  if (aadhaar.length !== 12) {
      alert("Aadhaar number must be exactly 12 digits!");
      return false;
  }

  // Validate DOB (should not be in the future)
  if (dob > today) {
      alert("Date of Birth cannot be in the future!");
      return false;
  }

  alert("Registration Successful!");
  document.getElementById("signupForm").submit();
  window.location.href = "/userlogin.html";

    // Submit form
}


// Prevent selecting future dates for DOB
document.getElementById("dob").max = new Date().toISOString().split("T")[0];


// signin page validations

function validateForms(event) {
  event.preventDefault(); // Prevent form submission

  let isValid = true;

  function markInvalid(field, message) {
      field.classList.add("is-invalid");
      alert(message);
      isValid = false;
  }

  function markValid(field) {
      field.classList.remove("is-invalid");
  }

  let username = document.getElementById("username");
  let password = document.getElementById("password");

  // Username Validation (Must not be empty)
  if (username.value.trim() === "") {
      markInvalid(username, "Username is required!");
  } else {
      markValid(username);
  }

  // Password Validation (Must meet security criteria)
  let passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  if (!passwordPattern.test(password.value)) {
      markInvalid(password, "Password must contain at least one number, one uppercase, one lowercase letter, and be at least 8 characters long!");
  } else {
      markValid(password);
  }

  alert("Welcome to our site..!");
  document.getElementById("signinForm").submit(); // Submit form
  }
