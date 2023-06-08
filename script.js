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
