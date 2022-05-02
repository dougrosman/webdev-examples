/* CODE HELP
    setInterval certain number of times: https://stackoverflow.com/questions/2956966/javascript-telling-setinterval-to-only-fire-x-amount-of-times

    browser focus and blur events
    https://www.designcise.com/web/tutorial/how-to-detect-if-the-browser-tab-is-active-or-not-using-javascript#using-the-page-visibility-api

*/


const fadeDelay = 16; // milliseconds between each time the fade function is called
const fadeRepetitions = 100; // how many times the fade function is called (basically, the duration of the fade)


window.addEventListener('focus', function (event) {
    console.log('gained focus');
    focusStatus.textContent = "has focus (fade in)"
    audioFadeIn(fadeDelay, fadeRepetitions)
});

window.addEventListener('blur', function (event) {
    console.log('lost focus');
    focusStatus.textContent = "lost focus (fade out)"
    audioFadeOut(fadeDelay, fadeRepetitions)
});


function audioFadeIn(delay, repetitions) {

    // x is our repetitions counter
    let x = 0;

    // allows us to keep track of our interval so we can stop it as needed
    let intervalID = window.setInterval(function() {

        // the volume property gets a little finicky if it accidentally goes beyond 1 or 0, this if-statement prevents that from happening
        if(sound.volume < 1-(1/repetitions)) {
            // the volume fades in a rate of 1/repetitions (e.g., if repetitions is 100, then the volume increases by 0.01 each repetition)
            sound.volume += (1/repetitions);
        }
        // pre-increments x before checking to see if it has repeated the correct amount
        if (++x === repetitions) {
            // stop the interval
            window.clearInterval(intervalID);
            sound.volume = 1;
        }
    }, delay);
}

function audioFadeOut(delay, repetitions) {

    // x is our repetitions counter
    let x = 0;

    // allows us to keep track of our interval so we can stop it as needed
    let intervalID = window.setInterval(function() {

        if(sound.volume > (1/repetitions)) {
            sound.volume -= (1/repetitions);
        }
        // pre-increments x before checking to see if it has repeated the correct amount
        if (++x === repetitions) {
            // stop the interval
            window.clearInterval(intervalID);
            sound.volume = 0;
        }
    }, delay);
}