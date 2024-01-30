// generate random number = targetIndex
// create array of colors
//get guess from player

//Global Variables
let COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];
let guess = '';
let correct = false;

//Function to be called by HTML. 
let runGame = () => {
    const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
    const target = COLORS_ARRAY[targetIndex];
    let numTries = 0;
    console.log(target);
    do {
        guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY.join(", ") +
            '\n\nWhat color am I thinking of?\n');
        if (guess === null || guess === '') {
            alert('Nothing has been entered. Goodbye');
            return;
        }
        correct = checkGuess(guess, target);
        numTries += 1;

    } while (!correct);
    alert('Congratulations Player. It took you: ' + numTries + ' tries.');
    document.body.style.background = guess;
};

//Function to check is guess and target are the same using the array method indexOf. Called within runGame()
let checkGuess = (guess, target) => {
    let correct = false;
    let count = 1;
    if (!COLORS_ARRAY.includes(guess)) {
        alert('That color is not in the array');
        count += 1;
        correct
    } else if (COLORS_ARRAY.indexOf(guess) > COLORS_ARRAY.indexOf(target)) {
        alert('My color\'s index is lower than that');
        count += 1;
    } else if (COLORS_ARRAY.indexOf(guess) < COLORS_ARRAY.indexOf(target)) {
        alert('My color\'s index is higher than that');
        count += 1;
    } else {
        correct = true;
    }
    return correct;
};