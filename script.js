//your code her
var btn = document.getElementById('btn');
var firstGuess;
var secondGuess;
var responseTag = document.getElementById('response');
var respondTag = document.getElementById('respond');
var randomNumber = Math.ceil(Math.random() * 100);

console.log(responseTag.);
var b = function (secretNumber) {
	let input = document.getElementById('guess');
	responseTag.textContent('asdasd');
	
	
	let currentGuessedNumber = input.value;
	if(typeof(firstGuess) === 'undefined'){
		firstGuess = currentGuessedNumber;
	} else {
		secondGuess = currentGuessedNumber
	}

    if(typeof(secondGuess) === 'undefined'){
        if(secretNumber === Number(firstGuess)){
            respondTag.textContent = 'match found';
        } else {
            if(secretNumber > Number(firstGuess)){
                respondTag.textContent = 'guess higher';
            } else {
                respondTag.textContent = 'guess lower';
            }
        }
    } else {
        let diffWithFirstGuess = Math.abs(Number(secretNumber) - firstGuess);
        let diffWithSecondGuess = Math.abs(Number(secretNumber) - secondGuess);

        if(diffWithFirstGuess > diffWithSecondGuess){
            responseTag.textContent = 'Getting hotter';
			respondTag.textContent = 'guess higher'
        } else {
	        responseTag.textContent = 'Getting Colder';
			respondTag.textContent = 'guess lower'
        }
    }
}

btn.addEventListener('click', b(randomNumber));


