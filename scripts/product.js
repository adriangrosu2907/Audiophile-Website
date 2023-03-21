const headphoneProductsString = localStorage.getItem("headphoneProducts");
const headphoneProducts = JSON.parse(headphoneProductsString);
// console.log(headphoneProducts);

const productSection = document.querySelector(".productSection");
// console.log(productSection);

const customContainer1 = document.createElement("div");
customContainer1.classList.add("customContainer");
productSection.appendChild(customContainer1);

function generateProductDetails(product, screenType) {
    const productDetails = document.createElement("div");
    productDetails.classList.add("productDetails");
    customContainer1.appendChild(productDetails);

    const productImg = document.createElement("img");
    const productImgPath = "assets/" + product.longName + "/" + screenType + "/image-product.jpg";
    productImg.setAttribute("src", productImgPath);
    productImg.setAttribute("alt", product.name);
    productDetails.appendChild(productImg);

    const productDescription = document.createElement("div");
    productDescription.classList.add("productDescription");
    productDetails.appendChild(productDescription);

    if (product.new == true) {
        const productP1 = document.createElement("p");
        productP1.textContent = "New product";
        productP1.classList.add("overlineOrange");
        productDescription.appendChild(productP1);
    };
    const productH2 = document.createElement("h2");
    productH2.textContent = product.name;
    productDescription.appendChild(productH2);

    const productP2 = document.createElement("p");
    productP2.textContent = product.description;
    productDescription.appendChild(productP2);

    const productH6 = document.createElement("h6");
    productH6.textContent = "$ " + product.price;
    productDescription.appendChild(productH6);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttonsDiv");
    productDescription.appendChild(buttonsDiv);

    const plusMinus = document.createElement("div");
    plusMinus.classList.add("plusMinus");
    buttonsDiv.appendChild(plusMinus);

    const minusButton = document.createElement("button");
    minusButton.textContent = "-";
    minusButton.classList.add("plusMinusButton");
    minusButton.classList.add("minusButton");
    // minusButton.setAttribute("onclick", "decrement()")
    plusMinus.appendChild(minusButton);

    const count = document.createElement("span");
    count.textContent = "0";
    count.setAttribute("id", "count");
    plusMinus.appendChild(count);

    const plusButton = document.createElement("button");
    plusButton.textContent = "+";
    plusButton.classList.add("plusMinusButton");
    plusButton.classList.add("plusButton");
    // minusButton.setAttribute("onclick", "decrement()")
    plusMinus.appendChild(plusButton);


    const addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Add to cart";
    addToCartBtn.classList.add("B1");
    addToCartBtn.classList.add("addToCart");
    buttonsDiv.appendChild(addToCartBtn);

};

function generateProductFeatures(product) {

    const productFeatures = document.createElement("div");
    productFeatures.classList.add("productFeatures");
    customContainer1.appendChild(productFeatures);

    const featuresDiv = document.createElement("div");
    featuresDiv.classList.add("features");
    productFeatures.appendChild(featuresDiv);

    const productH3 = document.createElement("h3");
    productH3.textContent = "Features";
    featuresDiv.appendChild(productH3);

    const productP3 = document.createElement("p");
    productP3.innerHTML = product.features;
    featuresDiv.appendChild(productP3);

    const intheboxDiv = document.createElement("div");
    intheboxDiv.classList.add("inthebox");
    productFeatures.appendChild(intheboxDiv);

    const productH31 = document.createElement("h3");
    productH31.textContent = "In the box";
    intheboxDiv.appendChild(productH31);

    const productP4 = document.createElement("p");
    const sentenceList = product.items;

    for (let key in sentenceList) {
        const span = document.createElement("span");
        const words = sentenceList[key].split(" ");
        span.textContent = words[0];
        span.classList.add("highlight");
        const restOfSentence = words.slice(1).join(" ");
        const text = document.createTextNode("\u2003" + restOfSentence);
        const br = document.createElement("br");

        productP4.appendChild(span);
        productP4.appendChild(text);
        productP4.appendChild(br);
    };

    intheboxDiv.appendChild(productP4);

};

function generateProductGallery(product, screenType) {

    const productImages = document.createElement("div");
    productImages.classList.add("productImages");
    customContainer1.appendChild(productImages);

    const bundleImagesDiv = document.createElement("div");
    bundleImagesDiv.classList.add("bundleImages");
    productImages.appendChild(bundleImagesDiv);

    const productGalleryImg1 = document.createElement("img");
    const productImg1Path = "assets/" + product.longName + "/" + screenType + "/image-gallery-1.jpg";
    productGalleryImg1.setAttribute("src", productImg1Path);
    productGalleryImg1.setAttribute("alt", product.name);
    bundleImagesDiv.appendChild(productGalleryImg1);

    const productGalleryImg2 = document.createElement("img");
    const productImg2Path = "assets/" + product.longName + "/" + screenType + "/image-gallery-2.jpg";
    productGalleryImg2.setAttribute("src", productImg2Path);
    productGalleryImg2.setAttribute("alt", product.name);
    bundleImagesDiv.appendChild(productGalleryImg2);

    const productGalleryImg3 = document.createElement("img");
    const productImg3Path = "assets/" + product.longName + "/" + screenType + "/image-gallery-3.jpg";
    productGalleryImg3.setAttribute("src", productImg3Path);
    productGalleryImg3.setAttribute("alt", product.name);
    productImages.appendChild(productGalleryImg3);


};

function cartNumbers(product) {
    // console.log("The product clicked is:" , product);
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);

    let onPageCount = parseInt(document.getElementById("count").textContent);
    console.log(onPageCount);

    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + onPageCount);
        document.getElementById("labelCartCount").textContent = productNumbers + onPageCount;
    } else {
        localStorage.setItem("cartNumbers", onPageCount);
        document.getElementById("labelCartCount").textContent = onPageCount;
    }

    setItems(product);
};

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");

    if (productNumbers) {
        document.getElementById("labelCartCount").textContent = productNumbers;
    }
};

function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    // console.log("My cart items are:", cartItems)

    let onPageCount = parseInt(document.getElementById("count").textContent);

    const { id, name, longName, price, inCart } = product;
    const newObject = { id, name, longName, price, inCart };

    if (cartItems != null) {
        if (cartItems[product.name] == undefined) {
            cartItems = {
                ...cartItems,
                [product.name]: newObject
            }
        }
        cartItems[product.name].inCart += onPageCount;
    } else {
        product.inCart = onPageCount;

        const { id, name, longName, price, inCart } = product;
        const newObject = { id, name, longName, price, inCart };

        cartItems = {
            [product.name]: newObject
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
};

function totalCost(product) {
    // console.log("The product price is" , product.price);
    let cartCost = localStorage.getItem("totalCost");

    let onPageCount = parseInt(document.getElementById("count").textContent);
    let totalCartCost = 0;
    if (cartCost != null) {
       let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
       Object.keys(productsInCart).forEach(function(productKey){
            let currentProduct = productsInCart[productKey];
            totalCartCost += currentProduct.inCart * currentProduct.price; 
       });
       localStorage.setItem("totalCost", totalCartCost);
    } else {
        totalCartCost = parseInt(product.price) * onPageCount;
        localStorage.setItem("totalCost", totalCartCost);
    }

    document.getElementById("totalCostElement").innerHTML="$ " + totalCartCost.toLocaleString();
};

function updateCartItemQuantity(product) {

    let productsInCart = localStorage.getItem("productsInCart");
    productsInCart = JSON.parse(productsInCart);

    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    // console.log(productsInCart);

    let inCartCount = product.inCart;
    console.log( inCartCount);

    let totalItemsCount = product.inCart;
    if(productsInCart){
        Object.keys(productsInCart).forEach(function(productKey){
            if(productKey !== product.name){
                totalItemsCount += productsInCart[productKey].inCart;
            } 
        })
    }

    document.getElementById("labelCartCount").textContent = totalItemsCount;
    localStorage.setItem("cartNumbers", totalItemsCount);

    productsInCart[product.name].inCart = product.inCart;    
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));

    totalCost(product);
};

function generateProductSection(productsList) {

    let pageWidth = window.innerWidth;
    // console.log(pageWidth);
    let screenType = "";

    if (pageWidth <= 375) {
        screenType = "mobile";
    } else if (pageWidth > 375 && pageWidth <= 768) {
        screenType = "tablet";
    } else if (pageWidth > 768) {
        screenType = "desktop";
    }
    // console.log(screenType);
    // console.log(pageWidth);    

    const productSection = document.querySelector(".productSection");
    customContainer1.innerHTML = "";

    const urlQuery = window.location.search;
    const urlParams = new URLSearchParams(urlQuery);
    const productName = urlParams.get("product");
    
    for (let i = 0; i < productsList.length; i++) {
        if (productsList[i].name === productName) {
            const product = productsList[i];
            generateProductDetails(product, screenType);
            generateProductFeatures(product);
            generateProductGallery(product, screenType);

            // add to Cart functionality
            const addToCartBtn = document.querySelector(".addToCart");
            addToCartBtn.addEventListener("click", () => {
                // console.log("Added to cart")
                // inDeCrement();
                cartNumbers(product);
                totalCost(product);
                document.getElementById("count").textContent = "0";
            });
        };
    };
};

// re-creeam lista cand utilizatorul face resize la screen
window.addEventListener('resize', () => {
    generateProductSection(headphoneProducts);
}, false)

generateProductSection(headphoneProducts);
onLoadCartNumbers();


/* ====================== Cart display ====================== */

function generateCart() {
    // console.log("running");
    const cartProductsString = localStorage.getItem("productsInCart");
    const cartProductsObj = JSON.parse(cartProductsString);

    if (cartProductsObj) {
        const productsList = Object.values(cartProductsObj);
        // console.log(productsList);

        const cartNumbersString = localStorage.getItem("cartNumbers");
        const totalItemsInCart = JSON.parse(cartNumbersString);

        const totalCostString = localStorage.getItem("totalCost");
        const cartTotalCost = JSON.parse(totalCostString);

        const cartSection = document.createElement("section");
        cartSection.classList.add("cartSection");

        // Cart header

        const cart = document.createElement("div");
        cart.classList.add("cart");
        cartSection.appendChild(cart);

        const cartHeader = document.createElement("div");
        cartHeader.classList.add("cartHeader");
        cart.appendChild(cartHeader);

        const cartH6 = document.createElement("h6");
        cartH6.innerHTML = "Cart (" + totalItemsInCart + ")";
        cartHeader.appendChild(cartH6);

        const removeCartItems = document.createElement("button");
        removeCartItems.textContent = "Remove all";
        removeCartItems.setAttribute("id", "removeCartItems")
        cartHeader.appendChild(removeCartItems);

        // Cart body
        const cartBody = document.createElement("div");
        cartBody.classList.add("cartBody");
        cart.appendChild(cartBody);

        const cartNumbersDiv = document.createElement("div");
        cartNumbersDiv.classList.add("cartNumbers");
        cart.appendChild(cartNumbersDiv);

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
            par2.textContent = "$ " + product.price;
            namePlusPriceDiv.appendChild(par2);

            const plusMinus = document.createElement("div");
            plusMinus.classList.add("plusMinus");
            cartItem.appendChild(plusMinus);

            const minusButton = document.createElement("button");
            minusButton.textContent = "-";
            minusButton.classList.add("plusMinusButton");
            plusMinus.appendChild(minusButton);

            const countInCart = document.createElement("span");
            countInCart.textContent = product.inCart;
            countInCart.setAttribute("id", "countInCart");
            plusMinus.appendChild(countInCart);

            const plusButton = document.createElement("button");
            plusButton.textContent = "+";
            plusButton.classList.add("plusMinusButton");
            plusMinus.appendChild(plusButton);
            cartBody.appendChild(cartItem);

            plusButton.addEventListener('click', function () {
                plusOrMinus('plus', countInCart, product);
                updateCartItemQuantity(product);
            });
            minusButton.addEventListener('click', function () {
                plusOrMinus('minus', countInCart, product);
                updateCartItemQuantity(product);

            })

        }


        const par3 = document.createElement("p");
        par3.textContent = "TOTAL"
        cartNumbersDiv.appendChild(par3);

        const cartH61 = document.createElement("h6");
        cartH61.id="totalCostElement";
        cartH61.textContent = "$ " + cartTotalCost.toLocaleString();
        cartNumbersDiv.appendChild(cartH61);

        const buttonB1 = document.createElement("button");
        buttonB1.textContent = "Checkout";
        buttonB1.classList.add("B1");
        cart.appendChild(buttonB1);

        const divOverlay = document.createElement("div");
        divOverlay.classList.add("popupOverlay");
        body.appendChild(divOverlay);

        divOverlay.addEventListener("click", () => {
            if (cartSection) {
                cartSection.remove();
                divOverlay.remove();
            }
        })

        return cartSection;
    } else {
        console.log("No item in cart")
    }
};

const body = document.querySelector("body");
const cartOpen = document.getElementById("cartOpen");
const plusButton = document.querySelector(".plusButton");
const minusButton = document.querySelector(".minusButton");
const countSpan = document.getElementById('count');

// console.log(cartOpen);

cartOpen.addEventListener("click", () => {
    const cartSection = generateCart();
    if (cartSection) {
        body.appendChild(cartSection);
    } else {
        console.log("No item in cart");
    }
});



function plusOrMinus(operation, countSpan, product) {
    const countText = countSpan.textContent;
    const count = parseInt(countText);

    let showCount = 0;

    if (operation === 'plus') {
        showCount = count + 1;
    } else {
        if (count > 0) {
            showCount = count - 1;
        }
    }
    countSpan.textContent = showCount;
    if(product){
        product.inCart = showCount;
    }
};

plusButton.addEventListener('click', function () {
    plusOrMinus('plus', countSpan);
});
minusButton.addEventListener('click', function () {
    plusOrMinus('minus', countSpan);
})







