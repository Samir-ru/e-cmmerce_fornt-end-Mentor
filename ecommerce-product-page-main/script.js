const small = document.getElementsByClassName("small");


for(let i = 0; i < small.length; i++){
    small[i].style.backgroundImage  = `url("images/image-product-${i + 1}-thumbnail.jpg")`;
}


