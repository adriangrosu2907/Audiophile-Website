const headphoneProductsString = localStorage.getItem("headphoneProducts");
const headphoneProducts = JSON.parse(headphoneProductsString);

const cartProducts = [ headphoneProducts[0], headphoneProducts[1],headphoneProducts[2]];
console.log(cartProducts);

// console.log(headphoneProducts);

function generateCart(productsList) {
    const cartSection = document.createElement("section");
    cartSection.classList.add("cartSection");

    const cart = document.createElement("div");
    cart.classList.add("cart");
    cartSection.appendChild(cart);

    const cartHeader = document.createElement("div");
    cartHeader.classList.add("cartHeader");
    cart.appendChild(cartHeader);

    const cartH6 = document.createElement("h6");
    cartH6.innerHTML = "Cart (<span>0</span>)"
    cartHeader.appendChild(cartH6);

    const removeCartItems = document.createElement("button");
    removeCartItems.textContent = "Remove all";
    removeCartItems.setAttribute("id","removeCartItems")
    cartHeader.appendChild(removeCartItems);

    const cartBody = document.createElement("div");
    cartBody.classList.add("cartBody");
    cart.appendChild(cartBody);

    const cartNumbers = document.createElement("div");
    cartNumbers.classList.add("cartNumbers");
    cart.appendChild(cartNumbers);

    let totalCart = 0;
    let productPrice = 0;
    
    for (let i = 0; i < productsList.length; i++) {
        const product = productsList[i];

        const cartItem = document.createElement("div");
        cartItem.classList.add("cartItem");
        const cartItemImg = document.createElement("img");
        cartItemImg.setAttribute("src", "assets/" + product.longName + "/desktop/image-product.jpg"); 
        cartItemImg.setAttribute("alt", product.name);
        cartItem.appendChild(cartItemImg);

        const namePlusPriceDiv = document.createElement("div");
        namePlusPriceDiv.classList.add("namePlusPrice");
        cartItem.appendChild(namePlusPriceDiv);

        const par1 = document.createElement("p");
        const lastSpaceIndex = product.name.lastIndexOf(" ");
        const shortName = product.name.substring(0, lastSpaceIndex);
        par1.textContent = shortName
        namePlusPriceDiv.appendChild(par1);

        const par2 = document.createElement("p");
        par2.textContent = product.price;
        namePlusPriceDiv.appendChild(par2);

        const plusMinus = document.createElement("div");
        plusMinus.classList.add("plusMinus");
        cartItem.appendChild(plusMinus);

        const minusButton = document.createElement("button");
        minusButton.textContent = "-";
        plusMinus.appendChild(minusButton);

        const count = document.createElement("span");
        count.textContent = "0";
        count.setAttribute("id", "count");
        plusMinus.appendChild(count);

        const plusButton = document.createElement("button");
        plusButton.textContent = "+";
        plusMinus.appendChild(plusButton);  
        cartBody.appendChild(cartItem);   
        
        productPrice += parseInt(product.price);
        
    }

    totalCart += productPrice;
    
    const par3 = document.createElement("p");
    par3.textContent = "Total"
    cartNumbers.appendChild(par3);

    const cartH61 = document.createElement("h6");
    cartH61.textContent = totalCart;
    cartNumbers.appendChild(cartH61);

    const buttonB1 = document.createElement("button");
    buttonB1.textContent = "Checkout";  
    buttonB1.classList.add("B1");
    cart.appendChild(buttonB1); 

    const divOverlay = document.createElement("div");
    divOverlay.classList.add("popupOverlay");
    body.appendChild(divOverlay);

    return cartSection;

}




// function generateLogin() {
//     const loginSection = document.createElement("section");
//     loginSection.classList.add("loginSection");

//     const login = document.createElement("div");
//     login.classList.add("login_signup");
//     loginSection.appendChild(login);

//     const loginH3 = document.createElement("h3");
//     loginH3.textContent = "Sign In";
//     login.appendChild(loginH3);

//     const loginForm = document.createElement("form");
//     loginForm.setAttribute("action", "");
//     login.appendChild(loginForm);

//     const emailDiv = document.createElement("div");
//     emailDiv.classList.add("textItem");
//     loginForm.appendChild(emailDiv);

//     const emailLabel = document.createElement("label");
//     emailLabel.textContent = "E-mail";
//     emailLabel.setAttribute("for", "email");
//     emailDiv.appendChild(emailLabel);

//     const emailInput = document.createElement("input");
//     emailInput.setAttribute("type", "email");
//     emailInput.setAttribute("name", "email");
//     emailInput.setAttribute("id", "email");
//     emailInput.required = true;
//     emailDiv.appendChild(emailInput);

//     const passwordDiv = document.createElement("div");
//     passwordDiv.classList.add("textItem");
//     loginForm.appendChild(passwordDiv);

//     const passwordLabel = document.createElement("label");
//     passwordLabel.textContent = "Password";
//     passwordLabel.setAttribute("for", "password");
//     passwordDiv.appendChild(passwordLabel);

//     const passwordInput = document.createElement("input");
//     passwordInput.setAttribute("type", "password");
//     passwordInput.setAttribute("name", "password");
//     passwordInput.setAttribute("id", "password");
//     passwordInput.required = true;
//     passwordDiv.appendChild(passwordInput);

//     const signInButton = document.createElement("button");
//     signInButton.textContent = "Sign In";
//     signInButton.classList.add("B4");
//     loginForm.appendChild(signInButton);

//     const par1 = document.createElement("p");
//     par1.textContent = "Don't have an account? ";
//     login.appendChild(par1);

//     const loginAnchor = document.createElement("a");
//     loginAnchor.textContent = "Sign Up";
//     loginAnchor.setAttribute("href", "#");
//     par1.appendChild(loginAnchor);

//     // Sign up side
//     const signUp = document.createElement("div");
//     signUp.classList.add("login_signup");
//     signUp.classList.add("signUp");
//     loginSection.appendChild(signUp);

//     const signUpH3 = document.createElement("h3");
//     signUpH3.textContent = "Sign Up";
//     signUp.appendChild(signUpH3);

//     const signUpForm = document.createElement("form");
//     signUpForm.setAttribute("action", "");
//     signUp.appendChild(signUpForm);

//     const signUpEmailDiv = document.createElement("div");
//     signUpEmailDiv.classList.add("textItem");
//     signUpForm.appendChild(signUpEmailDiv);

//     const signUpEmailLabel = document.createElement("label");
//     signUpEmailLabel.textContent = "E-mail";
//     signUpEmailLabel.setAttribute("for", "signUpEmail");
//     signUpEmailDiv.appendChild(signUpEmailLabel);

//     const signUpEmailInput = document.createElement("input");
//     signUpEmailInput.setAttribute("type", "email");
//     signUpEmailInput.setAttribute("name", "signUpEmail");
//     signUpEmailInput.setAttribute("id", "signUpEmail");
//     signUpEmailInput.required = true;
//     signUpEmailDiv.appendChild(signUpEmailInput);

//     const signUpPasswordDiv = document.createElement("div");
//     signUpPasswordDiv.classList.add("textItem");
//     signUpForm.appendChild(signUpPasswordDiv);

//     const signUpPasswordLabel = document.createElement("label");
//     signUpPasswordLabel.textContent = "Password";
//     signUpPasswordLabel.setAttribute("for", "signUpPassword");
//     signUpPasswordDiv.appendChild(signUpPasswordLabel);

//     const signUpPasswordInput = document.createElement("input");
//     signUpPasswordInput.setAttribute("type", "password");
//     signUpPasswordInput.setAttribute("name", "signUpPassword");
//     signUpPasswordInput.setAttribute("id", "signUpPassword");
//     signUpPasswordInput.required = true;
//     signUpPasswordDiv.appendChild(signUpPasswordInput);

//     const signUpButton = document.createElement("button");
//     signUpButton.textContent = "Sign UP";
//     signUpButton.classList.add("B4");
//     signUpForm.appendChild(signUpButton);

//     const par2 = document.createElement("p");
//     par2.textContent = "Already have an account? ";
//     signUp.appendChild(par2);

//     const signUpAnchor = document.createElement("a");
//     signUpAnchor.textContent = " Sign In";
//     signUpAnchor.setAttribute("href", "#");
//     par2.appendChild(signUpAnchor);

//     signUpAnchor.addEventListener("click", ()=>{
//         loginSide.style.left = "50%";
//         loginSide.style.borderRadius = "0 8px 8px 0";
//         loginSide.style.transition = "left 1s";
//     })

//     // login Side DIV
//     const loginSide = document.createElement("div");
//     loginSide.classList.add("loginSide");
//     loginSection.appendChild(loginSide);

//     const loginClose = document.createElement("button");
//     loginClose.classList.add("B5");
//     loginClose.setAttribute("id", "loginClose");
//     loginSection.appendChild(loginClose);

//     const loginCloseImg = document.createElement("img");
//     loginCloseImg.setAttribute("src", "assets/shared/desktop/Dell_fill.svg");
//     loginCloseImg.setAttribute("alt", "Account Icon");
//     loginClose.appendChild(loginCloseImg);

//     const divOverlay = document.createElement("div");
//     divOverlay.classList.add("popupOverlay");
//     body.appendChild(divOverlay);

//     loginClose.addEventListener("click", () => {
//         if (loginSection) {
//             loginSection.remove();
//             divOverlay.remove();
//         }
//     })

//     loginAnchor.addEventListener("click", ()=>{
//         loginSide.style.left = "0";
//         loginSide.style.borderRadius = "8px 0 0 8px";
//         loginSide.style.transition = "left 1s";
//     })

//     return loginSection;
// };

const cartOpen = document.getElementById("cartOpen");
const body = document.querySelector("body");

cartOpen.addEventListener("click", () => {

    const cartSection = generateCart(cartProducts);
    body.appendChild(cartSection);
});