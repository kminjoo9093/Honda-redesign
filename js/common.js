//gnb popup & gnb background
$(".nav-btns .menu-icon").click(function () {
  $(".gnb").css("transform", "translateX(0)");
  $('.gnb-bg').addClass('active');
});
$(".close-icon-w, .gnb-bg").click(function () {
  $(".gnb").css("transform", "translateX(100%)");
  $('.gnb-bg').removeClass('active');
});

// gnb 메뉴 hover
$(".nav-list a").mouseenter(function () {
  $(this).siblings().removeClass("active");
  $(this).addClass("active");

  $(".nav-col-02 > div").removeClass("active");
  $("#" + $(this).attr("data-nav")).addClass("active");
});

// footer family site
$(".family-site").click(function () {
  $(this).toggleClass("active");
});