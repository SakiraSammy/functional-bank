// step 1:add click even handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // step 2:get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    // step 3:get password
    // 3.a set id on the Html element
    // 3.b get the element
    // 3.c get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);
    // step 4:verify email & password
    if (email ==='sam@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html'
    }
    else{
        console.log('Tui password vule gesis.toke ami tejjo putro korlm');
    }
})
// 

