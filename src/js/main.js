//variables
let allPages = document.querySelectorAll('.page')
let lastPage = document.querySelector('.page-end')
let allPrevButtons = document.querySelectorAll('.prev')
let allNextButtons = document.querySelectorAll('.next')
let result = document.querySelector('.result')
let restartButton = document.querySelector('.restart')
let allJumpButtons = document.querySelectorAll('[data-jump]')
let answerChoicesAllQuestions = document.querySelectorAll('.answer-choices')
let allAnswerChoices = document.querySelectorAll('.answer-choices div')
let lastButton = document.querySelector('.last-button')


// index number in the array of the page we are currently looking at
let currentPage = 0 
console.log(restartButton)

//randomize answer order
let shuffleChildElements = function (parent) {
    let children = parent.children
    console.log(parent, children)
    for (let i = 0; i < children.length; i++) {
        let newPosition = Math.floor(Math.random() * children.length)
        parent.insertBefore(children[i], children[newPosition])
    }
}

answerChoicesAllQuestions.forEach(function(questionAnswerChoiceSet){
    console.log(questionAnswerChoiceSet)
    shuffleChildElements(questionAnswerChoiceSet)
})


let calculateResults = function (){
    //find how many selected items per category
    brokenRoad = document.querySelectorAll('.broken-road.selected').length
    pablo = document.querySelectorAll('.pablo.selected').length
    security = document.querySelectorAll('.security.selected').length
    weDidItKid = document.querySelectorAll('.we-did-it-kid.selected').length

    console.log("broken road count is " + brokenRoad)
    console.log("pablo count is " + pablo)
    console.log("security count is " + security)
    console.log("we did it kid count is " + weDidItKid)

    //find items that were selected most often
    highestScore = Math.max(brokenRoad, pablo, security, weDidItKid)
    console.log(highestScore)

    //while condition is true, loop and run the code until it's 
    //no true anymore, then proceed down to the next code block
    while(result.children.length){
        result.children[0].remove()
    }

    //if item has been selected most often, create an element and create
    //text that goes into element
    if(brokenRoad == highestScore){
        let divElement = document.createElement("div")
        let newContent = document.createTextNode("⥅ Broken Road ⥆")  
        divElement.appendChild(newContent)
        result.appendChild(divElement)
    }
    if(pablo == highestScore){
        let divElement = document.createElement("div")
        let newContent = document.createTextNode("⥅ Pablo ⥆")  
        divElement.appendChild(newContent)
        result.appendChild(divElement)
    }
    if(security == highestScore){
        let divElement = document.createElement("div")
        let newContent = document.createTextNode("⥅ Security ⥆")  
        divElement.appendChild(newContent)
        result.appendChild(divElement)
    }
    if(weDidItKid == highestScore){
        let divElement = document.createElement("div")
        let newContent = document.createTextNode("⥅ We Did It Kid ⥆")  
        divElement.appendChild(newContent)
        result.appendChild(divElement)
    }
}

//calculate results when clicking on the last next button
lastButton.addEventListener('click', calculateResults)


//highlight and add class to selected answer
let highlightAnswer = function(){
    //find next button and remove disabled attribute
    this.parentElement.parentElement.querySelector('.next').disabled = false
    this.parentElement.querySelectorAll('div').forEach(function(answerChoice){
        //loop through all answer choices and make sure none have
        //selected class
        answerChoice.classList.remove('selected')
    })
    this.classList.add('selected')
}

//go through each answer choice and listen for a click
allAnswerChoices.forEach(function(answerChoice) {
    answerChoice.addEventListener('click', highlightAnswer)
});


 allPages[0].style.display = 'flex'

 //logic making the buttons move pages
let jumpToPage = function(pageNumber){
    allPages[currentPage].style.display = 'none'
    currentPage = pageNumber
    allPages[currentPage].style.display = 'flex'
}

let nextPage = function (){
    allPages[currentPage].classList.remove('quick')
    allPages[currentPage].style.display = 'none'
    currentPage++
    allPages[currentPage].style.display = 'flex'
}

let prevPage = function (){
    allPages[currentPage].style.display = 'none'
    currentPage--
    allPages[currentPage].style.display = 'flex'
    allPages[currentPage].classList.add('quick')
}


//listen for clicks on buttons
restartButton.addEventListener('click', function(){
    jumpToPage(0)
})

allNextButtons.forEach(function(nextButton){
    nextButton.addEventListener('click', nextPage)
})

allPrevButtons.forEach(function(prevButton){
    prevButton.addEventListener('click', prevPage)
})

allJumpButtons.forEach(function(jumpButton){
    let pageNumber = jumpButton.getAttribute('data-jump')
    jumpButton.addEventListener('click', function(){
        jumpToPage(pageNumber)
    })
})



