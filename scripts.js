$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.pro1').click(function(){
        window.open('https://github.com/salonigupta1/AceStart');
    });

    $('.pro2').click(function(){
        window.open('https://github.com/Samiksha99/AMU-HACK-1.0');
    });

    $('.pro3').click(function(){
        window.open('https://github.com/salonigupta1/Coin-Man');
    });
    $('.pro4').click(function(){
        window.open('https://play.google.com/store/apps/details?id=com.saloni.notes_app');
    });

    $('.pro5').click(function(){
        window.open('https://github.com/salonigupta1/Social-Hunt');
    });

    $('.pro6').click(function(){
        window.open('https://github.com/salonigupta1/HackNews-App');
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["a Competitive Programmer", "an Software Developer", "a Designer", "a Freelancer", "a Gallivanter"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["a Coder", "a Software Developer", "a Designer", "a Freelancer", "a Gallivanter"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.card').click(function(){
        $(this).find('a').trigger('click');
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
