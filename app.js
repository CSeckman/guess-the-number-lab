const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  playerGuess: '',
  
}


getPlayerGuess = function() {
    let playerGuess = prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}`)
    // console.log(playerGuess)
    parseGuess(playerGuess)

    }

game.play = function(){
  this.secretNum = Math.floor(Math.random() * 
    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    console.log(this.secretNum)
    getPlayerGuess()
}

function parseGuess(string) {
  const parsed = parseInt(string);
  if(isNaN(parsed)) {
    console.log("string")
    return `Not a number, Enter a guess between ${game.smallestNum} and ${game.biggestNum}`
  } else { 
    console.log(parsed)
    return parsed
  } 
  // keepGuessing()
}

// function keepGuessing(number) {
//   while(parseGuess.parsed>=game.smallestNum && parseGuess.parsed<=game.biggestNum)

// }
// evalPlayerGuess = function()
game.prevGuesses = []
// while(playerGuess>=this.smallestNum && playerGuess<=this.biggestNum) {

// 3. Ensure that the `getGuess` method returns a value that:
//     - Is a *number*, not a *string*.
//     - Is between `smallestNum` and `biggestNum`, inclusive.
//     - Hints:
//         - This is a great use case for a `while` loop.
//         - `parseInt` returns `NaN` if the string cannot be parsed into a number.
// 4. From within the `play` method, invoke the `getGuess` method from inside a loop, and add the new guess to the `prevGuesses` array.
//     - Hint: this is a great use for a while loop (or even a do...while loop!)
// 5. Add a `render` method to `game` that `play` will call after a guess has been made that alerts:
//     - If the secret has been guessed: `Congrats! You guessed the number in [number of prevGuesses]!`
//     - Otherwise: `Your guess is too [high|low] Previous guesses: x, x, x, x`
//     - Hints:
//         - `render` won’t be able to access any of `play`’s local variables, e.g., `guess`, so be sure pass `render` any arguments as needed (you may have not built your program to use any, that's ok if that's the case!)
//         - Template literals not only have interpolation, but they also honor whitespace - including line breaks!
//         - The list of previous guesses can be generated using the array `join` method.
// 6. The `play` method should end (`return`) when the guess matches `secretNum`.