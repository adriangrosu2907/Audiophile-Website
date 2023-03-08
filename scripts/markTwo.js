const headphoneProductsString = localStorage.getItem("headphoneProducts");
const headphoneProducts = JSON.parse(headphoneProductsString);

// console.log(headphoneProducts);

const productSection = document.querySelector(".productSection");
// console.log(productSection);
const customContainer1 = document.createElement("div");
customContainer1.classList.add("customContainer");
productSection.appendChild(customContainer1);

function generateProductDetails(product){
    const productDetails = document.createElement("div");
    productDetails.classList.add("productDetails");
    customContainer1.appendChild(productDetails);

    const productImg = document.createElement("img");
    const productImgPath = "assets/"+ product.longName + "/desktop/image-category-page-preview.jpg";
    productImg.setAttribute("src", productImgPath);
    productDetails.appendChild(productImg);

    const productDescription = document.createElement("div");
    productDescription.classList.add("productDescription");
    productDetails.appendChild(productDescription);

    const productP1 = document.createElement("p");
    productP1.textContent = "New product";
    productP1.classList.add("overlineOrange");
    productDescription.appendChild(productP1);

    const productH2 = document.createElement("h2");
    productH2.textContent = product.name;
    productDescription.appendChild(productH2);

    const productP2 = document.createElement("p");
    productP2.textContent = product.description;
    productDescription.appendChild(productP2);

    const productH6 = document.createElement("h6");
    productH6.textContent = product.price;
    productDescription.appendChild(productH6);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttonsDiv");
    productDescription.appendChild(buttonsDiv);

    const productButton1 = document.createElement("button");
    productButton1.textContent = "- 1 +";
    productButton1.classList.add("B6");
    buttonsDiv.appendChild(productButton1);

    const productButton2 = document.createElement("button");
    productButton2.textContent = "Add to cart";
    productButton2.classList.add("B1");
    buttonsDiv.appendChild(productButton2);

}



function generateProductSection(productsList){
    const productSection = document.querySelector(".productSection");
    for(let i =0; i < productsList.length; i++){
        if (productsList[i].longName === "product-xx99-mark-two-headphones"){
            const product = productsList[i];
            generateProductDetails(product);
        }
    }
    // const customContainer1 = document.createElement("div");
    // customContainer1.classList.add("customContainer");
    // productSection.appendChild(customContainer1);

}

generateProductSection(headphoneProducts);
// generateProductDetails();