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

// if the computer wins

  if (player === 'rock' && computer === 'paper' || player === 'paper' && computer === 'scissors' || player === 'scissors' && computer === 'rock') {
    const computerScoreText = $('.scores .computer').textContent
    const computerScore = parseInt(computerScoreText)
    const newComputerScore = computerScore + 1
    $('.scores .computer').textContent = newComputerScore
    $('figure.player').className = 'player lose'
    $('figure.computer').className = 'computer win'
    setTimeout(() => $('.message').textContent = `the COMPUTER wins`, 500)
    // setTimeout(() => $('.message').textContent = `Let's Play!`, 2000)
  }

// if it's a draw

  if (player === 'rock' && computer === 'rock' || player === 'paper' && computer === 'paper' || player === 'scissors' && computer === 'scissors') {
    setTimeout(() => $('.message').textContent = `It\'s a draw.`, 500)
    $('figure.player').className = 'player draw'
    $('figure.computer').className = 'computer draw'
  // setTimeout(() => $('.message').textContent = `Let's Play!`, 2000)
  }

// if the player wins

  if (player === 'rock' && computer === 'scissors' || player === 'paper' && computer === 'rock' || player === 'scissors' && computer === 'paper') {
    const playerScoreText = $('.scores .player').textContent
    const playerScore = parseInt(playerScoreText)
    const newPlayerScore = playerScore + 1
    $('.scores .player').textContent = newPlayerScore
    $('figure.player').className = 'player win'
    $('figure.computer').className = 'computer lose'
    setTimeout(() => $('.message').textContent = `the PLAYER wins`, 500)
    // setTimeout(() => $('.message').textContent = `Let's Play!`, 2000)
  }

// Check the bout score

  if ($('.scores .computer').textContent === '2') {
    console.log('computer wins')
    setTimeout(() => gameOver(false), 500)
  }

  if ($('.scores .player').textContent === '2') {
    console.log('player wins')
    setTimeout(() => gameOver(true), 500)
  }
}

// the computers' move

const getComputerMove = () => {
  const moves = ['rock', 'paper', 'scissors']
  return moves[Math.floor(Math.random() * moves.length)]
}

// bout OVER

const gameOver = (playerDidWin) => {
  if (playerDidWin) {
    $('.dialog h3').textContent = 'You won the bout!'
    $('.dialog .player-scoreboard').textContent = 'Player Score: ' + $('.scores .player').textContent
    $('.dialog .computer-scoreboard').textContent = 'Computer Score: ' + $('.scores .computer').textContent
    $('.dialog button').textContent = 'Continue'
    previousMatchScore = $('.matches .player').textContent
    matchScore = parseInt(previousMatchScore)
    newMatchScore = matchScore + 1
    $('.matches .player').textContent = newMatchScore
  } else {
    $('.dialog h3').textContent = 'You lost the bout!'
    $('.dialog .player-scoreboard').textContent = 'Player Bout Score: ' + $('.scores .player').textContent
    $('.dialog .computer-scoreboard').textContent = 'Computer Bout Score: ' + $('.scores .computer').textContent
    $('.dialog button').textContent = 'Continue'
    previousMatchScore = $('.matches .computer').textContent
    matchScore = parseInt(previousMatchScore)
    newMatchScore = matchScore + 1
    $('.matches .computer').textContent = newMatchScore
  }

  $('body').className = 'modal'

// check the match score

  if ($('.matches .computer').textContent === '2') {
    console.log('computer wins the match')
    matchOver(false)
  }

  if ($('.matches .player').textContent === '2') {
    console.log('player wins the match')
    matchOver(true)
  }
}

// match over

const matchOver = (playerDidWin) => {
  if (playerDidWin) {
    $('.dialog h3').textContent = 'You won the MATCH!'
    $('.dialog .player-scoreboard').textContent = 'Player Match Score: ' + $('.matches .player').textContent
    $('.dialog .computer-scoreboard').textContent = 'Computer Match Score: ' + $('.matches .computer').textContent
    $('.dialog button').textContent = 'Play Again?'
  } else {
    $('.dialog h3').textContent = 'You lost the match.'
    $('.dialog .player-scoreboard').textContent = 'Player Match Score: ' + $('.matches .player').textContent
    $('.dialog .computer-scoreboard').textContent = 'Computer Match Score: ' + $('.matches .computer').textContent
    $('.dialog button').textContent = 'Play Again?'
  }
  $('body').className = 'modal'
}

const resetGame = () => {
  $('.scores .computer').textContent = 0
  $('.scores .player').textContent = 0
  const computerMatches = parseInt($('.matches .computer').textContent)
  const playerMatches = parseInt($('.matches .player').textContent)

  // Reset the matches if we won 2-out-of-3 matches
  if (computerMatches >= 2 || playerMatches >= 2) {
    $('.matches .computer').textContent = 0
    $('.matches .player').textContent = 0
  }
  $('figure.player img').src = '/images/unknown.svg'
  $('figure.computer img').src = '/images/unknown.svg'
  $('figure.player').className = 'player'
  $('figure.computer').className = 'computer'

  $('.message').textContent = `Let\'s Play!`

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
