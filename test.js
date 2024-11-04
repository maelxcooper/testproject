$(document).ready(function () {
  let g = "click";

  $(".toggle-bx h3").on(g, function () {
    $(this).next().slideToggle().siblings(".toggle-bx div").slideUp();
    $(this).toggleClass("sign").siblings(".toggle-bx h3").removeClass();
  });

  $(".read-more").on("click", function () {
    const $content = $(this).closest(".park-summary div");
    $content.find(".long-txt").slideDown();
    $(this).hide();
    $content.find(".read-less").css("display", "block");
  });

  $(".read-less").on("click", function () {
    const $content = $(this).closest(".park-summary div");
    $content.find(".long-txt").slideUp();
    $(this).hide();
    $content.find(".read-more").css("display", "block");
  });
});
