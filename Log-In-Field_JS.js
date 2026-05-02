const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("loginMessage");

// Show/Hide password
togglePassword.addEventListener("click", () => {
  const type = password.type === "password" ? "text" : "password";
  password.type = type;
  togglePassword.textContent = type === "password" ? "👁" : "🙈";
});

// Fake login validation
form.addEventListener("submit", function(e) {
  e.preventDefault();

  let valid = true;

  // Clear messages
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  message.textContent = "";

  if (!email.value.includes("@")) {
    document.getElementById("emailError").textContent = "Enter valid email";
    valid = false;
  }

  if (password.value.length < 6) {
    document.getElementById("passwordError").textContent = "Min 6 characters";
    valid = false;
  }

  if (!valid) return;

  // Demo login check (replace with backend later)
  if (email.value === "admin@gmail.com" && password.value === "123456") {
    message.style.color = "green";
    message.textContent = "Login successful!";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid email or password";
  }
});