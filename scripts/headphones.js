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
    productButton2.addEventListener("click", function(){
       var url = new URL(window.location.origin + "/product.html");
       url.searchParams.set("product", product.name);
       debugger
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
    productButton2.addEventListener("click", function(){
        var url = new URL(window.location.origin + "/product.html");
        url.searchParams.set("product", product.name);
        debugger
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
    generateCategorySection(0, headphoneProducts);
    generatePagination(headphoneProducts);
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
        if(pageNumber.length === 1){
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

generateCategorySection(0, headphoneProducts);
generatePagination(headphoneProducts);
