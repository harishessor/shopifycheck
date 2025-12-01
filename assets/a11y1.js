$(document).ready(function () {
  $(".promote__products-content > a > div.promote-product  > div > h2").attr({
    role: "heading",
    "aria-level": "3",
  });

  $(".section__color-wrapper > div > div.text-container > h2").attr(
    "role",
    "none"
  );

  $(".section__color-wrapper > div > div.text-container > h3").attr(
    "aria-level",
    "1"
  );

  $(".section__color-wrapper > div > div > header.text-container > h1").attr({
    role: "heading",
    "aria-level": "2",
  });

  $(".scroller scrollable-content > div > div >div.icon-container > svg").attr(
    "aria-hidden",
    "true"
  );

  $('.pswp__ui .pswp__prev-next-buttons > button[title="Previous"]')
    .attr("aria-label", "Previous Slide")
    .removeAttr("title");

  $('.pswp__ui .pswp__prev-next-buttons > button[title="Next"]')
    .attr("aria-label", "Next Slide")
    .removeAttr("title");

  let videoTitles = [
    "User review video 1",
    "User review video 2",
    "User review video 3",
    "User review video 4",
    "User review video 5",
    "User review video 6",
  ];
  $(
    "external-video > div > div.video-wrapper__poster-content > button.video-wrapper__play-button--ripple"
  ).each(function (index) {
    $(this).attr("title", videoTitles[index] || "User review video");
  });

  $(".section__color-wrapper > div> div > div.html > h1").attr({
    role: "heading",
    "aria-level": "3",
  });

  $(".section.videos.container > header > h3").attr({
    role: "heading",
    "aria-level": "2",
  });

  $(".drawer__header > p").attr({ role: "heading", "aria-level": "2" });

  $(".newsletter-modal > div > div.subs-popup__block > div > h2").attr(
    "role",
    "none"
  );

  $(".newsletter-modal > div > div.subs-popup__block").attr("role", "list");

  $(".newsletter-modal > div > div.subs-popup__block > div").attr(
    "role",
    "listitem"
  );

  $(".comparison > div > div.comparison__list.mobile-show > ul > li > h3").attr(
    "role",
    "none"
  );

  $(".benefits--content > div > div > h2").attr("role", "none");

  // $('.stamped-container > div.stamped-header-title').attr("role", "heading").attr("aria-level", "2");

  $(".stamped-summary-keywords-list > li").attr("role", "button");

  $(".contact__main > header > h1").attr({
    role: "heading",
    "aria-level": "2",
  });

  $(".faq-navigation > scroll-spy > ul > li.scroll-spy__item.is-visible").attr(
    "aria-current",
    "true"
  );

  $(
    ".container.vertical-breather .text-container > div.button-wrapper > a"
  ).attr("role", "button");

  $(".container .text-container > div.html > ul > li > a").css(
    "text-decoration",
    "underline"
  );

  $("div.verified--buyer-icon > img").attr("alt", "Verified");

  $("form.new-review-form").prepend(
    "<p>Fields marked with * are required.</p>"
  );

  console.log("A11y 1 Ready");
});

$(window).on("load", function () {
  $(".slick-list .paid--reviews-test").removeAttr("tabindex");
  $(".slick-track .carousel-cell.video-section").removeAttr("tabindex");

  console.log("A11y 1 load");
});

