// ========= Compare Image Slider Start ==========
document.addEventListener('DOMContentLoaded', domReady);

function domReady() {

    new Dics({
        container: document.querySelectorAll('.b-dics')[0],
        textPosition: 'bottom',
        hideTexts: true,
    });

}
// ========= Compare Image Slider End ==========


gsap.timeline()
.fromTo(".text-block",
    0.9,
    { opacity: 0, scale: 1.05, y: 10 },
    { opacity: 1, scale: 1, y: 0, stagger: 0.3}, 0)
.fromTo(".cover-para",
    0.9,
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, stagger: 0.3}, 1)
.fromTo(".cover-button",
    0.9,
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, stagger: 0.3}, 1);


gsap.timeline({
    scrollTrigger: {
        trigger: ".do-more-image-big",
        start: "center 100%",
        end: "100% 0%",
        scrub: true
    }
})
.fromTo(".do-more-image-big",  { xPercent: 50, yPercent: -20 }, { xPercent: -50, yPercent: 20 }, 0)
.fromTo(".do-more-image-sm",  { xPercent: 100, yPercent: -70 }, { xPercent: -50, yPercent: 20 }, 0)


ScrollTrigger.create({
    trigger: ".features",
    start:'top 80%',
    end:'bottom end',
    once: true,
    onEnter: () => featuresSection(),
});

function featuresSection() {

    if (window.matchMedia("(max-width: 560px)").matches) {
        gsap.fromTo(".featured-box",
            0.7,
            { opacity: 0,  y: 20 },
            { opacity: 1, y: 0,  stagger: 0.3}
        );
     }
     else {
        gsap.fromTo(".featured-box",
        0.7,
            { opacity: 0, rotate: 5, x: 70 },
            { opacity: 1, x: 0, rotate: 0, stagger: 0.3}
        );
     }
}


gsap.timeline({
    scrollTrigger: {
        trigger: "#footerSection",
        start:'top 80%',
        end:'bottom end',
    }
})
.fromTo(".footer-text-block",
    0.7,
    { opacity: 0, y: 15, scale: 1.1 },
    { opacity: 1, y: 0, scale: 1, stagger: 0.2}, 0)

.fromTo(".form-element",
    0.7,
    { opacity: 0, y: 15, scale: 1.1 },
    { opacity: 1, y: 0, scale: 1, stagger: 0.2}, 0.9);




$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
