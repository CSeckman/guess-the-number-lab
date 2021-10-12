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
    playerGuess = parseInt(prompt(`Play Guess the Number
Enter a guess between ${game.smallestNum} and ${game.biggestNum}`))
    console.log(playerGuess)
    this.value = playerGuess
    this.render(this.value)
  },
  render: function(number) {
    while(this.value >= 1 && this.value <= 100 && this.value)
      if (this.value > this.secretNum) {
        console.log('wrong')
        this.prevGuesses.push(this.value)
        this.value = parseInt(prompt (`Incorrect! Guess again with a lower number!
Previous Guesses: ${this.prevGuesses.join(" - ")}`))
      } else if (this.value < this.secretNum) { 
        console.log('wrong')
        this.prevGuesses.push(this.value)
        this.value = parseInt(prompt (`Incorrect! Guess again with a higher number!
Previous Guesses: ${this.prevGuesses.join(" - ")}`))
      } else if (this.value === this.secretNum) {
        console.log('correct')
        this.prevGuesses.push(this.value)
        alert (`You win! Congratulations!
You guessed the secret number, ${this.value} in ${this.prevGuesses.length} guesses!`)
      }   
  }
}
