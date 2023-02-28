function generateLogin() {
    const loginSection = document.createElement("section");
    loginSection.classList.add("loginSection");

    const login = document.createElement("div");
    login.classList.add("login");
    loginSection.appendChild(login);

    const h3 = document.createElement("h3");
    h3.textContent = "Sign In";
    login.appendChild(h3);

    const form = document.createElement("form");
    form.setAttribute("action", "");
    login.appendChild(form);

    const emailDiv = document.createElement("div");
    emailDiv.classList.add("textItem");
    form.appendChild(emailDiv);

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "E-mail";
    emailLabel.setAttribute("for", "email");
    emailDiv.appendChild(emailLabel);

    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("name", "email");
    emailInput.setAttribute("id", "email");
    emailInput.required = true;
    emailDiv.appendChild(emailInput);

    const passwordlDiv = document.createElement("div");
    passwordlDiv.classList.add("textItem");
    form.appendChild(passwordlDiv);

    const passwordLabel = document.createElement("label");
    passwordLabel.textContent = "Password";
    passwordLabel.setAttribute("for", "password");
    passwordlDiv.appendChild(passwordLabel);

    const passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("name", "password");
    passwordInput.setAttribute("id", "password");
    passwordInput.required = true;
    passwordlDiv.appendChild(passwordInput);

    const signInButton = document.createElement("button");
    signInButton.textContent = "Sign In";
    signInButton.classList.add("B4");
    form.appendChild(signInButton);

    const par1 = document.createElement("p");
    par1.textContent = "Don't have an account?";
    login.appendChild(par1);

    const anchor1 = document.createElement("a");
    anchor1.textContent = "Sign Up";
    anchor1.setAttribute("href", "tobeadded");
    par1.appendChild(anchor1);

    const loginSide = document.createElement("div");
    loginSide.classList.add("loginSide");
    loginSection.appendChild(loginSide);

    const loginClose = document.createElement("button");
    loginClose.classList.add("B5");
    loginClose.setAttribute("id", "loginClose");
    loginSection.appendChild(loginClose);

    const loginCloseImg = document.createElement("img");
    loginCloseImg.setAttribute("src", "assets/shared/desktop/Dell_fill.svg");
    loginCloseImg.setAttribute("alt", "Account Icon");
    loginClose.appendChild(loginCloseImg);

    const divOverlay = document.createElement("div");
    divOverlay.classList.add("popupOverlay");
    body.appendChild(divOverlay);

    loginClose.addEventListener("click", () => {
        if (loginSection) {
            loginSection.remove();
            divOverlay.remove();
        }
    })
    return loginSection;
};

const loginOpen = document.getElementById("loginOpen");
const body = document.querySelector("body");

loginOpen.addEventListener("click", () => {

    const loginSection = generateLogin();
    body.appendChild(loginSection);
});