/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable strict */

// document.addEventListener('DOMСontentLoaded', () => {

// });

'use strict';

// таймер
function counterTimer(deadLine) {

  let timerHours = document.querySelector('#timer-hours');
  let timerMinutes = document.querySelector('#timer-minutes');
  let timerSeconds = document.querySelector('#timer-seconds');

  function getTimeRemaining() {

    let dateStop = new Date(deadLine).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let seconds = Math.floor(timeRemaining % 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let hours = Math.floor(timeRemaining / 60 / 60);

    return { timeRemaining, hours, minutes, seconds };

  }

  function updateClock() {
    let timer = getTimeRemaining();

    timerHours.textContent = timer.hours;
    timerMinutes.textContent = timer.minutes;
    timerSeconds.textContent = timer.seconds;
    if (timer.timeRemaining > 0) {
      setTimeout(updateClock, 1000);
    }
  }
  updateClock();
}

counterTimer('1 january 2022');














