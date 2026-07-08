function animated(){
    var h1 = document.querySelector("h1")

var h1Text = h1.textContent

var splittedText = h1Text.split("")

var half = (splittedText.length)/2

var clutter =  ""

splittedText.forEach(function(elem,idx){

    if (elem === " ") {
        clutter += "&nbsp;"
    }
   if (idx < half) {
        clutter += `<span class="a">${elem}</span>`
   }
   else{
         clutter += `<span class="b">${elem}</span>`
   }
   
})

h1.innerHTML = clutter
console.log(h1)
}

animated()

gsap.from(" h1 .a",{
    y:70,
    opacity:0,
    duration:0.6,
    delay:0.8,
    stagger:0.15,
})

gsap.from(" h1 .b",{
    y:70,
    opacity:0,
    duration:0.6,
    delay:0.8,
    stagger:-0.15,
})
