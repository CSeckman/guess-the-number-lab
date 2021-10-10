const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  playerGuess: '',
  prevGuesses: [],
  value: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      console.log(this.secretNum)
      do {
        console.log(`Player guess ${this.value} does not equal ${this.secretNum}`)
        this.getPlayerGuess()
      } while (this.value !== this.secretNum && this.value !== 'quit');
    return this.value
  },
  getPlayerGuess: function() {
    let playerGuess = parseInt(prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}`))
    console.log(playerGuess)
    this.value = playerGuess
    this.render(this.value)
    },
  render: function(number) {
    if (this.value !== this.secretNum) {
      console.log('wrong')
      this.prevGuesses.push(this.value)
      console.log(this.prevGuesses.join(" - "))
    } else console.log('correct')
  }
}

// function keepGuessing(number) {
//   while(parseGuess.parsed>=game.smallestNum && parseGuess.parsed<=game.biggestNum)
// }

// }
// evalPlayerGuess = function()


// render: function() {
//   let guess = game.play
//   if (guess < game.secretNum) {
//     console.log(`${guess} is too low, guess a higher number`)
//     alert(`${guess} is too low, guess a higher number`)
//   } else if (guess > game.secretNum) {
//     console.log(`${guess} is too high, guess a lower number`)
//     alert(`${guess} is too high, guess a lower number`)
//   } else if (guess === game.secretNum) {
//     console.log("winner")
//     alert(`You win! ${guess} is the secret number! Congrats!`)
//   }
// }

// function pushPrevGuesses (number) {
//   prevGuesses.push(parsed)
//   let prevGuesses = parsed.join(" - ")
//   console.log(prevGuesses)
// function pushPrevGuesses (number) {
// prevGuesses.push(parsed)
// let prevGuesses = parsed.join(" - ")
// }

// while(playerGuess>=this.smallestNum && playerGuess<=this.biggestNum) {
