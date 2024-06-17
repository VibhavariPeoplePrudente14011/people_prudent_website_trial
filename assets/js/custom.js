(function($) {

    'use strict';
    // Mean Menu
    $('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

    // Sticky, Go To Top JS
    $(window).on('scroll', function() {
        // Header Sticky JS
        if ($(this).scrollTop() > 200) {
            $('.navbar-area').addClass("is-sticky");
        } else {
            $('.navbar-area').removeClass("is-sticky");
        };
    });

    //PRE LOADER
    $(window).on('load', function() {
        var preload = $('.preloader');
        if (preload.length > 0) {
            preload.delay(800).fadeOut('slow');
        }
    })


    //odometer js
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    //AOS animation
    AOS.init({
        once: true,
        disable: function() {
            var maxWidth = 900;
            return window.innerWidth < maxWidth;
        }
    });

    // Skill
    jQuery('.skill-bar').each(function() {
        jQuery(this).find('.progress-content').animate({
            width: jQuery(this).attr('data-percentage')
        }, 2000);

        jQuery(this).find('.progress-number-mark').animate({
            left: jQuery(this).attr('data-percentage')
        }, {
            duration: 2000,
            step: function(now, fx) {
                var data = Math.round(now);
                jQuery(this).find('.percent').html(data + '%');
            }
        });
    });

    // Others Option For Responsive JS 
    $(".others-option-for-responsive .dot-menu").on("click", function() {
        $(".others-option-for-responsive .container .container").toggleClass("active");
    });

    //banner-slider
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayHoverPause: true,
        navText: [
            '<i class="flaticon-left-arrow-2"></i>',
            '<i class="flaticon-right-arrow-3"></i>',
        ],
    });

    //Project Slider
    $('.project-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        items: 2,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: [
            '<i class="flaticon-left-arrow-2"></i>',
            '<i class="flaticon-right-arrow-3"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,
            },

        }
    });

    //Project Slider2
    $('.project-slider2').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        items: 2,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: [
            '<i class="flaticon-left-arrow-2"></i>',
            '<i class="flaticon-right-arrow-3"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,
            },

        }
    });

    //Project Slider3
    $('.work-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        items: 2,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: [
            '<i class="flaticon-left-arrow-2"></i>',
            '<i class="flaticon-right-arrow-3"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },

        }
    });

    //Testimonials Slider
    $('.testimonials-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        items: 2,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: [
            '<i class="flaticon-left-arrow-2"></i>',
            '<i class="flaticon-right-arrow-3"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,
            },

        }
    });

    //Testimonials Slider2
    $('.testimonials-slider2').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: [
            '<i class="flaticon-left-arrow-2"></i>',
            '<i class="flaticon-right-arrow-3"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },

        }
    });

    //Partner Slider
    $('.partner-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 3,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            },

        }
    });

    //Services-slider
    $('.services-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: [
            '<i class="flaticon-left-arrow-2"></i>',
            '<i class="flaticon-right-arrow-3"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },

        }
    });

    //Reviews-slider
    $('.reviews-slider').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        center: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: [
            '<i class="flaticon-left-arrow-2"></i>',
            '<i class="flaticon-right-arrow-3"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
                center: false,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },

        }
    });

    //Parner-slider2
    $('.partner-slider2').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 3,
            },
            768: {
                items: 4,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 6,
            },

        }
    });

    //Benefits-slider
    $('.benefits-slider').owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: [
            '<i class="flaticon-left-arrow-2"></i>',
            '<i class="flaticon-right-arrow-3"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },

        }
    });

    //Portfolio-slider
    $('.portfolio-slider').owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: [
            '<i class="flaticon-left-arrow-2"></i>',
            '<i class="flaticon-right-arrow-3"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,
            },

        }
    });

    //* magnific popup
    $(document).ready(function() {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 100,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });

    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });

    // MixItUp Shorting
    $(function() {
        $('.shorting').mixItUp();
    });

    // Pricing Switcher
    let el = document.getElementById('filt-monthly');
    if (el) {
        let e = document.getElementById("filt-monthly"),
            d = document.getElementById("filt-yearly"),
            t = document.getElementById("switcher"),
            m = document.getElementById("monthly"),
            y = document.getElementById("yearly");
        e.addEventListener("click", function() {
            t.checked = false;
            e.classList.add("toggler--is-active");
            d.classList.remove("toggler--is-active");
            m.classList.remove("hide");
            y.classList.add("hide");
        });
        d.addEventListener("click", function() {
            t.checked = true;
            d.classList.add("toggler--is-active");
            e.classList.remove("toggler--is-active");
            m.classList.add("hide");
            y.classList.remove("hide");
        });
        t.addEventListener("click", function() {
            d.classList.toggle("toggler--is-active");
            e.classList.toggle("toggler--is-active");
            m.classList.toggle("hide");
            y.classList.toggle("hide");
        });
    }

    // Tabs
    $('.tab-menu li a').on('click', function() {
        var target = $(this).attr('data-rel');
        $('.tab-menu li a').removeClass('active');
        $(this).addClass('active');
        $("#" + target).fadeIn('slow').siblings(".tab-box").hide();
        return false;
    });

    // Subscribe form JS
    $(".newsletter-form").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } else {
            // everything looks good!
            event.preventDefault();
        }
    });

    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        } else {
            formErrorSub();
        }
    }

    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter, #validator-newsletter-2").addClass('hide');
        }, 4000)
    }

    function formErrorSub() {
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }

    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter, #validator-newsletter-2").removeClass().addClass(msgClasses).text(msg);
    }

    // FAQ Accordion
    $('.accordion').find('.accordion-title').on('click', function() {
        $(this).toggleClass('active');
        $(this).next().slideToggle('fast');
        $('.accordion-content').not($(this).next()).slideUp('fast');
        $('.accordion-title').not($(this)).removeClass('active');
    });


    // Count Time 
    function makeTimer() {
        var endTime = new Date("September 20, 2023 17:00:00 PDT");
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function() {
        makeTimer();
    }, 0);

    // AJAX MailChimp JS
    $(".newsletter-form").ajaxChimp({
        url: "https://Envy Theme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });

    // Go to Top
    $(window).on('scroll', function() {
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
    });
    // Click Event
    $('.go-top').on('click', function() {
        $("html, body").animate({
            scrollTop: "0"
        }, 500);
    });


    // 11. Mouse Custom Cursor
    function itCursor() {
        var myCursor = jQuery(".mouseCursor");
        if (myCursor.length) {
            if ($("body")) {
                const e = document.querySelector(".cursor-inner"),
                    t = document.querySelector(".cursor-outer");
                let n,
                    i = 0,
                    o = !1;
                (window.onmousemove = function(s) {
                    o ||
                        (t.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (e.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (n = s.clientY),
                        (i = s.clientX);
                }),
                $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
                        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                    }),
                    $("body").on("mouseleave", "button, a, .cursor-pointer", function() {
                        ($(this).is("a", "button") &&
                            $(this).closest(".cursor-pointer").length) ||
                        (e.classList.remove("cursor-hover"),
                            t.classList.remove("cursor-hover"));
                    }),
                    (e.style.visibility = "visible"),
                    (t.style.visibility = "visible");
            }
        }
    }
    itCursor();
    $(".tp-cursor-point-area").on("mouseenter", function() {
        $(".mouseCursor").addClass("cursor-big");
    });

    $(".tp-cursor-point-area").on("mouseleave", function() {
        $(".mouseCursor").removeClass("cursor-big");
    });
    $(".tp-cursor-point-area").on("mouseleave", function() {
        $(".mouseCursor").removeClass("cursor-big");
    });


})(jQuery);
try {
    // function to set a given theme/color-scheme
    function setTheme(themeName) {
        localStorage.setItem('irise_theme', themeName);
        document.documentElement.className = themeName;
    }
    // function to toggle between light and dark theme
    function toggleTheme() {
        if (localStorage.getItem('irise_theme') === 'theme-dark') {
            setTheme('theme-light');
        } else {
            setTheme('theme-dark');
        }
    }
    // Immediately invoked function to set the theme on initial load
    (function() {
        if (localStorage.getItem('irise_theme') === 'theme-dark') {
            setTheme('theme-dark');
            document.getElementById('slider').checked = false;
        } else {
            setTheme('theme-light');
            document.getElementById('slider').checked = true;
        }
    })();
} catch (err) {}