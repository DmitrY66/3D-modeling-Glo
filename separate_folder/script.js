/* eslint-disable no-const-assign */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable strict */
'use strict';

const dateToday = new Date();

const newYearsSoon1 = document.querySelector('.new-years-soon-1');
const newYearsSoon2 = document.querySelector('.new-years-soon-2');
const newYearsSoon3 = document.querySelector('.new-years-soon-3');
const newYearsSoon4 = document.querySelector('.new-years-soon-4');

const timesOfDay = function () {
  const timeHours = dateToday.getHours();
  let timeHoursNow = '';

  if (timeHours <= 12 && timeHours > 5) {
    console.log('Доброе утро!');
    timeHoursNow = 'Доброе утро!';
    return timeHoursNow;
  } else if (timeHours <= 17 && timeHours > 12) {
    timeHoursNow = 'Добрый день!';
    return timeHoursNow;
  } else if (timeHours <= 24 && timeHours > 17) {
    console.log('Добрый вечер!');
    timeHoursNow = 'Добрый вечер!';
    return timeHoursNow;
  } else if (timeHours <= 5 && timeHours > 0) {
    console.log('Доброй ночи!');
    timeHoursNow = 'Доброй ночи!';
    return timeHoursNow;
  }

};
timesOfDay();

// получение дня недели
const getWeekDay = function () {
  const date = new Date();
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const day = date.getDay();
  return days[day];
};
getWeekDay();

// текущее время
const currentTime = function () {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };
  const time = new Intl.DateTimeFormat('en-US', options).format(dateToday);
  return time;
};
currentTime();


newYearsSoon1.textContent = `${timesOfDay()}`;
newYearsSoon2.textContent = `Сегодня ${getWeekDay()}`;
newYearsSoon3.textContent = `Текущее время: ${currentTime()}`;


// осталось до нового года
const timerDays = document.querySelector('#timer-days');
const timerHours = document.querySelector('#timer-hours');
const timerMinutes = document.querySelector('#timer-minutes');
const timerSeconds = document.querySelector('#timer-seconds');


function getTimeRemaining() {
  const dateStop = new Date('1 january 2022').getTime();
  const dateNow = new Date().getTime();
  const timeRemaining = (dateStop - dateNow) / 1000;
  const seconds = Math.floor(timeRemaining % 60);
  const minutes = Math.floor((timeRemaining / 60) % 60);
  const hours = Math.floor((timeRemaining / 60) / 60 % 24);
  const days = Math.floor(timeRemaining / 60 / 60 / 24);

  return { days, hours, minutes, seconds };
}

function updateClock() {
  const timer = getTimeRemaining();

  if (timer.days < 10) {
    timer.days = '0' + timer.days;
  }
  if (timer.minutes < 10) {
    timer.minutes = '0' + timer.minutes;
  }
  if (timer.hours < 10) {
    timer.hours = '0' + timer.hours;
  }
  if (timer.seconds < 10) {
    timer.seconds = '0' + timer.seconds;
  }

  timerDays.textContent = timer.days;
  timerHours.textContent = timer.hours;
  timerMinutes.textContent = timer.minutes;
  timerSeconds.textContent = timer.seconds;
}

const repeatRun = setInterval(updateClock, 1000, new Date('1 january 2022'));

if (new Date().getTime() <= new Date('1 january 2022').getTime()) {
  setInterval(updateClock, 1000, '1 january 2022');
} else {
  timerHours.textContent = '00';
  timerMinutes.textContent = '00';
  timerSeconds.textContent = '00';
  clearInterval(repeatRun);
}
