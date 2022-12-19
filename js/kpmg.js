$(document).ready(function() {
    $(".global-brands").owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        navText: false,
        margin: 10,
        nav: false,
        dots: false,
        autoplayTimeout: 2000,
        smartSpeed: 800,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 4
            },
            769: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });
});

$(document).ready(function() {
    $(".testimonials").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        navText: false,
        margin: 10,
        nav: false,
        dots: true,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            769: {
                items: 1
            }
        }
    });
});




$(document).ready(function() {
    $(".awards").owlCarousel({
        items: 2,
        loop: true,
        autoplay: false,
        margin: 60,
        navText: [" <img src='images/left-arrow.svg'>", "<img src='images/right-arrow.svg'>"],
        nav: true,
        dots: false,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            601: {
                items: 2
            }
        }
    });


    $(".projects").owlCarousel({
        items: 2,
        loop: true,
        autoplay: false,
        margin: 60,
        navText: [" <img src='images/left-arrow.svg'>", "<img src='images/right-arrow.svg'>"],
        nav: true,
        dots: false,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            769: {
                items: 2
            }
        }
    });

    $(".archive").owlCarousel({
        items: 2,
        loop: true,
        autoplay: false,
        margin: 60,
        navText: [" <img src='images/left-arrow.svg'>", "<img src='images/right-arrow.svg'>"],
        nav: true,
        dots: false,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            769: {
                items: 2
            }
        }
    });
});


$(document).ready(function() {
    $('.tab-a').click(function() {
        $(".tab").removeClass('tab-active');
        $(".tab[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active");
        $(".tab-a").removeClass('active-a');
        $(this).parent().find(".tab-a").addClass('active-a');
    });
});



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



$(document).ready(function() {
    $('.mobile_menu').click(function() {
        $(".navigation").slideToggle(600)
    })
});