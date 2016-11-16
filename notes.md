Use _objects_, _arrays_, _strings_, _functions_ etc. This assignment will likely use every bit of JavaScript we have learned so far to build something greater than the sum of it's parts.

## Explorer Mode

- [x] Play against the computerThis means the computer has an "AI" that just throws _randomly_.
- [ ] Play one _bout_ and show the winner.
  - [ ] Each throw is considered an _engagement._
  - [ ] The best two of three _engagements_ is a _bout._
  - [ ] The best two of three _bouts_ is a _match._ (Not needed for Explorer mode.)

## Adventure mode

- [ ] Track the result of multiple games (_matches_).
  - [ ] After the match winner is shown:
    - [ ] Show a leaderboard.
    - [ ] Prompt the player to play again.

## Epic Mode

- [ ] Implement a non-random AI for the computer player based on past throws based on these strategies for [advanced Roshambo AI](https://www.youtube.com/watch?v=rudzYPHuewc)



### Logical Process for 1 engagement...

- if the player clicks rock and the computer shows paper = computer wins/player loses
- if the player clicks paper and the computer shows paper = draw
- if the player clicks scissors and the computer shows paper = player wins/computer loses

- if the player clicks rock and the computer shows rock = draw
- if the player clicks paper and the computer shows rock = player wins/computer loses
- if the player clicks scissors and the computer shows rock = computer wins/player loses

- if the player clicks rock and the computer shows scissors = player wins/computer loses
- if the player clicks paper and the computer shows scissors = draw
- if the player clicks scissors and the computer shows scissors = computer wins/player loses

All of these scenarios are dependent on the player's action and the computer is responding "randomly".

### An example scenario of a match (Explorer mode might look like this...

(1) the player clicks on rock
(2) the computer shows (randomly generates) paper
(3) Outcome: the player has lost b/c paper beats rock
(4) the player's score should not change (stay at 0), the computer's score should increment by 1 for the bout and the match score should show no change.

(5) the player clicks on rock again
(6) the computer also randomly generates a rock
(7) Outcome: the engagement is a draw and neither the player nor the computer's score should increment for the bout or match.

(8) the player clicks on paper
(9) the computer randomly generates scissors
(10) Outcome: the player has lost again and the computer has won the engagement AND the bout since it has won 2 out of 3 engagements.

(11) The player's and the computer's engagement scores should reset to 0 and the computer's match score should increment by 1 (the player's will remain at 0).

Play continues until either the player or the computer's MATCH score has reached the best 2 out of 3 and then the GAME OVER screen should appear with either "You LOST!" or "You WON!" depending on the player's score.
