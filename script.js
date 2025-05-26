const regForm = document.getElementById("register-form");
const logForm = document.getElementById("login-form");
const container = document.getElementById("data");
const errorContainer = document.getElementById("error");
const userData = JSON.parse(localStorage.getItem("user-data")) || {
  username,
  password,
};

const getData = () => {
  const dataContainer = document.createElement("div");

  dataContainer.innerHTML = `
          <p>${userData.username}</p>
          <p>${userData.password}</p>
        `;

  container.append(dataContainer);
};

getData();

regForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = regForm.elements["username"];
  const password = regForm.elements["password"];

  userData.username = username.value.trim();
  userData.password = password.value.trim();

  localStorage.setItem("user-data", JSON.stringify(userData));

  getData();
  alert("User created successfully.");
  regForm.reset();
});

logForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = logForm.elements["username"];
  const password = logForm.elements["password"];
  const errorText = document.createElement("p");

  if (!username.value || !password.value) {
    errorText.innerText = "username/password required";
    errorContainer.appendChild(errorText);
    setTimeout(() => {
      errorText.remove();
    }, 3000);
    return;
  }

  if (
    username.value.trim() === userData.username &&
    password.value.trim() === userData.password
  ) {
    errorText.innerText = "Successfully loggen in";
    errorContainer.appendChild(errorText);
    setTimeout(() => {
      errorText.remove();
    }, 3000);
  } else {
    errorText.innerText = "Invalid username/password.";
    errorContainer.appendChild(errorText);
    setTimeout(() => {
      errorText.remove();
    }, 3000);
  }

  form.reset();
});
