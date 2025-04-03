// var productContainer=document.getElementById("products")
// var search=document.getElementById("search")
// var productlist=productContainer.querySelectorAll("div")


// search.addEventListener("keyup",function(){
//     var enteredvalue=event.target.value.toUpperCase()
//     for(count=0;count<productlist.length;count=count+1){
//         var productname=productlist[count].querySelector("p").textContent
//         if(productname.toUpperCase().indexOf(enteredvalue)<0)
//         {
//             productlist[count].style.display="none"
//         }else{
//             productlist[count].style.display="block"
//         }
//     }
        
// })


var productContainer = document.getElementById("product"); // Corrected ID
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll(".product-box"); // Selecting all the product boxes

search.addEventListener("keyup", function(event) {  // Passing the event object
    var enteredValue = event.target.value.toUpperCase(); // Ensure uppercase comparison
    for (var count = 0; count < productlist.length; count++) {
        var productName = productlist[count].querySelector("p").textContent; // Get the product name
        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none"; // Hide product if not matching
        } else {
            productlist[count].style.display = "block"; // Show product if matching
        }
    }
});
