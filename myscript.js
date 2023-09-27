var nameError=document.getElementById('name-error');
var emailError=document.getElementById('mail-error');
var msgError=document.getElementById('msg-error');
var submitError=document.getElementById('submit-error');

function validateName(){
    var name=document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.innerHTML="Name is required";
        return false;
    }
    if(name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)){
        nameError.innerHTML="Please enter full name correctly";
        return false;
    }
    if(name.match(/^\d/)){
        nameError.innerHTML="Name can not contain digit";
        return false;
    }
    document.getElementById('contact-name').style.color="seagreen";
    nameError.innerHTML="Valid";
    return true;
}

function validateEmail(){
    var email=document.getElementById('contact-email').value;
    if(email.length == 0){
         emailError.innerHTML = "Email is required";
         return false;
    }
    if(!email.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        emailError.innerHTML = "Invalid email";
        return false;
    }
    
    document.getElementById('contact-email').style.color="seagreen";
    emailError.innerHTML = 'valid';
    return true;


}

function validateMsg(){
    var msg=document.getElementById('contact-msg').value;
    var req = 30;
    var left = req - msg.length;
    if(left>0){
         msg.innerHTML = "More characters required";
         return false;
    }
    
    document.getElementById('contact-msg').style.color="seagreen";
    msgError.innerHTML = 'valid';
    return true;


}

function validateForm(){
    if(!validateName() || !validateEmail() || !validateMsg()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to proceed';
        setTimeout(function(){submitError.style.display = 'none';},3000)
        return false
    }
}