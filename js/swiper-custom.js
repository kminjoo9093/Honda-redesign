// swiper custom

// ========= section04 slide custom ==========
const swiper = new Swiper(".car-swiper, .bike-swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".car-pagination, .bike-pagination",
    type: "fraction",
    renderCustom: function (swiper, current, total) {
      return `<span class="swiper-pagination-current">${current}</span>
      <img src="images/slash.svg" alt="slash icon">
      <span class="swiper-pagination-total">${total}</span>`;
    },
  },

  effect: "coverflow", // Coverflow 효과 적용
  grabCursor: true, // 커서를 드래그할 수 있도록 설정
  centeredSlides: true, // 중앙 슬라이드를 항상 화면에 보이도록 설정
  speed: 600,
  slidesPerView: "auto", // 화면에 여러 슬라이드가 보이도록 설정
  coverflowEffect: {
    rotate: 0, // 슬라이드 회전 각도
    stretch: 300, // 슬라이드 간의 간격
    depth: 900, // 슬라이드의 깊이
    modifier: 1, // 효과 강도
    slideShadows: false, // 슬라이드 그림자 효과 활성화
  },
  breakpoints: {
    1100: {
      slidesPerView: "auto",
      effect: "coverflow"
      // spaceBetween: 100
    },
    300: {
      slidesPerView: 1,
      effect: "slide",
      // spaceBetween: 200,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// *** bike name ***
// 제이쿼리
// let bikeName = $('.bike-swiper .swiper-slide-active').find('.slide-item-name').text();
// $('.bike-name').text(bikeName);

// $('.swiper-button-prev, .swiper-button-next').click(function(){
//   $('.bike-name').stop(true, true).css({'left': '600px'})
//   bikeName = $('.bike-swiper .swiper-slide-active').find('.slide-item-name').text();
//   $('.bike-name').text(bikeName).animate({
//     left: 1000,
//   }, 500, 'swing')
// })

// ********** car / bike name change 자바스크립트 **********
showItemName(".car-swiper", ".car-name");
showItemName(".bike-swiper", ".bike-name");

function showItemName(slideTarget, name) {
  let slide = document.querySelector(slideTarget);
  let activeSlide = slide.querySelector(".swiper-slide-active");
  let nameContent = activeSlide.querySelector(".slide-item-name").textContent;
  const slideArrows = slide.querySelectorAll(
    ".swiper-button-prev, .swiper-button-next"
  );
  let itemName = document.querySelector(name);
  itemName.textContent = nameContent;

  slideArrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      itemName.classList.remove("first-show");
      itemName.classList.remove("active");

      activeSlide = slide.querySelector(".swiper-slide-active");
      nameContent = activeSlide.querySelector(".slide-item-name").textContent;
      itemName.textContent = nameContent;

      setTimeout(() => {
        itemName.classList.add("active");
      }, 50);
    });
  });
}

// ========= Modal slide custom ==========
var carSwiper = new Swiper(".swiper.car", {
  slidesPerView: 1,
  spaceBetween: 100,
  loop: true,
  // autoHeight: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});
var bikeSwiper = new Swiper(".swiper.bike", {
  slidesPerView: 1,
  spaceBetween: 100,
  loop: true,
  // autoHeight: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});

// const courseBtns = document.querySelectorAll('.car-course-wrap .course-item');
// courseBtns.forEach((btn, index)=>{
//   btn.addEventListener('click', ()=>{
//     const modal = document.querySelector('.modal-wrap.course');
//     modal.classList.add('show');
//     modalSwiper.slideTo(index);
//   })
// })
openModal(".car-course-wrap", "car", carSwiper);
openModal(".bike-course-wrap", "bike", bikeSwiper);
function openModal(courseWrap, type, swiper) {
  const course = document.querySelector(courseWrap);
  const courseBtns = course.querySelectorAll(".course-item");
  const modalWrap = document.querySelector(".modal-wrap.course");

  courseBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      modalWrap.classList.add("show");
      const modals = document.querySelectorAll(".swiper.modal");
      Array.from(modals).forEach((modal) => {
        if (modal.dataset.type === type) {
          modal.classList.add("show");
          // 클릭한 슬라이드가 보이도록
          swiper.slideToLoop(index);
          swiper.update();
        }
      });
    });
  });
}

const closeModal = () => {
  const modalWrap = document.querySelector(".modal-wrap.course.show");
  modalWrap.classList.remove("show");
  const modals = document.querySelectorAll(".swiper.modal");
  Array.from(modals).forEach((modal) => {
    modal.classList.remove("show");
  });
};
