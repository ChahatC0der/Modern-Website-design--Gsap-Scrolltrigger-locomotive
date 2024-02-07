gsap.to(".page1 h1",{
    transform:"translateX(-200%)",
    fontWeight:50,
    fontSize:"30vw",
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:2,
        pin:true,
        yoyo:true
    }
})