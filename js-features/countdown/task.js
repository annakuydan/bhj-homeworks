'use strict'

let startTimer = 59; 
let element = document.getElementById('timer');
let counter = setInterval(changeTimer, 100);
function changeTimer() {
	if (startTimer === 0) {
		clearInterval(counter);
		alert('Вы победили в конкурсе!');
	}
	element.textContent = startTimer;
	startTimer --;
}


