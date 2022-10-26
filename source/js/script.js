(function ($) {
  'use strict';

  // ----------------------------
  // AOS
  // ----------------------------
  AOS.init({
    once: true
  });

  $("[data-custom-tab='true']").each(function (index, element) {
    //loop through to find tabs on page
    $(element).find('.tab-navbar li a').each(function (index2, tab) {
      let currTarget = null;
      let currTab = null;
      $(tab).on('click', function (event) {
        currTab = $(this);
        currTarget = $(this).data().customTarget;

        $(element).find('.tab-navbar li a').each(function (index3, tabs) {
          $(tabs).removeClass('active');
        })

        $(element).find('.tab-container .tab-card').each(function (index4, card) {
          if ($(card).attr('id') === currTarget) {
            $(card).addClass('active');
          } else {
            $(card).removeClass('active');
          }
        })

        $(currTab).addClass('active')

      })
    })
  })



  $(window).on('scroll', function () {
    //.Scroll to top show/hide
    var scrollToTop = $('.scroll-top-to');
    var navbarMenu = $('.main-nav');
    scroll = $(window).scrollTop();
    if (scroll >= 100) {
      scrollToTop.fadeIn(200);
      navbarMenu.addClass('fixed-top');
    } else {
      scrollToTop.fadeOut(100);
      navbarMenu.removeClass('fixed-top');

    }
  });
  // scroll-to-top
  $('.scroll-top-to').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  $(document).ready(function () {

    // navbarDropdown
    if ($(window).width() < 992) {
      $('.main-nav .dropdown-toggle').on('click', function () {
        $(this).siblings('.dropdown-menu').animate({
          height: 'toggle'
        }, 300);
      });
    }

    $('.hero-slider').slick({
      autoplay: true,
      autoplaySpeed: 2000,
    })

    // -----------------------------
    //  Testimonial Slider
    // -----------------------------
    $('.testimonial-slider').slick({
      slidesToShow: 2,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


    // -----------------------------
    //  Video Replace
    // -----------------------------
    $('.video-box i').click(function () {
      var video = '<iframe class="border-0" allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
      $(this).replaceWith(video);
    });


    // -----------------------------
    //  Count Down JS
    // -----------------------------
    var syoTimer = $('#simple-timer');
    if (syoTimer.length !== 0) {
      $('#simple-timer').syotimer({
        year: 2023,
        month: 9,
        day: 1,
        hour: 0,
        minute: 0
      });
    }


    // -----------------------------
    //  Story Slider
    // -----------------------------
    $('.about-slider').slick({
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true
    });


    // -----------------------------
    //  Quote Slider
    // -----------------------------
    $('.quote-slider').slick({
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true
    });

    // -----------------------------
    //  Client Slider
    // -----------------------------
    $('.client-slider').slick({
      slidesToShow: 4,
      infinite: true,
      arrows: false,
      // autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        }
      ]
    });

    $('.client-portfolio').slick({
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
    });

    const path = window.location.pathname;
    const page = path.split("/").pop().split(".")[0];

    if (page === "about") {
      document.documentElement.style.setProperty('--primary-color', 'var(--primary-color-2)');
    }

    if (page === "services") {
      document.documentElement.style.setProperty('--primary-color', 'var(--primary-color-3)');
    }

    if (page === "portfolio") {
      document.documentElement.style.setProperty('--primary-color', 'var(--primary-color-4)');
    }

    if (page === "contact") {
      document.documentElement.style.setProperty('--primary-color', 'var(--primary-color-5)');
    }

    if ($("#loading-spinner").length !== 0) {
      $("#loading-spinner").css({ display: 'none' })
    }


    // scroll
    // $('.scrollTo').on('click', function (e) {
    //   e.preventDefault();
    //   var target = $(this).attr('href');
    //   $('html, body').animate({
    //     scrollTop: ($(target).offset().top)
    //   }, 500);
    // });

  });

})(jQuery);