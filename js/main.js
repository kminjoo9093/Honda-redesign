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

function showChevron(){
  const section01 = document.querySelector('#section01');
  const chevronObserver = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        document.querySelector('.ani-chevron').style.display = 'block';
      } else {
        document.querySelector('.ani-chevron').style.display = 'none';
      }
    })
  }, {
    threshold: 0.8  
  })

  chevronObserver.observe(section01);
}


// page-nav 클릭 언더바이동
$(".page-nav li").click(function () {
  $(this).siblings().removeClass("active");
  $(this).addClass("active");
});

// section intersectionObserver
const rotateCircle = document.querySelector(".circle-rotate"),
  redCircle = document.querySelector(".red-circle"),
  section02 = document.querySelector("#section02"),
  section03 = document.querySelector("#section03"),
  section06 = document.querySelector("#section06");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((e) => {
    const section = e.target;
    if (e.isIntersecting) {
      section.classList.add("active");
      if (section === section02) {
        scrollSection02();
      }
    } else {
      section.classList.remove("active");
    }
  });
});

const sectionTargets = [section02, section03, section06];
sectionTargets.forEach((section) => {
  observer.observe(section);
});

function scrollSection02() {
  //circle rotate & scale
  let rotationValue = 0;
  let scaleValue = 1;
  if (window.innerWidth > 600) {
    section02.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) {
        rotationValue -= 5;
        rotateCircle.style.transform = `rotate(${
          rotationValue < -40 ? -40 : rotationValue
        }deg)`;
        scaleValue += 0.05;
        redCircle.style.transform = `translate(50%, -50%) scale(${
          scaleValue > 1.3 ? 1.3 : scaleValue
        })`;
      } else {
        rotationValue += 5;
        rotateCircle.style.transform = `rotate(${
          rotationValue > 0 ? 0 : rotationValue
        }deg)`;
        scaleValue -= 0.05;
        redCircle.style.transform = `translate(50%, -50%) scale(${
          scaleValue < 1 ? 1 : scaleValue
        })`;
      }
    });
  } else {
    rotateCircle.style.transform = "rotate(0deg)";
    redCircle.style.transform = "translate(50%, -50%) scale(1)";
  }
}

//go-top button
const goToTopBtn = document.querySelector(".go-top-btn");
goToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
