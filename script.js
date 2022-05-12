'use strict';

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
const switchPlayers = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 1 ? 0 : 1;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//starting condintions
score0.textContent = 0;
score1.textContent = 0;
currentScore0.textContent = 0;
currentScore1.textContent = 0;
dice.classList.add('hidden');
let scoree0 = 0;
let scoree1 = 0;

//rolling functionality
btnRoll.addEventListener('click', function () {
  const randomNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(randomNumber);
  dice.classList.remove('hidden');
  dice.src = `dice-${randomNumber}.png`;

  if (randomNumber !== 1) {
    //adding the score
    currentScore += randomNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    // currentScore0.textContent = scoree0;
  } else {
    // switching player
    switchPlayers();
  }
});

// Hold functionality

btnHold.addEventListener('click', function () {
  //adding current score to total score
  scores[activePlayer] += currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // document.getElementById(`current--${activePlayer}`).textContent = 0;
  //if total score > 100 --> active player wins
  if (scores[activePlayer] >= 50) {
    console.log(`Player${activePlayer} wins`);
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    document
      .querySelector(`.winner--${activePlayer}`)
      .classList.remove('hidden');
    btnHold.disabled = true;
    btnRoll.disabled = true;
    dice.classList.add('hidden');
  } else {
    //if total score < 100 --> switch active player
    switchPlayers();
  }
});

/*
roll.addEventListener('click', function () {
  const randomNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(randomNumber);
  if (randomNumber === 1) {
    currentScore.innerHTML = 0;
  } else {
    currentScore.innerHTML = Number(currentScore.innerHTML) + randomNumber;
  }
  if (randomNumber == 2) {
    // document.querySelector('.dice').src = 'dice-5.png';
    document.getElementsByClassName('dice').src = 'dice-2.png';
  }
});

hold.addEventListener('click', function () {
  score.innerHTML = Number(currentScore.innerHTML);
});
*/

btnNew.addEventListener('click', function () {
  // window.location.reload();

  //starting condintions
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  dice.classList.add('hidden');
  scoree0 = 0;
  scoree1 = 0;

  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  document.querySelector(`.winner--${activePlayer}`).classList.add('hidden');
  btnHold.disabled = false;
  btnRoll.disabled = false;
  dice.classList.add('hidden');
});
