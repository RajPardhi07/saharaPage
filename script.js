
gsap.to(".image", {
    ease: Expo.easeInOut,
    width: "100%",
    duration: 2,
    stagger: 2,
    repeat:-1
})

gsap.to(".text h1", {
    ease: Expo.easeInOut,
    top: 0,
    repeat:-1,

    stagger: 2,
    duration: 2
})
gsap.from("#box2 .line", {
    ease: Expo.easeInOut,
color:"gray",
opacity:0,
y:-50,
duration:2,
stagger:2,
// repeat:-1
})
gsap.to(".text h1", {
    ease: Expo.easeInOut,
    top: "100%",
stagger: 2,
delay:2, 
repeat:-1,
    duration: 2
})

gsap.from("#box i", {
    y:-50,
    ease: Expo.easeInOut,
// repeat:-1,
    opacity:0,
    stagger:2

})

gsap.from("#arrow",{
    x:-50,
    opacity:0,
    duration:0.6,

})

gsap.from("#arrow i",{
    x:-30,
    ease: Expo.easeInOut,
    opacity:0,
    repeat:-1,
    duration:2
})

gsap.from("#main h2",{
    y:-50,
    opacity:0,
    duration:1
})

gsap.from("#menu i",{
    y:-50,
    opacity:0,
    duration:1
})