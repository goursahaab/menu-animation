var tm=gsap.timeline()
tm.from(".navbar",{
    right : -700 ,
    duration : 1,
    // delay :,
    opacity : 0,
})
tm.from(".navbutton a",{
    // right :  ,
    x : 200,
    duration : 1,
    // delay :1,
    opacity : 0,
    stagger : .3,
})
tm.pause()

var navbar=document.querySelector(".navbar")
var navbutton=document.querySelector(".navbutton a")
var menu=document.querySelector("nav h3")
var close=document.querySelector(".close")

menu.addEventListener("click",function(){
    tm.restart()
})

close.addEventListener("click",function(){
    tm.reverse()
})