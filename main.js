let input =document.getElementById("input");
let img =document.querySelector(".img");

input.addEventListener("mouseenter" , function(){
    img.style.left ='68%';
})
input.addEventListener("mouseleave" , function(){
    img.style.left ='26%';
}
)