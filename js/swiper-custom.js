// =========== section04 Slide Custom ==========
const swiper = new Swiper(".car-swiper, .bike-swiper", {
  loop: true,

  pagination: {
    el: ".car-pagination, .bike-pagination",
    type: "fraction",
    renderCustom: function (swiper, current, total) {
      return `<span class="swiper-pagination-current">${current}</span>
      <img src="images/slash.svg" alt="slash icon">
      <span class="swiper-pagination-total">${total}</span>`;
    },
  },

  effect: "coverflow", 
  grabCursor: true, 
  centeredSlides: true, 
  speed: 600,
  slidesPerView: "auto", 
  coverflowEffect: {
    rotate: 0, 
    stretch: 300, 
    depth: 900, 
    modifier: 1, 
    slideShadows: false,
  },
  breakpoints: {
    1100: {
      slidesPerView: "auto",
      effect: "coverflow"
    },
    300: {
      slidesPerView: 1,
      effect: "slide",
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// =========== section04 Car / Bike Change Name ===========
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

// ============ Modal(Car / Bike Course) : Slide custom ==========
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
