gsap.registerPlugin(ScrollTrigger);

//Hero Section

const heroTimeline = gsap.timeline({
  ScrollTrigger: {
    trigger: "#hero",
    start: "top bottom",
    toggleActions: "play none restart none",
  },
});

heroTimeline.from(".gsap-nav-item", {
  y: -30,
  opacity: 0,
  ease: "back",
  stagger: 0.2,
});

heroTimeline.from(".gsap__hero__item", {
  y: 30,
  opacity: 0,
  stagger: 0.2,
});

heroTimeline.from(".hero__illustration", {
  y: 30,
  opacity: 0,
});

heroTimeline.from(".hero__illustration__image", {
  rotate: -90,
  repeat: -1,
  yoyo: true,
  duration: 15,
});

gsap.from(".hero__illustration__text", {
  y: "-115px",
  repeat: -1,
  duration: 10,
  yoyo: true,
  opacity: 1,
  delay: 1,
});
