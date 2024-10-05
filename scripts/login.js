document.querySelector("#loginbtn").addEventListener("click",enterToPage);
    var cart = [];
    function enterToPage(){
        
        let text1 = document.querySelector("#uname").value;
        let text2 = document.querySelector("#psw").value;
        let output = JSON.parse(localStorage.getItem("signin1"))
        //console.log(output)
       output.forEach(element => {
         if (text1 === element.Username && text2 === element.password){
            alert(element.Username)
            cart.push(element.Username)
            console.log(cart)
            window.location.href = "menspage.html"
            localStorage.setItem("cartname1",JSON.stringify(cart))
            
         }
       /* else {
            //alert("details not found")
            window.location.href="signuppage.html"
        }*/
       });
        }