/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable strict */

// document.addEventListener('DOMСontentLoaded', () => {
// событие не срабатывает во всех браузерах. не гуглится!
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

  let repeatRun = setInterval(updateClock, 1000, deadLine);

  if (new Date().getTime() >= new Date(deadLine).getTime()) {
    clearInterval(repeatRun);
    timerHours.textContent = '00';
    timerMinutes.textContent = '00';
    timerSeconds.textContent = '00';
  } 

}

counterTimer('1 january 2022');


// меню
const toggleMenu = () => {

  const btnMenu = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const closeBtn = document.querySelector('.close-btn');
  const menuItems = menu.querySelectorAll('ul>li');

  const handlerMenu = () => {
    menu.classList.toggle('active-menu');
  };

  btnMenu.addEventListener('click', handlerMenu);

  closeBtn.addEventListener('click', handlerMenu);

  menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));

};

toggleMenu();


// popup
const togglePopup = () => {

  const popup = document.querySelector('.popup');
  const popupBtn = document.querySelectorAll('.popup-btn');
  const popUpClose = document.querySelector('.popup-close');
  const popupContent = document.querySelector('.popup-content');
  let count = 0;


  popupBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      let widthWin = window.innerWidth;
      popup.style.display = 'block';


      if (widthWin > 768) {
        const movePopup = () => {
          count++;
          popupContent.style.top = -30 + count + '%';
          if (count < 50) {
            setTimeout(movePopup, 6);
          }
        };
        movePopup();
      }
    });
  });

  popUpClose.addEventListener('click', () => {
    popup.style.display = 'none';
    count = 0;
  });

};

togglePopup();
