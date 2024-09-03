'use strict'

let startTimer = 59; 
let element = document.getElementById('timer');

function changeTimer() {
	if (startTimer === 0) {
		clearInterval(interval);
		alert('Вы победили в конкурсе!');
	}
	element.textContent = startTimer;
	startTimer --;
}

setInterval(startTimer, 100);