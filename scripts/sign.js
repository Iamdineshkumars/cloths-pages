document.querySelector("#btn").addEventListener("click",signInData);
var arr = JSON.parse(localStorage.getItem("signin1")) || [];
function signInData(){
    //document.eventPreventDefault()
    document.querySelectorAll("#form").innerText = "";
    let object= {
        Username : document.querySelector("#name").value,
        Email : document.querySelector("#email").value,
        password : document.querySelector("#password").value,
    }
    arr.push(object)
    localStorage.setItem("signin1",JSON.stringify(arr))
    window.location.href="login.html"
}