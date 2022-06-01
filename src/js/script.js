// ========= Compare Image Slider Start ==========
document.addEventListener('DOMContentLoaded', domReady);

function domReady() {
    new Dics({
        container: document.querySelectorAll('.b-dics')[0],
        textPosition: 'bottom',
        hideTexts: true
    });
}
// ========= Compare Image Slider End ==========

// gsap.from(".do-more-image-big", {

//     scrollTrigger: {
//       trigger: ".do-more-image-big",
//       scrub: true,
//       start: "top bottom",
//       end: "top top",
//     },
//   });

  gsap.timeline({
    scrollTrigger: {
      trigger: ".do-more-image-big",
      start: "center 100%",
      end: "100% 0%",
    //   markers: true,
      scrub: true
    }
  })
  .fromTo(".do-more-image-big",  { xPercent: 50, yPercent: -20 }, { xPercent: -50, yPercent: 20 }, 0)
  .fromTo(".do-more-image-sm",  { xPercent: 100, yPercent: -70 }, { xPercent: -50, yPercent: 20 }, 0)
