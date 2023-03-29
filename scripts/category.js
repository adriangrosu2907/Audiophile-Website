const categoriesProductsString = localStorage.getItem("categoriesProducts");
const categoriesProducts = JSON.parse(categoriesProductsString);
// console.log(categoriesProducts);

const urlQuery = window.location.search;
const urlParams = new URLSearchParams(urlQuery);
const categoryName = urlParams.get("category");

// console.log(categoryName);
let categoryProducts;

if (categoriesProducts) {
    // debugger
    Object.keys(categoriesProducts).forEach(function (categoryKey) {
        if (categoryKey === categoryName) {
            // console.log("test");
            categoryProducts = categoriesProducts[categoryKey];
        }
    });
}
// console.log(categoryProducts);

const categoryNameOnPage = document.querySelector(".categoryNameOnPage");
categoryNameOnPage.innerHTML = categoryName;
// console.log(categoryNameOnPage);

const categorySection = document.querySelector(".categoryProducts");
// console.log(productSection);

const customContainer2 = document.createElement("div");
customContainer2.classList.add("customContainer");
categorySection.appendChild(customContainer2);

function generateCategoryProductL(product, screenType) {

    const categoryProduct = document.createElement("div");
    categoryProduct.classList.add("categoryProduct");
    customContainer2.appendChild(categoryProduct);

    const productImg = document.createElement("img");
    const productImgPath = "assets/" + product.longName + "/" + screenType + "/image-category-page-preview.jpg";
    productImg.setAttribute("src", productImgPath);
    productImg.setAttribute("alt", product.name);
    categoryProduct.appendChild(productImg);

    const productDescription = document.createElement("div");
    productDescription.classList.add("productDescription");
    categoryProduct.appendChild(productDescription);

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

    const productButton2 = document.createElement("button");
    productButton2.addEventListener("click", function () {
        var url = new URL(window.location.origin + "/product.html");
        url.searchParams.set("product", product.name);
        window.location.href = url.href;
    });
    productButton2.textContent = "See product";
    productButton2.classList.add("B1");
    productDescription.appendChild(productButton2);

};

function generateCategoryProductR(product, screenType) {

    const categoryProduct = document.createElement("div");
    categoryProduct.classList.add("categoryProduct");
    customContainer2.appendChild(categoryProduct);

    const productDescription = document.createElement("div");
    productDescription.classList.add("productDescription");
    categoryProduct.appendChild(productDescription);

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

    const productButton2 = document.createElement("button");
    productButton2.addEventListener("click", function () {
        var url = new URL(window.location.origin + "/product.html");
        url.searchParams.set("product", product.name);
        // debugger
        window.location.href = url.href;
    });
    productButton2.textContent = "See product";
    productButton2.classList.add("B1");
    productDescription.appendChild(productButton2);

    const productImg = document.createElement("img");
    const productImgPath = "assets/" + product.longName + "/" + screenType + "/image-category-page-preview.jpg";
    productImg.setAttribute("src", productImgPath);
    productImg.setAttribute("alt", product.name);
    categoryProduct.appendChild(productImg);

};

const maxNoProducts = 3;

function generateCategorySection(indexStart, productsList) {

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

    const categorySection = document.querySelector(".categoryProducts");
    customContainer2.innerHTML = "";

    for (let i = indexStart; i < indexStart + maxNoProducts && i < productsList.length; i++) {
        if (i % 2 == 0) {
            generateCategoryProductL(productsList[i], screenType);
        } else {
            generateCategoryProductR(productsList[i], screenType);
        }
    }
};


// re-creeam lista cand utilizatorul face resize la screen
window.addEventListener('resize', () => {
    generateCategorySection(0, categoryProducts);
    generatePagination(categoryProducts);
}, false)


function generatePagination(list) {

    const paginationDiv = document.createElement("div");
    paginationDiv.classList.add("pagination");
    customContainer2.appendChild(paginationDiv);

    const ul = document.createElement("ul");
    const numberOfPages = Math.ceil(list.length / maxNoProducts);

    for (let i = 0; i < numberOfPages; i++) {
        const li = document.createElement("li");
        li.textContent = i + 1;
        ul.appendChild(li);
    }

    ul.addEventListener("click", (e) => {
        const pageNumber = e.target.textContent;
        if (pageNumber.length === 1) {
            const pageNumberInt = parseInt(pageNumber);
            const startIndex = (pageNumberInt - 1) * maxNoProducts;
            pageNumber
            // console.log(pageNumber);
            generateCategorySection(startIndex, list);
            generatePagination(list);
        }


    })

    paginationDiv.appendChild(ul);

}

generateCategorySection(0, categoryProducts);
generatePagination(categoryProducts);

const categAnchors = document.querySelectorAll(".categAnchor");
//  console.log(categAnchors);

categAnchors.forEach(categAnchor => {
    categAnchor.addEventListener("click", function (event) {
        // debugger
        event.preventDefault();
        var url = new URL(window.location.origin + "/category.html");
        if (categAnchor.textContent !== "Shop") {
            url.searchParams.set("category", categAnchor.textContent);
        } else {
            const categName = categAnchor.previousElementSibling.textContent;
            url.searchParams.set("category", categName);
        };
        window.location.href = url.href;
    });
});

/* ====================== Cart display ====================== */

onLoadCartNumbers();

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

    // let onPageCount = parseInt(document.getElementById("count").textContent);
    let totalCartCost = 0;
    if (cartCost != null) {
        let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
        Object.keys(productsInCart).forEach(function (productKey) {
            let currentProduct = productsInCart[productKey];
            totalCartCost += currentProduct.inCart * currentProduct.price;
        });
        localStorage.setItem("totalCost", totalCartCost);
    } else {
        totalCartCost = parseInt(product.price) * onPageCount;
        localStorage.setItem("totalCost", totalCartCost);
    }

    document.getElementById("totalCostElement").innerHTML = "$ " + totalCartCost.toLocaleString();
};

function updateCartItemQuantity(product) {

    let productsInCart = localStorage.getItem("productsInCart");
    productsInCart = JSON.parse(productsInCart);

    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    // console.log(productsInCart);

    let inCartCount = product.inCart;
    console.log(inCartCount);

    let totalItemsCount = product.inCart;
    if (productsInCart) {
        Object.keys(productsInCart).forEach(function (productKey) {
            if (productKey !== product.name) {
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
        cartH61.id = "totalCostElement";
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

const cartOpen = document.getElementById("cartOpen");
const body = document.querySelector("body");
const plusButton = document.querySelector(".plusButton");
const minusButton = document.querySelector(".minusButton");
const countSpan = document.getElementById('count');

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
        if (count > 1) {
            showCount = count - 1;
        }
    }
    countSpan.textContent = showCount;
    if (product) {
        product.inCart = showCount;
    }
};