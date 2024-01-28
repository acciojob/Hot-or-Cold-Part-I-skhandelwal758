//your code her
var btn = document.getElementById('btn');
var firstGuess;
var secondGuess;
var responseTag = document.getElementById('response');
var respondTag = document.getElementById('respond');
var randomNumber = Math.ceil(Math.random() * 100);

var b = function () {
	secretNumber = randomNumber;
	let input = document.getElementById('guess');
	let currentGuessedNumber = input.value;

	if(typeof(firstGuess) === 'undefined'){
		firstGuess = currentGuessedNumber;
	} else {
		if(Number(secondGuess) >= 0){
			firstGuess = secondGuess
		}
		secondGuess = currentGuessedNumber;
	}
	
    if(typeof(secondGuess) === 'undefined'){
        if(secretNumber === Number(firstGuess)){
            respondTag.textContent = 'match found';
        } else if(secretNumber > Number(firstGuess)){
            respondTag.textContent = 'guess higher';
        } else {
	        respondTag.textContent = 'guess lower';
        }
    } else {
        let diffWithFirstGuess = Math.abs(Number(secretNumber) - firstGuess);
        let diffWithSecondGuess = Math.abs(Number(secretNumber) - secondGuess);

		if(secretNumber === Number(currentGuessedNumber)){
            respondTag.textContent = 'match found';
        } else if(secretNumber > Number(currentGuessedNumber)){
            respondTag.textContent = 'guess higher';
        } else {
	        respondTag.textContent = 'guess lower';
        }
        if(diffWithFirstGuess > diffWithSecondGuess){
            responseTag.textContent = 'Getting hotter';
        } else {
	        responseTag.textContent = 'Getting Colder';
        }
    }
}

btn.addEventListener('click', b);


