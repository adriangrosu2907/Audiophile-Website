const headphoneProductsString = localStorage.getItem("headphoneProducts");
const headphoneProducts = JSON.parse(headphoneProductsString);
// console.log(headphoneProducts);

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
    productButton2.textContent = "Add to cart";
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
    productButton2.textContent = "Add to cart";
    productButton2.classList.add("B1");
    productDescription.appendChild(productButton2);

    const productImg = document.createElement("img");
    const productImgPath = "assets/" + product.longName + "/" + screenType + "/image-category-page-preview.jpg";
    productImg.setAttribute("src", productImgPath);
    productImg.setAttribute("alt", product.name);
    categoryProduct.appendChild(productImg);

};

function generateCategorySection(productsList) {

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
    console.log(screenType);
    console.log(pageWidth);    

    const categorySection = document.querySelector(".categoryProducts");
    customContainer2.innerHTML = "";

    for (let i = 0; i < productsList.length; i++) {
        if (i % 2 == 0) {
            generateCategoryProductL(productsList[i], screenType);
        } else {
            generateCategoryProductR(productsList[i], screenType);
        }
    }
};

// re-creeam lista cand utilizatorul face resize la screen
window.addEventListener('resize', () => {
    generateCategorySection(headphoneProducts);
}, false)

generateCategorySection(headphoneProducts);
