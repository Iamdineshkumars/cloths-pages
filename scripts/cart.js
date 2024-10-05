cartarr= JSON.parse(localStorage.getItem("cartname1"))
document.querySelector("#cname").innerText= cartarr[cartarr.length-1];

let data = JSON.parse(localStorage.getItem("cartdata"))

document.querySelector("#btn").addEventListener("click",function (){
showData(data)})
function showData(data){
 let heading=document.createElement("h2")
 heading.innerText = data
 document.querySelector("#container").append(heading)

}