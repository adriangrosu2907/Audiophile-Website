const headphoneProducts = [
    {
        name: "XX99 Mark II Headphones",
        longName: "product-xx99-mark-two-headphones",
        description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        price: "$ 2,999",
        // imageCat: "assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg",
        // imageProd: "assets/product-xx99-mark-two-headphones/desktop/image-product.jpg",
        features: "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you are taking a business call or just in your own personal space, the auto on/off and pause features ensure that you will never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
        items: { item1: "1x Headphone Unit", item2: "2x Replacement Earcups", item3: "1x User Manual", item4: "1x 3.5mm 5m Audio Cable", item5: "1x Travel Bag" }
        // gallery: { image1: "assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg", image2: "assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg", image3: "assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg" }
    },

    {
        name: "XX99 Mark I Headphones",
        longName: "product-xx99-mark-one-headphones",
        description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
        price: "$ 1,750",
        // imageCat: "assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
        // imageProd: "assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
        features: "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
        items: { item1: "1x Headphone Unit", item2: "2x Replacement Earcups", item3: "1x User Manual", item4: "1x 3.5mm 5m Audio Cable" }
        // gallery: { image1: "assets/product-xx99-mark-one-headphones/desktop/image-gallery-1", image2: "assets/product-xx99-mark-one-headphones/desktop/image-gallery-2", image3: "assets/product-xx99-mark-one-headphones/desktop/image-gallery-3" }
    },

    {
        name: "XX59 Headphones",
        longName: "product-xx59-headphones",
        description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
        price: "$ 899",
        // imageCat: "assets/product-xx59-headphones/desktop/image-category-page-preview.jpg",
        // imageProd: "assets/product-xx59-headphones/desktop/image-product.jpg",
        features: "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
        items: { item1: "1x Headphone Unit", item2: "2x Replacement Earcups", item3: "1x User Manual", item4: "1x 3.5mm 5m Audio Cable" }
        // gallery: { image1: "assets/product-xx59-headphones/desktop/image-gallery-1", image2: "assets/product-xx99-mark-one-headphones/desktop/image-gallery-2", image3: "assets/product-xx99-mark-one-headphones/desktop/image-gallery-3" }
    }
]

const speakerProducts = [
    {}

]

const earphoneProducts = [
    {}

]


localStorage.setItem("headphoneProducts", JSON.stringify(headphoneProducts));

location.replace("/markTwo.html")
