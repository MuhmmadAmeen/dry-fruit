function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    error_message.style.padding = "10px";
    var text;

    if (name.length < 2 ){
        text = "Please Enter Valid Name (Minimum 3 characters)";
        error_message.innerHTML= text;
        return false;
    }
    
    if (subject.length < 10 ){
        text = "Please Enter Correct Subject (Minimum 10 characters)";
        error_message.innerHTML= text;
        return false;
    }
    if(isNaN(phoone) || phone.length !=10){
        text="Please Enter Valid Phone Number (10-digit)";
        error_message.innerHTML= text;
        return false;
    }
    if (subject.length <=140 ){
        text = "Please Enter More Than  140 characters";
        error_message.innerHTML= text;
        return false;
    }
    if (subject.length >=500 ){
        text = "Please Enter Less Than  500 characters";
        error_message.innerHTML= text;
        return false;
    }
    alert("Form Submitted Successfully! Thank You For Contacting Us");
    return true;

}