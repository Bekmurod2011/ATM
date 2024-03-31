let start = document.querySelector('.start'),
    secondPage = document.querySelector('.second-page'),
    thirdPage = document.querySelector('.third-page'),
    fourthPage = document.querySelector('.fourth-page'),
    fivethPage = document.querySelector('.fiveth-page')


secondPage.style.display = 'none'
fourthPage.style.display = 'none'
fivethPage.style.display = 'none'
thirdPage.style.display = 'none'

start.addEventListener('click', () => {
    thirdPage.style.display = 'block'
    start.style.display = 'none'
})

let but = document.querySelectorAll('.but'),
    inp = document.querySelector('.inp'),
    enter = document.querySelector('.enter')


enter.addEventListener('click', () => {
    if(inp.value == '123456789') {
        fourthPage.style.display = 'block'
        thirdPage.style.display = 'none'
    }else {
        alert('Your password is error. Please try again')
        inp.value = ''
    }
})

let seeBalance = document.querySelector('.see-balance'),
    seeSolve = document.querySelector('.see-solve'),
    balance = document.querySelector('.balance'),
    solve = document.querySelector('.solve'),
    balanceValue = document.querySelector('.balance-value'),
    back = document.querySelector('.back'),
    back_2 = document.querySelector('.back-2')

seeBalance.addEventListener('click', () => {
    fivethPage.style.display = 'block'
    fourthPage.style.display = 'none'
    balanceValue.style.display = 'block'
})

back.addEventListener('click', () => {
    fourthPage.style.display = 'block'
    fivethPage.style.display = 'none'
})

seeSolve.addEventListener('click', () => {
    secondPage.style.display = 'block'
    fourthPage.style.display = 'none'
})

back_2.addEventListener('click', () => {
    fourthPage.style.display = 'block'
    secondPage.style.display = 'none'
})

let other = document.querySelector('.other'),
    money100 = document.querySelector('.money100'),
    money200 = document.querySelector('.money200'),
    money300 = document.querySelector('.money300'),
    money400 = document.querySelector('.money400'),
    money500 = document.querySelector('.money500'),
    money600 = document.querySelector('.money600'),
    money700 = document.querySelector('.money700'),
    money800 = document.querySelector('.money800'),
    money900 = document.querySelector('.money900'),
    otherValue = document.querySelector('.other-value'),
    inp_2 = document.querySelector('.inp-2'),
    enter_2 = document.querySelector('.enter-2')

otherValue.style.display = 'none'

other.addEventListener('click', () => {
    secondPage.style.display = 'none'
    otherValue.style.display = 'block'
})

