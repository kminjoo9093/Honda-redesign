// =========== section04 Slide Custom ==========
const swiperConfig = {
  loop: true,
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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".car-pagination, .bike-pagination",
    type: "fraction",
    renderCustom: function (swiper, current, total) {
      return `<span class="swiper-pagination-current">${current}</span>
        <img src="images/slash.svg" alt="slash icon">
        <span class="swiper-pagination-total">${total}</span>`;
    },
  },
  breakpoints: {
    1100: {
      slidesPerView: "auto",
    },
    300: {
      slidesPerView: 1,
    },
  },
};

const swiper1 = new Swiper(".car-swiper", swiperConfig);
const swiper2 = new Swiper(".bike-swiper", swiperConfig);

// =========== section04 Car / Bike Change Name ===========

swiper1.on("slideChange", function () {
  updateName(".car-swiper", ".car-name");
});
swiper2.on("slideChange", function () {
  updateName(".bike-swiper", ".bike-name");
});

function updateName(swiperSelector, nameSelector) {
  const itemName = document.querySelector(nameSelector);
  itemName.textContent = "";
  itemName.classList.remove("first-show", "active");
  setTimeout(() => {
    showItemName(swiperSelector, nameSelector);
  }, 100);
}

function showItemName(slideTarget, name) {
  const slide = document.querySelector(slideTarget);
  const itemName = document.querySelector(name);
  const activeSlide = slide.querySelector(".swiper-slide-active");
  const nameContent = activeSlide.querySelector(".slide-item-name").textContent;

  itemName.textContent = nameContent;
  itemName.classList.add("active");
}

showItemName(".car-swiper", ".car-name");
showItemName(".bike-swiper", ".bike-name");

// ============ Modal(Car / Bike Course) : Slide custom ==========
var carSwiper = new Swiper(".swiper.car", {
  slidesPerView: 1,
  spaceBetween: 100,
  loop: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});
var bikeSwiper = new Swiper(".swiper.bike", {
  slidesPerView: 1,
  spaceBetween: 100,
  loop: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});

openModal(".car-course-wrap", "car", carSwiper);
openModal(".bike-course-wrap", "bike", bikeSwiper);

function openModal(courseWrap, type, swiper) {
  const modalWrap = document.querySelector(".modal-wrap.course");
  const course = document.querySelector(courseWrap);
  const courseBtns = course.querySelectorAll(".course-item");

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
