$(document).ready(function () {

// animation start
    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');
            var delay = $(this).attr('data-delay');
            if (pozicija < scroll + windowHight - 50) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
            }
        });
    }



    animation();
    $(window).scroll(function () {
        animation();
    });
// animation end
    var headerNav = true;
    if (headerNav === false) {
        $('.toggle-submenu').css('display', 'none');
        $('.submenu').css('opacity', '0');
    } else {
        $('.navbar-nav').on('click', '.toggle-submenu', function (e) {
            e.preventDefault();
            $(this).toggleClass('fa-plus fa-minus');
            $(this).parent().next('.submenu').slideToggle();
        });
    }
    if ($('.profesionals-slider').length > 0) {
        $('.profesionals-slider').owlCarousel({
            items: 1,
            dots: false,
            nav: true,
            responsive:{
                768:{
                    dots: true,
                    nav: false
                }
            }
            
        });
    }
    /*
     if ($('.contact-form').length > 0) {
     $(function () {
     $(".contact-form").validate({
     highlight: function (element) {
     $(element).addClass("is-invalid").removeClass("is-valid");
     $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
     },
     unhighlight: function (element) {
     $(element).removeClass('is-invalid').addClass('is-valid');
     $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
     },
     rules: {
     name: {
     required: true
     },
     email: {
     required: true,
     email: true
     },
     message: {
     required: true,
     maxlength: 255
     
     }
     },
     messages: {
     name: {
     required: 'Name* is required field!!!'
     },
     email: {
     required: 'Email* is required field!!!',
     email: 'Please insert valid Email address!!!'
     },
     message: {
     required: 'Message* is required field!!!',
     maxlength: 'Max Message length is 255 characters !!!'
     
     }
     
     },
     errorElement: 'p',
     errorPlacement: function (error, element) {
     error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
     }
     
     });
     });
     }//Form Validation
     */

});