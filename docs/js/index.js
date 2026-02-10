gsap.registerPlugin(ScrollTrigger);

gsap.to(".c", {
    scrollTrigger: {
        trigger: ".c",
        start: "top center",
        end: "top 100px",
        scrub: true,
        pin: ".b",
        markers: true
    },
    x: 400,
    rotation: 360,
    ease: "none",
    duration: 3
});
