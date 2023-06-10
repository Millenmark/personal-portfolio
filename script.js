gsap.registerPlugin(ScrollTrigger);

//Hero Section

const heroTimeline = gsap.timeline({
  scrollTrigger: {
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

// PROJECT SECTION
const horizontalSections = gsap.utils.toArray(".horizontal");

horizontalSections.forEach((section) => {
  let horizontalWrapper = section.querySelector(
    ".horizontal__animation-wrapper"
  );
  let horizontalContentWrapper = section.querySelector(
    ".animation__content-wrapper"
  );

  let getToValue = () =>
    -(horizontalContentWrapper?.scrollWidth - window.innerWidth / 2);

  if (window.innerWidth < 650) {
    getToValue = () =>
      -(horizontalContentWrapper?.scrollWidth - window.innerWidth / 2 - 140);
  }

  gsap.fromTo(
    horizontalWrapper,
    {
      x: () =>
        horizontalWrapper.classList.contains("to--right") ? 0 : getToValue(),
    },
    {
      x: () =>
        horizontalWrapper.classList.contains("to--right") ? getToValue() : 0,
      ease: "none",
      scrollTrigger: {
        trigger: horizontalWrapper,
        start: "top top",
        end: () =>
          "+=" +
          (horizontalContentWrapper?.scrollWidth - window.innerWidth / 2 - 120),
        pin: horizontalWrapper,
        invalidateOnRefresh: true,
        scrub: true,
      },
    }
  );
});

const projectsTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#projects",
    start: "top bottom",
    toggleActions: "restart none none none",
  },
});

projectsTimeline.from(".projects__main__title", {
  scale: 0.5,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "back",
});

projectsTimeline.from(".gsap-project__item", {
  y: 30,
  opacity: 0,
  stagger: 0.2,
});
