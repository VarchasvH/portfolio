const revealToSpan = () => {
  document.querySelectorAll(".reveal").forEach((elem) => {
    //* Create two spans
    let parent = document.createElement("span");
    let child = document.createElement("span");

    //* Add their classes to each span
    parent.classList.add("parent");
    child.classList.add("child");

    //* span parent gets child and child gets elem details
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    //* elem replaces it's value with parent span
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
};

const valueSetters = () => {
  gsap.set("#nav", { y: "-100%", opacity: 0 });
  gsap.set("#home .parent .child", {
    y: "100%",
  });
  gsap.set("#home .row img", {
    opacity: 0,
  });
};

const loaderAnimation = () => {
  let tl = gsap.timeline();
  tl.from("#loader  .child span", {
    x: 100,
    duration: 1.4,
    stagger: 0.2,
    delay: 1,
    ease: Power3.easeInOut,
  })
    .to("#loader  .parent .child", {
      y: "-100%",
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#loader", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#yellow", {
      height: "100%",
      top: 0,
      duration: 1,
      delay: -0.8,
      ease: Circ.easeInOut,
    })
    .to("#yellow", {
      height: 0,
      top: 0,
      delay: -0.5,
      duration: 1,
      ease: Circ.easeInOut,
      onComplete: () => {
        animateHomePage();
      },
    });
};

const animateHomePage = () => {
  let tl2 = gsap.timeline();
  tl2
    .to("#nav ", {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      ease: Power3.easeInOut,
    })
    .to("#home .parent .child ", {
      y: 0,
      stagger: 0.1,
      duration: 2,
      ease: Power3.easeInOut,
    })
    .to(".dev", {
      backgroundColor: "orange",
      // duration: 1,
      ease: Power3.easeInOut,
    })
    .to("#home .row img", {
      opacity: 1,
    });
};

// Run the functions
revealToSpan();
valueSetters();
loaderAnimation();
