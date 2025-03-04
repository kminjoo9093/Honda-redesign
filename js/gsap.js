document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // section02 red-circle
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#section02",
        start: "50% 100%",
        end: "100% 100%",
        scrub: true,
      },
    })
    .set(".red-circle", { scale: 1, ease: "none" })
    .to(".red-circle", { scale: 1.5, ease: "none"});

  // section02 circle rotate
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#section02",
        start: "40% 100%",
        end: "100% 100%",
        scrub: true,
      },
    })
    .from(".circle-rotate", { rotation: 0, ease: "power1.out" })
    .to(".circle-rotate", { rotation: -45, ease: "power1.out" });

  // section04 background
  let mm = gsap.matchMedia();

  mm.add("(min-width: 1100px)", () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section04",
          start: "0% 80%",
          end: "100% 100%",
          scrub: 1,
        },
      })
      .from(".section04-bg", { xPercent: 0, borderRadius: "0" })
      .to(".section04-bg", {
        xPercent: -30,
        borderRadius: "0 100rem 100rem 0",
      });
  });
});
