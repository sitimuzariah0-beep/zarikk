const USERNAME = "admin";
const PASSWORD = "eco123";

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === USERNAME && pass === PASSWORD) {
    localStorage.setItem("login", "true");
    window.location.href = "home.html";
  } else {
    alert("Username atau password salah!");
  }
}

function checkLogin() {
  if (localStorage.getItem("login") !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("login");
}
