
let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/game-over-icon.png') {
		myImage.setAttribute('src','images/retro-game-icon.png');
	}
	else {
		myImage.setAttribute('src','images/game-over-icon.png');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName) {
		setUserName();	
	}
	else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Game Over! "' + myName + '"';
	}
}

if(!localStorage.getItem('name') || !(localStorage.getItem('name') === null)) {
	setUserName();
}
else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Game Over! "' + myName + '"';
}

myButton.onclick = function() {
	setUserName();
}
