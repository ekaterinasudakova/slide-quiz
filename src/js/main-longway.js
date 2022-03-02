let pageWelcome = document.querySelector('.page-welcome')
let page01 = document.querySelector('.page-q1')
let page02 = document.querySelector('.page-q2')
let page03 = document.querySelector('.page-q3')
let page04 = document.querySelector('.page-q4')
let page05 = document.querySelector('.page-q5')
let pageEnd = document.querySelector('.page-end')

pageWelcome.style.display = "flex"

let prevButtonPage01 = document.querySelector('.page-q1 .prev')
let prevButtonPage02 = document.querySelector('.page-q2 .prev')
let prevButtonPage03 = document.querySelector('.page-q3 .prev')
let prevButtonPage04 = document.querySelector('.page-q4 .prev')
let prevButtonPage05 = document.querySelector('.page-q5 .prev')
let prevButtonPageEnd = document.querySelector('.page-end .prev')

let nextButtonPageWelcome = document.querySelector('.page-welcome .next')
let nextButtonPage01 = document.querySelector('.page-q1 .next')
let nextButtonPage02 = document.querySelector('.page-q2 .next')
let nextButtonPage03 = document.querySelector('.page-q3 .next')
let nextButtonPage04 = document.querySelector('.page-q4 .next')
let nextButtonPage05 = document.querySelector('.page-q5 .next')




nextButtonPageWelcome.addEventListener('click', function (){
    pageWelcome.style.display = "none"
    page01.style.display = "flex"
})

nextButtonPage01.addEventListener('click', function (){
    page01.style.display = "none"
    page02.style.display = "flex"
})
nextButtonPage02.addEventListener('click', function (){
    page02.style.display = "none"
    page03.style.display = "flex"
})
nextButtonPage03.addEventListener('click', function (){
    page03.style.display = "none"
    page04.style.display = "flex"
})
nextButtonPage04.addEventListener('click', function (){
    page04.style.display = "none"
    page05.style.display = "flex"
})
nextButtonPage05.addEventListener('click', function (){
    page05.style.display = "none"
    pageEnd.style.display = "flex"
})

prevButtonPage01.addEventListener('click', function (){
    page01.style.display = "none"
    pageWelcome.style.display = "flex"
})
prevButtonPage02.addEventListener('click', function (){
    page02.style.display = "none"
    page01.style.display = "flex"
})
prevButtonPage03.addEventListener('click', function (){
    page03.style.display = "none"
    page02.style.display = "flex"
})
prevButtonPage04.addEventListener('click', function (){
    page04.style.display = "none"
    page03.style.display = "flex"
})
prevButtonPage05.addEventListener('click', function (){
    page05.style.display = "none"
    page04.style.display = "flex"
})
prevButtonPageEnd.addEventListener('click', function (){
    pageEnd.style.display = "none"
    page05.style.display = "flex"
})


