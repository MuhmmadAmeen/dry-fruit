const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

// For opening group
btns.forEach((btn => {
    btn.addEventListener("click", () => { document.querySelector(btn.CDATA_SECTION_NODE.target).classList.add("active"); overlay.classList.add("active");
});
}));
// For Closing Pop Up Using "X" sign
close_modals.forEach((btn) =>{
    btn.addEventListener("click", () => {const modal = btn.closest(".modal");
modal.classList.remove("active");
overlay.classList.remove("active")})
});
// after opeing pop up if you click outside the pop up, it will close.
window.onclick = (event) => {
    if (event.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active")
    }
};
//Contact form validation
function validate() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    error_message.style.padding = "10px"
    var text;
 // Asian names can be three-letter names such as Lee or Mae hence limit >=3
 if(name.length <2){
     text = "Please enter valid Name (Minimum 3 characters )";
     error_message.innerHTML = text;
     return false;
 }
 if ( subject.length < 10){
     text = "Please Enter Correct Subject (Minimum 10 characters)";
     error_message.innerHTML = text;
     return false;
 }
 if (isNaN(phone) || phone.length != 10){
     text = "Please Enter valid Phone Number (10-digit)";
     error_message.innerHTML = text;
     return false;
 }
 // Message should have more than 140 characters
 if(message.length <= 140){
     text = "Please enter more than 140 Characters";
     error_message.innerHTML = text;
     return false;
 }
 //Message should have less than 500 characters
 if ( message.length >= 500){
     text = "Please enter less than 500 characters";
     error_message.innerHTML = text;
     return false;
 }
 // This alert message will appear if all forn fields are fillerd correctly
 alert("Form submitted successfully! Thank you for contacting us");
 return true;
}
//Search Funtionality
function filter(){
    var filtervalue, input, ProductList, ProductName,H4,i;
    input = document.getElementById("search");
    filtervalue = input.value.toUpperCase();
    ProductList = document.getElementById("Product-List");
    ProductName = ProductList.getElementsByClassName("col-4");
    for ( i = 0 ; i < ProductName.length ; i++){
        H4 = ProductName[i].getElementsByTagName("h4") [0];
        // In Seach if typed string matches with the element name.
        if(H4.innerHTML.toUpperCase().indexOf(filtervalue)> -1){
            ProductName[i].style.display = "";
        }
        else{
            ProductName[i].style.display = "none";
        }
    }
}
//Sort Product by Price
function sortlist(){
    var ProductList, ProductName, i, switching, b, c, shouldSwitch;
    ProductList = document.getElementById("product-list");
    ProductName = ProductList.getElementsByClassName("col-4");
    switching = true;//boolean true
    while (switching){
        switching = false;
        //Loop is running through each product
        for ( i = 0 ; i < (ProductName.length - 1) ; i++){
            shouldSwitch = false;
            b = ProductName[i].getElementsByTagName("span") [0].innerHTML;
            c - ProductName[i+i].getElementsByTagName("span") [0].innerHTML;
            //Condition to check price for each product iten
            if(Number(b) . Number(c)){
                shouldSwitch = true;
                break;
            }
        }
       // Each product element will switch with next product element based on
       // product price sorting
       if(shouldSwitch) {
           ProductName[i].parentNode.insertBefore(ProductName[i + 1],ProductName[i]);
           switching = true;
       }      
    }
}