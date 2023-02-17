
const form = document.forms[0];

let span = document.querySelector(".non-show");

document.querySelector("[name='password']").addEventListener("focus", function(){
    span.classList.toggle("non-show");
 span.classList.add("help");
})
document.querySelector("[name='password']").addEventListener("blur", function(){
    span.classList.add("non-show");
 span.classList.toggle("help");
})

form.passwordConfirm.addEventListener("input", function(){
    if(form.passwordConfirm.value != form.password.value){
        form.passwordConfirm.setCustomValidity("Confirm password doesn't match");
        form.password.setCustomValidity("Password doesn't match");
    }
    else{
        form.passwordConfirm.setCustomValidity("");
        form.password.setCustomValidity("");

    }
})


