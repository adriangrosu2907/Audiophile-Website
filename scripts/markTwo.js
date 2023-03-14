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

    for (let i = 0; i < productsList.length; i++) {
        if (productsList[i].name === "XX99 Mark II Headphones") {
            const product = productsList[i];
            generateProductDetails(product, screenType);
            generateProductFeatures(product);
            generateProductGallery(product, screenType);
        }
    }
};

// re-creeam lista cand utilizatorul face resize la screen
window.addEventListener('resize', () => {
    generateProductSection(headphoneProducts);
}, false)

generateProductSection(headphoneProducts);