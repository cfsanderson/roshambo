const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const handleButtonClick = (event) => {
  console.log(event)
  const player = event.target.className
  const computer = getComputerMove()
  $('figure.player img').src = `/images/${player}.svg`
  $('figure.computer img').src = `/images/${computer}.svg`
  //
  // console.log('PLAYER IS', player)
  // console.log('COMPUTER IS', computer)

  if (player === 'rock' && computer === 'paper') {
    const computerScoreText = $('.scores .computer').textContent
    const computerScore = parseInt(computerScoreText)
    const newComputerScore = computerScore + 1
    $('.scores .computer').textContent = newComputerScore
    console.log('computer wins with score', newComputerScore)
  }

  // if (player === 'rock' && computer === 'rock') {
  //   console.log('draw')
  // }

  if (player === 'rock' && computer === 'scissors') {
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

  // if (player === 'paper' && computer === 'paper') {
  //   console.log('draw')
  // }

  if (player === 'paper' && computer === 'rock') {
    const playerScoreText = $('.scores .player').textContent
    const playerScore = parseInt(playerScoreText)
    const newPlayerScore = playerScore + 1
    $('.scores .player').textContent = newPlayerScore
    console.log('player wins with score', newPlayerScore)
  }

  if (player === 'paper' && computer === 'scissors') {
    const computerScoreText = $('.scores .computer').textContent
    const computerScore = parseInt(computerScoreText)
    const newComputerScore = computerScore + 1
    $('.scores .computer').textContent = newComputerScore
    console.log('computer wins with score', newComputerScore)
  }

  if (player === 'scissors' && computer === 'paper') {
    const computerScoreText = $('.scores .computer').textContent
    const computerScore = parseInt(computerScoreText)
    const newComputerScore = computerScore + 1
    $('.scores .computer').textContent = newComputerScore
    console.log('computer wins with score', newComputerScore)
  }

  if (player === 'scissors' && computer === 'rock') {
    const computerScoreText = $('.scores .computer').textContent
    const computerScore = parseInt(computerScoreText)
    const newComputerScore = computerScore + 1
    $('.scores .computer').textContent = newComputerScore
    console.log('computer wins with score', newComputerScore)
  }

  // if (player === 'scissors' && computer === 'scissors') {
  //   console.log('draw')
  // }

// HINT: Check for win, lose or draw, then call `gameOver()` eventually.
}

const getComputerMove = () => {
  const moves = ['rock', 'paper', 'scissors']
  return moves[Math.floor(Math.random() * moves.length)]
}

// HINT: Try calling `gameOver(true)` in the console.
const gameOver = (playerDidWin) => {
  if (playerDidWin) {
    $('.dialog h3').textContent = 'You won!'
  } else {
    $('.dialog h3').textContent = 'You lost!'
  }
  $('body').className = 'modal'
}

const resetGame = () => {
  // TODO: Probably need to do more to reset the game here...
  $('figure.player img').src = '/images/unknown.svg'
  $('figure.computer img').src = '/images/unknown.svg'
  $('body').className = ''
}

const main = () => {
  const buttons = $$('.player-input button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick)
  }
  $('.dialog button').addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', main)
