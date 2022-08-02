!(function (n) {
  "use strict";

  function e() {
    var o = n(".cursor");
    n(window).mousemove(function (e) {
      o.css({
        top: e.clientY - o.height() / 2,
        left: e.clientX - o.width() / 2,
      });
    }),
      n(window)
        .mouseleave(function () {
          o.css({
            opacity: "0",
          });
        })
        .mouseenter(function () {
          o.css({
            opacity: "1",
          });
        }),
      n("a, .is-hoverable")
        .mouseenter(function () {
          o.css({
            transform: "scale(2.2)",
          });
        })
        .mouseleave(function () {
          o.css({
            transform: "scale(1)",
          });
        }),
      n(".btn, .nav-link")
        .mouseenter(function () {
          o.css({
            transform: "scale(0)",
          });
        })
        .mouseleave(function () {
          o.css({
            transform: "scale(1)",
          });
        });
  }

  function o() {
    var o = 0;
    window.onscroll = function () {
      var e = document.documentElement.scrollTop || document.body.scrollTop;
      80 < e && o <= e
        ? ((o = e), n(".navigation").addClass("header-unpinned"))
        : ((o = e), n(".navigation").removeClass("header-unpinned")),
        80 < e
          ? n(".navigation").addClass("header-scrollable")
          : ((o = e), n(".navigation").removeClass("header-scrollable"));
    };
  }

  function t() {
    n('[data-toggle="navbar-menu"]').on("click", function () {
      n(this).toggleClass("close"),
        n(".navbar-collapse").toggleClass("visible"),
        n("body").toggleClass("overflow-hidden");
    }),
      n(".navbar-nav .nav-item").on("click", function () {
        n('[data-toggle="navbar-menu"]').removeClass("close"),
          n(".navbar-collapse").removeClass("visible"),
          n("body").removeClass("overflow-hidden");
      });
  }

  function a() {
    new Swiper(".swiper.swiper-projects", {
      speed: 1e3,
      centeredSlides: !0,
      spaceBetween: 40,
      loop: !0,
      roundLengths: !0,
      grabCursor: !0,
      autoHeight: !0,
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 100,
        },
      },
    });
  }

  function s() {
    n(".project-block").each(function () {
      var e = n(this).attr("data-color");
      n(this)
        .mouseenter(function () {
          n("body, .navigation").css("background-color", e);
        })
        .mouseleave(function () {
          n("body, .navigation").css("background-color", "");
        });
    });
  }

  function r() {
    var t = document.querySelectorAll(".loop-text span"),
      a = null,
      s = (e, o) => {
        var n = (o + 1) % t.length;
        setTimeout(() => {
          a && (a.style.display = "none"),
            (e.style.display = "inline"),
            (a = e),
            s(t[n], n);
        }, 750);
      };
    s(t[0], 0);
  }

  function i() {
    n("[placeholder]")
      .focus(function () {
        n(this).attr("data-text", n(this).attr("placeholder")),
          n(this).removeAttr("placeholder");
      })
      .blur(function () {
        n(this).attr("placeholder", n(this).attr("data-text"));
      });
  }
  barba.use(barbaCss),
    barba.init({
      transitions: [
        {
          name: "loader-entry",
          beforeOnce() {},
          once() {},
          afterOnce() {},
        },
        {
          name: "loader",
          to: {
            namespace: ["loader"],
          },
          leave() {},
          enter() {},
        },
        {
          name: "single",
          to: {
            namespace: ["single"],
          },
          leave() {},
          enter() {},
        },
      ],
    }),
    barba.hooks.enter(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }),
    barba.hooks.after(() => {
      o(), t(), a(), s(), e(), r(), i();
    }),
    n(window).on("load", function () {
      setTimeout(() => {
        n("body").addClass("is-page-loaded");
      }, 200);
    }),
    n(document).ready(function () {
      o(), t(), a(), s(), e(), r(), i();
    }),
    n(document).on("scroll", function () {
      var e;
      (e =
        (100 * n(document).scrollTop()) /
        (n(document).height() - n(window).height())),
        n(".scroll-progress .scroll-bar").css("height", e + "%"),
        (e = 0 + n(window).scrollTop() / 3 + "deg"),
        n(".rotateOnScroll").css({
          "-webkit-transform": "rotateZ(" + e + ")",
          "-moz-transform": "rotateZ(" + e + ")",
          "-ms-transform": "rotateZ(" + e + ")",
          "-o-transform": "rotateZ(" + e + ")",
          transform: "rotateZ(" + e + ")",
        });
    });
})(jQuery);

var divisor = document.getElementById("divisor"),
  slider = document.getElementById("slider");
function moveDivisor() {
  divisor.style.width = slider.value + "%";
}
