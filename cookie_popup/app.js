const timelineOfAnimations = gsap.timeline({
    defaults: { duration: 0.75, ease: "power1.out" },
});

//? These animations are chained one at a time because of the timeline
timelineOfAnimations.fromTo(
    ".cookie-container",
    { scale: 0 },
    { scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5 }
);
timelineOfAnimations.fromTo(
    ".cookie",
    { opacity: 0, x: -50, rotation: "-45deg" },
    { opacity: 1, x: 0, rotation: "0deg" },
    "<70%" //? the 50% means that it will start at halfway of the previous animation
);
timelineOfAnimations.fromTo(
    ".text",
    { x: 30, opacity: 0 },
    { x: 0, opacity: 1 },
    "<" //? This makes it sync up with the previous animation
);

//! Cookie jump
timelineOfAnimations.fromTo(
    ".cookie",
    { y: 0, rotation: "0deg" },
    { y: -20, yoyo: true, repeat: -1, rotation: "-20deg" }
);
timelineOfAnimations.fromTo(
    "#crumbs",
    { y: 0, rotation: "0deg" },
    { y: -10, yoyo: true, repeat: -1, rotation: "-20deg" },
    "<"
);

//! Cookie fade-out
const button = document.querySelector("button");

button.onclick = () => {
    gsap.to(".cookie-container", {
        opacity: 0,
        y: 100,
        duration: 0.75,
        ease: "power1.out",
    });
};
