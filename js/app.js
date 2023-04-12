$(document).ready(function(){
    let hamburger = document.querySelector('.hamburger');
    let close = document.querySelector('.close');
    let MobileNavOptions = document.querySelector('.mobile_nav_options');
    let contact = document.querySelector('.btn-primary-nav');
    let mobileNav = document.querySelector('.mobile-nav');
    
    hamburger.addEventListener('click',function(){
        mobileNav.classList.add('open');
    });

    close.addEventListener('click',function(){
        mobileNav.classList.remove('open');
    });

    MobileNavOptions.addEventListener('click',function(){
        mobileNav.classList.remove('open');
    });

    contact.addEventListener('click',function(){
        mobileNav.classList.remove('open');
    });
});