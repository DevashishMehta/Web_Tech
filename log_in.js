function togglePassword() {
  const passField = document.getElementById("password");
  passField.type = passField.type === "password" ? "text" : "password";
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("❗ Please fill in both fields.");
    return;
  }

  // You can replace this with real validation / backend call
  alert(`✅ Logged in as ${username}`);
}