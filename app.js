// querySelectors
let hourSelector = document.querySelector('#hour')
let minuteSelector = document.querySelector('#minute')
let secondSelector = document.querySelector('#second')

// get time
const fullDate = new Date()
const hour = fullDate.getHours()
const minute = fullDate.getMinutes()
const second = fullDate.getSeconds()

// update time
hourSelector.innerHTML = `${hour} :`
minuteSelector.innerHTML = `${minute} :`
secondSelector.innerHTML = `${second}`

// function takes in number as argument, and convert number to length-2 string
function twoChar(number) {
    let twoCharStr = ''
    if (number < 10) {
        twoCharStr = `0${number}`
    } else {
        twoCharStr = `${number}`
    }
    return twoCharStr
}