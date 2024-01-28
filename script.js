//your code her
var btn = document.getElementById('btn');
var firstGuess;
var secondGuess;
var responseTag = document.getElementById('response');
var respondTag = document.getElementById('respond');
var randomNumber = Math.ceil(Math.random() * 100);

function prepareOutput(secretNumber) {
	let input = document.getElementById('guess');
	let currentGuessedNumber = input.value;
	if(typeof(firstGuess) === 'undefined'){
		firstGuess = currentGuessedNumber;
	} else {
		secondGuess = currentGuessedNumber
	}

    if(typeof(secondGuess) === 'undefined'){
        if(secretNumber === Number(firstGuess)){
            respondTag.outerText = 'match found';
        } else {
            if(secretNumber > Number(firstGuess)){
                respondTag.outerText = 'guess higher';
            } else {
                respondTag.outerText = 'guess lower';
            }
        }
    } else {
        let diffWithFirstGuess = Math.abs(Number(secretNumber) - firstGuess);
        let diffWithSecondGuess = Math.abs(Number(secretNumber) - secondGuess);

        if(diffWithFirstGuess > diffWithSecondGuess){
            responseTag.outerText = 'Getting hotter';
			respondTag.outerText = 'guess higher'
        } else {
	        responseTag.outerText = 'Getting Colder';
			respondTag.outerText = 'guess lower'
        }
    }
}

btn.addEventListener('click', prepareOutput(randomNumber));