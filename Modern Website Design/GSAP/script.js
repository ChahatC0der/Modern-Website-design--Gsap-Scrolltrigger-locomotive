// gsap.to(".box",{
//     x:700,
//     y:50,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue",
//     rotate:360,
//     scale:0.5
// })

gsap.from(".box",{
    x:700,
    y:50,
    duration:2,
    delay:1,
    backgroundColor:"blue",
    rotate:360,
    scale:0.5
})

// gsap.to("h1",{
//     x:500,
//     color:"red",
//     duration:1,
//     delay:1,
//     stagger:1,
//     repeat:-2,
//     yoyo:true
// })

var t1 = gsap.timeline();

t1.to(".heading1",{
    x:500,
    duration:1,
    color:"red",
})

t1.to(".heading2",{
    x:500,
    duration:1,
    color:"red",

})

t1.to(".heading3",{
    x:500,
    duration:1,
    color:"red",
   
})

gsap.from(".box2 .box",{
    scale:0,
    // repeat:-1,
    scrollTrigger:{
        trigger:".box2 .box",
        scroller:"body",
        markers:true,
        // start:"top 30%",
        // end:"top 60%",
        scrub:5                     //animation smoothly dependent on scrolling
    }
})

gsap.from(".box3 .box",{
    scale:0,
    scrollTrigger:{
        trigger:".box3 .box",
        scroller:"body"
    }
})
