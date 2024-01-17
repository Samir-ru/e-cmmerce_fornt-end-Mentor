const small = [...document.getElementsByClassName("small")];
const mainImg = document.getElementsByClassName("mainImg")[0];
const qantity = document.getElementById("quantity");
const addCartBtn = document.getElementById("addToCart");
const cartBtn = document.getElementById("cart");

//iterations for the product image view area.....

small.forEach((item, index) => {

    item.style.backgroundImage = `url("images/image-product-${index + 1}-thumbnail.jpg")`;

    item.addEventListener("click", () => {
        mainImg.style.backgroundImage = `url("images/image-product-${index + 1}.jpg")`;
    })
});

// now for the increment and decrement button for the add to cart section

let count = 0;

function plus(){
    count++;
    quantity.innerHTML = count;
}

function minus(){
    count--;
    if(count <= 0){
        count = 0;
    }
    quantity.innerHTML = count;
}


// add to cart fucntionings 

addCartBtn.addEventListener("click", () => {
    
})







