//gnb popup open / close (with tab)
const openMenu = document.querySelectorAll(".nav-btns .menu-icon");
const closeMenu = document.querySelector(".close-icon-w");
const gnb = document.querySelector(".gnb");
const gnbBg = document.querySelector(".gnb-dim");

openMenu.forEach((btn)=>{
  btn.addEventListener("click", () => {
    handleGnb(true, ".theGo-btn");
  });
})
  
closeMenu.addEventListener("click", () => {
  handleGnb(false, ".page-nav a");
});
closeMenu.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleGnb(false, ".page-nav a");
  }
});

const handleGnb = (isOpen, targetFocus) => {
  [gnb, gnbBg].forEach((i) => {
    if (isOpen) {
      i.classList.add("active");
    } else {
      i.classList.remove("active");
    }
  });
  gnb.setAttribute("aria-hidden", !isOpen);

  document.querySelector(targetFocus).focus();
};

// gnb 메뉴 hover
$(".nav-list button").mouseenter(function () {
  $(this).siblings().removeClass("active");
  $(this).addClass("active");

  $(".nav-col-02 > div").removeClass("active");
  $("#" + $(this).attr("data-nav")).addClass("active");
});
// gnb tab focus
$(".nav-list button").keydown(function (e) {
  if (e.key === "Enter") {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    $(".nav-col-02 > div").removeClass("active");
    $("#" + $(this).attr("data-nav")).addClass("active");
  }
});

// footer family site
$(".family-site").click(function () {
  $(this).toggleClass("active");
});
