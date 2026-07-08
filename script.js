var tl = gsap.timeline()
tl.from("#nav h2 ",{
    y:-30,
    opacity:0,
    duration:1,
   
    


})

tl.from("#part h4 ",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.3


})


tl.from("#page1 #section1 h1",{
    opacity:0,
   x:-100,
    duration:1,
    stagger:0.8,
    
    
})
tl.from("#image",{
    opacity:0,
})

tl.from(" #image",{
  y:-20,
  duration:1.5,
  repeat:-1,
  yoyo:true,


})

gsap.to("#page2 h1",{
   transform: "translate(-200%)",
  
  
   scrollTrigger:{
    trigger:"#page2 ",
    scroller:"body",
    markers:true,
    start:"top 0%",
    end:"top -100%",
    scrub:4,
    pin:true,
   }
})


var url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaw_Y9lIwLsrX5x94PPmk0uvGaTf1FfseVEKfJPE7RO1llMoUs"


