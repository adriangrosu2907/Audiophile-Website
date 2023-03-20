const headphoneProductsString = localStorage.getItem("headphoneProducts");
const headphoneProducts = JSON.parse(headphoneProductsString);

const cartProducts = [ headphoneProducts[0], headphoneProducts[1],headphoneProducts[2]];
console.log(cartProducts);

// console.log(headphoneProducts);
const cartProductsString = localStorage.getItem("productsInCart");
const cartProducts2 = JSON.parse(cartProductsString);

const cart2Products = cartProducts2;
console.log(cart2Products);


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
        minusButton.classList.add("plusMinusButton");
        plusMinus.appendChild(minusButton);

        const count = document.createElement("span");
        count.textContent = "0";
        count.setAttribute("id", "count");
        plusMinus.appendChild(count);

        const plusButton = document.createElement("button");
        plusButton.textContent = "+";
        plusButton.classList.add("plusMinusButton");
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

};
const cartOpen = document.getElementById("cartOpen");
const body = document.querySelector("body");

cartOpen.addEventListener("click", () => {

    const cartSection = generateCart(cartProducts);
    body.appendChild(cartSection);
});