'use strict'

let element = document.getElementById('timer');

let startTimer = 40; 

function changeTimer() {
	if (startTimer === 0) {
		clearInterval(interval);
		alert('Вы победили в конкурсе!');
	}
	element.textContent = startTimer;
	startTimer --;
}

setInterval(startTimer, 1000);