$(function () {
  // Menu
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // AOS Animation
  AOS.init({
    disable: "mobile",
    duration: 800,
    anchorPlacement: "center-bottom",
  });

  // Smooth Scroll
  $(function () {
    $(".nav-link").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 0,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // Gallery Slide
  $("#gallery-slide").owlCarousel({
    loop: true,
    center: true,
    autoplayHoverPause: false,
    autoplay: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });

  // Testimony Slide
  $("#testimony-slide").owlCarousel({
    loop: true,
    center: true,
    autoplayHoverPause: false,
    autoplay: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });
});
