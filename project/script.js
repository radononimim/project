//partners slider

const slides1 = document.querySelectorAll('.logo1')
const slides2 = document.querySelectorAll('.logo2')
const slides3 = document.querySelectorAll(".logo3")
const slides = [slides1,slides2,slides3]

const prevBtn = document.querySelector('.previous-btn')
const nextBtn = document.querySelector('.next-btn')
const dotButtons = document.querySelectorAll('.dot-button')


prevBtn.addEventListener('click',previousSlide)
nextBtn.addEventListener('click',nextSlide)


let slideIndex = 0
let intervalId = null
dotButtons.forEach((button,index) => {
    button.addEventListener('click',()=>{
        slideIndex = index
        showSlide(slideIndex)

    })
})

initialSlider()

function initialSlider(){
    slides[slideIndex].forEach(slide=>{
        slide.classList.add('displayLogo')
    })
    dotButtons[slideIndex].classList.add('selected-dot')
    intervalId = setInterval(nextSlide,6000)
}

function showSlide(index){
    clearInterval(intervalId)
    if(index >= slides.length){
        slideIndex = 0
        
    }else if(index < 0){
        slideIndex= slides.length - 1
    }
    
    [...slides1,...slides2,...slides3].forEach(slide=>{
        slide.classList.remove('displayLogo')
    })
    slides[slideIndex].forEach(slide=>{
        slide.classList.add('displayLogo')
    })
    dotButtons.forEach(btn => {
        btn.classList.remove('selected-dot')
    })
    dotButtons[slideIndex].classList.add("selected-dot")
    intervalId = setInterval(nextSlide,6000)

}

function previousSlide(){
    slideIndex--
    showSlide(slideIndex)

}

function nextSlide(){
    slideIndex++
    showSlide(slideIndex)

}





//FAQ section


let questions = document.querySelectorAll(".questions li")

const removeActiveClasses = (questions) => {
    questions.forEach(question => {
        question.children[1].classList.remove("show-answer")
        question.children[0].children[0].classList.remove('dropdown-rotation')
    
    }
)
        
}

questions.forEach(question=>{
    question.addEventListener('click',()=>{

        if( question.children[1].classList.contains('show-answer')){
        question.children[1].classList.toggle("show-answer")
        question.children[0].children[0].classList.toggle('dropdown-rotation')


        }else {
            removeActiveClasses(questions)
            question.children[1].classList.toggle("show-answer")
            question.children[0].children[0].classList.toggle('dropdown-rotation')
        }
    })
})





// hamburger-menu

const menuBtn = document.querySelector('.hamburger-menu')
const menu = document.querySelector(".nav-links")
const overlay = document.querySelector('.overlay')
const bars = document.querySelectorAll('.bars')
const hamburger = document.querySelector('.hamburger-menu')

const arr = [menuBtn,overlay]

arr.forEach(item=>{
    item.addEventListener('click',()=>{
        
            menu.classList.toggle('show-menu')
            overlay.classList.toggle('show-overlay')
            document.querySelector('.html').classList.toggle('lock')
            if(item === menuBtn){
                hamburger.classList.toggle('menu-animation')
                bars[0].classList.toggle('bar1-animation')
                bars[1].classList.toggle('bar2-animation')
                bars[2].classList.toggle('bar3-animation')
            }
    
        })
})



