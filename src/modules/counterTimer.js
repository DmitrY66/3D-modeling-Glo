/* eslint-disable no-useless-escape */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable strict */


'use strict';

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

    return { hours, minutes, seconds };
  }

  function updateClock() {
    let timer = getTimeRemaining();

    if (timer.seconds < 10) {
      timer.seconds = '0' + timer.seconds;
    }
    if (timer.minutes < 10) {
      timer.minutes = '0' + timer.minutes;
    }
    if (timer.hours < 10) {
      timer.hours = '0' + timer.hours;
    }

    timerHours.textContent = timer.hours;
    timerMinutes.textContent = timer.minutes;
    timerSeconds.textContent = timer.seconds;
  }

  updateClock();

  let repeatRun = setInterval(updateClock, 1000, deadLine);

  if (new Date().getTime() >= new Date(deadLine).getTime()) {
    clearInterval(repeatRun);
    timerHours.textContent = '00';
    timerMinutes.textContent = '00';
    timerSeconds.textContent = '00';
  }

}

export default counterTimer;
