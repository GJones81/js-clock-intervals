let clock = document.getElementById('face')
let second_hand = document.getElementById('second')
let minute_hand = document.getElementById('minute')
let hour_hand = document.getElementById('hour')
const rotationPerSecond = 6
const rotationPerMinute = 0.1
const rotationPerHour = .0083
let degreesPerSecond = 0
let degreesPerMinute = 0
let degreesPerHour = 0
let currentSeconds = new Date()


const secondsCounter = () => {
	degreesPerSecond = degreesPerSecond + rotationPerSecond;
	second_hand.style.transform = `rotate(${degreesPerSecond}deg)`
}

const minutesCounter = () => {
	degreesPerMinute = degreesPerMinute + rotationPerMinute;
	minute_hand.style.transform = `rotate(${degreesPerMinute}deg)`
}

const hoursCounter = () => {
	degreesPerHour = degreesPerHour + rotationPerHour;
	hour_hand.style.tranform = `rotate(${degreesPerHour}deg)`
}

const startClock = () => {
	//degreesPerSecond = currentSeconds
	//degreesPerMinute = currentSeconds
	//degreesPerHour = currentSeconds
	setInterval(secondsCounter, 1000)
	setInterval(minutesCounter, 1000)
	setInterval(hoursCounter, 1000)
}

//startClock()
