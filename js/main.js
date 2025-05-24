// scroll header
let scrollValue;
window.addEventListener("scroll", () => {
  scrollValue = window.scrollY;
});
window.addEventListener("wheel", (e) => {
  if (scrollValue > 315 && e.deltaY < 0) {
    document.querySelector(".scroll-header").classList.add("active");
  } else if (scrollValue < 330 || e.deltaY > 0) {
    document.querySelector(".scroll-header").classList.remove("active");
  }
});

// section01 chevron
showChevron();

function showChevron() {
  const section01 = document.querySelector("#section01");
  const chevronObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          document.querySelector(".ani-chevron").style.display = "block";
        } else {
          document.querySelector(".ani-chevron").style.display = "none";
        }
      });
    },
    {
      threshold: 0.7,
    }
  );

  chevronObserver.observe(section01);
}

// page-nav 클릭 언더바이동
const pageNavs = document.querySelectorAll(".page-nav li");
pageNavs.forEach((nav, _, array)=>{
  nav.addEventListener('click', (e)=>{
    e.preventDefault();
    array.forEach(el=>{
      el.classList.remove('active');
    })
    nav.classList.add('active');
  })
})

// section intersectionObserver
const section02 = document.querySelector("#section02"),
  section03 = document.querySelector("#section03"),
  section06 = document.querySelector("#section06");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((e) => {
    const section = e.target;
    if (e.isIntersecting) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
});

const sectionTargets = [section02, section03, section06];
sectionTargets.forEach((section) => {
  observer.observe(section);
});

//go-top button
const goToTopBtn = document.querySelector(".go-top-btn");
goToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
