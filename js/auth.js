function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  if (u === "student" && p === "hogwarts") {
    sessionStorage.setItem("login", "yes");
    window.location.href = "index.html";
  } else {
    document.getElementById("msg").innerText = "Access Denied";
  }
}

function protect() {
  if (sessionStorage.getItem("login") !== "yes") {
    window.location.href = "login.html";
  }
}
