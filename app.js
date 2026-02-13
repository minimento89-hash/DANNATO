const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberInput = document.getElementById("remember");
const statusLabel = document.getElementById("status");
const STORAGE_KEY = "login-remembered-username";

const rememberedUsername = localStorage.getItem(STORAGE_KEY);
if (rememberedUsername) { usernameInput.value = rememberedUsername; rememberInput.checked = true; }

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    statusLabel.textContent = "Inserisci sia nome utente che password.";
    return;
  }

  if (rememberInput.checked) localStorage.setItem(STORAGE_KEY, username);
  else localStorage.removeItem(STORAGE_KEY);

  statusLabel.textContent = `Benvenuto ${username}, accesso simulato completato.`;
  passwordInput.value = "";
});
