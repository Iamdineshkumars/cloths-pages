var cartarr;
var num =1;
var cartdata =JSON.parse(localStorage.getItem("cartdata")) || [];;
cartarr= JSON.parse(localStorage.getItem("cartname1"))
document.querySelector("#cname").innerText= cartarr[cartarr.length-1];
//let output1 = document.querySelectorAll(".mens")
let output = document.querySelectorAll(".cart_btn")
console.log(output)
console.log("output",typeof(output))
output.forEach((Element,index) => {

Element.addEventListener("click",function (){
    clickToAdd(Element,index)
})
  head = document.querySelectorAll(".mens")
})
function clickToAdd (Element,index){
    console.log(Element)//add to cart button event
    cartdata = head[index].innerText;
    localStorage.setItem("cartdata",JSON.stringify(cartdata))
    
    document.querySelector("#cart h2").innerText = num++;
}