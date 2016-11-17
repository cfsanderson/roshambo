const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const handleButtonClick = (event) => {
  console.log(event)
  const player = event.target.className
  const computer = getComputerMove()
  $('figure.player img').src = `/images/${player}.svg`
  $('figure.computer img').src = `/images/${computer}.svg`

  console.log('PLAYER IS', player)
  console.log('COMPUTER IS', computer)

// computer wins
  if (player === 'rock' && computer === 'paper' || player === 'paper' && computer === 'scissors' || player === 'scissors' && computer === 'rock') {
    const computerScoreText = $('.scores .computer').textContent
    const computerScore = parseInt(computerScoreText)
    const newComputerScore = computerScore + 1
    $('.scores .computer').textContent = newComputerScore
    console.log('computer wins with score', newComputerScore)
  }

// draw
  if (player === 'rock' && computer === 'rock' || player === 'paper' && computer === 'paper' || player === 'scissors' && computer === 'scissors') {
    console.log('It\'s a draw')
  }

// player wins
  if (player === 'rock' && computer === 'scissors' || player === 'paper' && computer === 'rock' || player === 'scissors' && computer === 'paper') {
    // Get the player score as text
    const playerScoreText = $('.scores .player').textContent
    // Convert that to a number
    const playerScore = parseInt(playerScoreText)
    // Add one to it
    const newPlayerScore = playerScore + 1
    // Put it back on screen
    $('.scores .player').textContent = newPlayerScore
    console.log('player wins with score', newPlayerScore)
  }

/* Next, check to see if either score is 2 and if so call gameOver */

  if ($('.scores .computer').textContent === '2') {
    console.log('computer wins')
    gameOver(false)
  }

  if ($('.scores .player').textContent === '2') {
    console.log('player wins')
    gameOver(true)
  }
}

const getComputerMove = () => {
  const moves = ['rock', 'paper', 'scissors']
  return moves[Math.floor(Math.random() * moves.length)]
}

// HINT: Try calling `gameOver(true)` in the console.
const gameOver = (playerDidWin) => {
  if (playerDidWin) {
    $('.dialog h3').textContent = 'You won the bout!'
    $('.dialog button').textContent = 'Continue'
    previousMatchScore = $('.matches .player').textContent
    matchScore = parseInt(previousMatchScore)
    newMatchScore = matchScore + 1
    $('.matches .player').textContent = newMatchScore
  } else {
    $('.dialog h3').textContent = 'You lost the bout!'
    $('.dialog button').textContent = 'Continue'
    previousMatchScore = $('.matches .computer').textContent
    matchScore = parseInt(previousMatchScore)
    newMatchScore = matchScore + 1
    $('.matches .computer').textContent = newMatchScore
  }

  $('body').className = 'modal'

  if ($('.matches .computer').textContent === '2') {
    console.log('computer wins the match')
    matchOver(false)
  }

  if ($('.matches .player').textContent === '2') {
    console.log('player wins the match')
    matchOver(true)
  }
}

const matchOver = (playerDidWin) => {
  if (playerDidWin) {
    $('.dialog h3').textContent = 'You won the MATCH!'
    $('.dialog button').textContent = 'Play Again?'
  } else {
    $('.dialog h3').textContent = 'You lost the match.'
    $('.dialog button').textContent = 'Play Again?'
  }
  $('body').className = 'modal'
}

const resetGame = () => {
  // TODO: Probably need to do more to reset the game here...
  $('.scores .computer').textContent = 0
  $('.scores .player').textContent = 0
  // $('.matches .computer').textContent = 0
  // $('.matches .player').textContent = 0
  $('figure.player img').src = '/images/unknown.svg'
  $('figure.computer img').src = '/images/unknown.svg'
  $('body').className = 'main'
}

const main = () => {
  const buttons = $$('.player-input button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick)
  }
  $('.dialog button').addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', main)

// if (caleb === 'fixed mindset' && attitude === 'sucks') {
//   const mindsetCurrent = $('.caleb .mindset')
//   const mindsetChange = 'growth mindset'
//   $('.caleb .mindset').textContent = mindsetChange
// }
//
