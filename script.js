
var t1 = gsap.timeline();

t1.from(".headermenu img,.headermenu h5,.headermenu h4,.headermenu button",{
    y: -100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.4
})

t1.from(".headinggsap",{
    x: -400,
    duration: 1,
    opacity: 0,
    stagger: 0.5
})

t1.from("#img1",{
    opacity: 0,
    scale: 0
})

t1.from("#img2",{
    duration: 0.5,
    x: 500,
    opacity: 0,
})

t1.from("#img3",{
    duration: 0.5,
    y: 500,
    opacity: 0,
})

t1.from("#scroll h6",{
    opacity: 0,
    scale: 0
})

t1.to("#scroll h6",{
    y: 30,
    duration: 0.5,
    repeat: -1,
    yoyo: true
})


