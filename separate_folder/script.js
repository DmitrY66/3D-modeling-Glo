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
    console.log('Добрый день!');
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
  console.log('Сегодня: ', days[day]);
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
  console.log(time);
  return time;
};
currentTime();

// осталось до нового года
const daysBeforeNewYear = function () {
  const daysBefore = Math.ceil((new Date('1 january 2022') - dateToday) / 1000 / 60 / 60 / 24);
  console.log(daysBefore);
  return daysBefore;
};
daysBeforeNewYear();

newYearsSoon1.textContent = `${timesOfDay()}`;
newYearsSoon2.textContent = `Сегодня ${getWeekDay()}`;
newYearsSoon3.textContent = `Текущее время: ${currentTime()}`;
newYearsSoon4.textContent = `До Нового Года осталось(ся) ${daysBeforeNewYear()} дня(дней)(день)`;
