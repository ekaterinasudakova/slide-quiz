//variables
let allPages = document.querySelectorAll('.page')
let lastPage = document.querySelector('.page-end')
let allPrevButtons = document.querySelectorAll('.prev')
let allNextButtons = document.querySelectorAll('.next')
let result = document.querySelector('.result')
let restartButton = document.querySelector('.restart')
let allJumpButtons = document.querySelectorAll('[data-jump]')
// index number in the array of the page we are currently looking at
let currentPage = 0 
console.log(restartButton)

let answerChoicesAllQuestions = document.querySelectorAll('.answer-choices')
let answerChoicesQuestionOne = answerChoicesAllQuestions[0].querySelectorAll('div')
let answerChoicesQuestionTwo = answerChoicesAllQuestions[1].querySelectorAll('div')
let answerChoicesQuestionThree = answerChoicesAllQuestions[2].querySelectorAll('div')
let answerChoicesQuestionFour = answerChoicesAllQuestions[3].querySelectorAll('div')
let answerChoicesQuestionFive = answerChoicesAllQuestions[4].querySelectorAll('div')


let lastButton = document.querySelector('.last-button')
console.log(lastButton)



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

    if(result.hasChildNodes()){
        result.removeChildNodes(0)
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
    // console.log(this.parentElement.querySelectorAll('div'))
    this.parentElement.querySelectorAll('div').forEach(function(answerChoice){
        answerChoice.classList.remove('selected')
    })
    this.classList.add('selected')
}

//go through each answer choice and listen for a click
answerChoicesQuestionOne.forEach(function(answerChoice) {
    // console.log(answerChoice)
    answerChoice.addEventListener('click', highlightAnswer)
});
answerChoicesQuestionTwo.forEach(function(answerChoice) {
    // console.log(answerChoice)
    answerChoice.addEventListener('click', highlightAnswer)
});
answerChoicesQuestionThree.forEach(function(answerChoice) {
    // console.log(answerChoice)
    answerChoice.addEventListener('click', highlightAnswer)
});
answerChoicesQuestionFour.forEach(function(answerChoice) {
    // console.log(answerChoice)
    answerChoice.addEventListener('click', highlightAnswer)
});
answerChoicesQuestionFive.forEach(function(answerChoice) {
    // console.log(answerChoice)
    answerChoice.addEventListener('click', highlightAnswer)
});

//randomize answer order
let randomizeAnswers = function(){
    let allAnswers = allPages[currentPage].querySelector('.answer-choices')
    let answers = allAnswers.children
    let answersArr = Array.from(answers)
    console.log(answersArr)
    answersArr.sort(function(){
        if (Math.random() > 0.5){
			return -1
		}
		else {
			return 1
		}
    })
}


 allPages[0].style.display = 'flex'
 //logic making the buttons move pages
let jumpToPage = function(pageNumber){
    allPages[currentPage].style.display = 'none'
    currentPage = pageNumber
    allPages[currentPage].style.display = 'flex'
}

let nextPage = function (){
    allPages[currentPage].style.display = 'none'
    currentPage++
    allPages[currentPage].style.display = 'flex'
}

let prevPage = function (){
    allPages[currentPage].style.display = 'none'
    currentPage--
    allPages[currentPage].style.display = 'flex'
}


//listen for clicks on buttons
restartButton.addEventListener('click', function(){
    allPages[allPages.length - 1].style.display = 'none'

    allPages[0].style.display = 'flex'
})

//don't allow click through until selection is made
allNextButtons.forEach(function(nextButton){
    if(answerChoicesAllQuestions[currentPage].classList.contains(selected)){
        nextButton.addEventListener('click', nextPage)
    } else {
        nextButton.disabled
    }
    // console.log('got a next button', nextButton)
    
})

allPrevButtons.forEach(function(prevButton){
    // console.log('got a prev button', prevButton)
    prevButton.addEventListener('click', prevPage)
})

allJumpButtons.forEach(function(jumpButton){
    let pageNumber = jumpButton.getAttribute('data-jump')
    jumpButton.addEventListener('click', function(){
        jumpToPage(pageNumber)
    })
})



