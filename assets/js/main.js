(function ($) {
  'use strict';

  // Preloader
  $(window).on('load', function () {
    $('#preloader')
      .delay(100)
      .fadeOut('slow', function () {
        $(this).remove();
      });
  });

  // AOS initialization
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1500,
      'easeInOutExpo'
    );
    return false;
  });

  // Mobile Navigation
  $('.mobile-nav').html($('.nav-menu').html());

  function toggleMenu() {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle').toggleClass('open');
    $('#header').toggleClass('header-mobile-nav');
    $('#header .container').toggleClass('mobile');
  }

  $(document).on('click', '.mobile-nav-toggle', function () {
    toggleMenu();
  });

  $(document).click(function (e) {
    const $container = $('.mobile-nav, .mobile-nav-toggle');
    if (!$container.is(e.target) && $container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        toggleMenu();
      }
    }
  });

  // Smooth scroll for the navigation menu
  $(document).on('click', '.nav-menu a, .mobile-nav a', function (e) {
    if (
      window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
      window.location.hostname === this.hostname
    ) {
      e.preventDefault();

      let scrollTo = $(this.hash).offset().top;
      const scrolled = 20;

      scrollTo -= $('#header').outerHeight();

      if (!$('#header').hasClass('header-scrolled')) {
        scrollTo += scrolled;
      }

      if ($(this).attr('href') === '#header') {
        scrollTo = 0;
      }

      $('html, body').animate(
        {
          scrollTop: scrollTo,
        },
        1500,
        'easeInOutExpo'
      );

      $('.nav-menu .active, .mobile-nav .active').removeClass('active');
      $(this).closest('li').addClass('active');

      if ($('body').hasClass('mobile-nav-active')) {
        toggleMenu();
      }
    }
  });

  // Recommendations carousel
  $('.recommendations-carousel').owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });
})(window.jQuery);
