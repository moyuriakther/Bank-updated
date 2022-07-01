document
  .getElementById("submit-button")
  .addEventListener("click", function (e) {
    console.log("clicked");
    const enteredEmail = document.getElementById("email");
    const email = enteredEmail.value;
    const enteredPassword = document.getElementById("password");
    const password = enteredPassword.value;
    if (email == "akthermoyuri@gmail.com" && password == "bolod") {
      window.location.href = "/Banking.html";
    }
  });
