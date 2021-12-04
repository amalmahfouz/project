let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let formBtn = document.querySelector('#login-icon');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let signupForm = document.querySelector('.Signup-form-container');
let formclosesignup = document.querySelector('#form-close-sign');
let signup = document.querySelector('#signup');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    signupForm.classList.remove('active');
}

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
    
});

signup.addEventListener('click', () =>{
    signupForm.classList.add('active');
});

formclosesignup.addEventListener('click', () =>{
    signupForm.classList.remove('active');
    loginForm.classList.remove('active');
});
