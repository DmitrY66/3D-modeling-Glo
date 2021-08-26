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


// timer
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


// menu
const toggleMenu = () => {

  const btnMenu = document.querySelector('.menu');
  const menu = document.querySelector('menu');

  const handlerMenu = () => {
    menu.classList.toggle('active-menu');
  };

  btnMenu.addEventListener('click', handlerMenu);

  menu.addEventListener('click', (e) => {
    let target = e.target;
    // console.log('target: ', target);
    if (target.target.tagName !== 'A') {
      // console.log(target.tagName);
      menu.classList.remove('active-menu');
    }
  });

};

toggleMenu();


// popup
const togglePopup = () => {

  const popup = document.querySelector('.popup');
  const popupBtn = document.querySelectorAll('.popup-btn');
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

  popup.addEventListener('click', (e) => {
    let target = e.target;

    if (target.classList.contains('popup-close')) {
      popup.style.display = 'none';
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popup.style.display = 'none';
      }
    }
    count = 0;
  });

};

togglePopup();


// tabs
const tabs = () => {

  const serviceHeader = document.querySelector('.service-header');
  const serviceHeaderTab = document.querySelectorAll('.service-header-tab');
  const serviceTab = document.querySelectorAll('.service-tab');

  const toggleTabContent = (index) => {
    for (let i = 0; i < serviceTab.length; i++) {
      if (index === i) {
        serviceHeaderTab[i].classList.add('active');
        serviceTab[i].classList.remove('d-none');
      } else {
        serviceHeaderTab[i].classList.remove('active');
        serviceTab[i].classList.add('d-none');
      }
    }
  };

  serviceHeader.addEventListener('click', (e) => {
    let target = e.target;
    target = target.closest('.service-header-tab');
    if (target) {
      serviceHeaderTab.forEach((itam, i) => {
        if (itam === target) {
          toggleTabContent(i);

        }
      });
    }
  });

};

tabs();


// slider
const slider = () => {

  const portfolioContent = document.querySelector('.portfolio-content');
  const portfolioDots = document.querySelector('.portfolio-dots');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  const addPoints = () => {
    if (portfolioItems.length > 0) {
      portfolioItems.forEach((elem, index) => {
        const li = document.createElement('li');
        li.classList.add('dot');
        if (index === 0) {
          li.classList.add('dot-active');
        }
        portfolioDots.append(li);
      });
    }
  };

  addPoints();

  const dot = document.querySelectorAll('.dot');

  let currentSlide = 0;
  let interval;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(portfolioItems, currentSlide, 'portfolio-item-active');
    prevSlide(dot, currentSlide, 'dot-active');
    currentSlide++;
    if (currentSlide >= portfolioItems.length) {
      currentSlide = 0;
    }
    nextSlide(portfolioItems, currentSlide, 'portfolio-item-active');
    nextSlide(dot, currentSlide, 'dot-active');
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  portfolioContent.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;

    if (!target.matches('.portfolio-btn', '.dot')) {
      return;
    }

    prevSlide(portfolioItems, currentSlide, 'portfolio-item-active');
    prevSlide(dot, currentSlide, 'dot-active');

    if (target.matches('#arrow-right')) {
      currentSlide++;
    } else if (target.matches('#arrow-left')) {
      currentSlide--;
    } else if (target.matches('.dot')) {
      dot.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= portfolioItems.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = portfolioItems.length - 1;
    }

    nextSlide(portfolioItems, currentSlide, 'portfolio-item-active');
    nextSlide(dot, currentSlide, 'dot-active');
  });

  portfolioContent.addEventListener('mouseover', (e) => {
    if (e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
      stopSlide();
    }
  });

  portfolioContent.addEventListener('mouseout', (e) => {
    if (e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
      startSlide();
    }
  });

  startSlide(3000);

};

slider();


// our team
const command = document.querySelector('#command');
command.addEventListener('mouseover', (e) => {
  let target = e.target;
  if (target.className === 'command__photo') {
    target.dataset.a = target.src;
    target.src = target.dataset.img;
  }
});
command.addEventListener('mouseout', (e) => {
  let target = e.target;
  if (target.className === 'command__photo') {
    target.src = target.dataset.a;
  }
});


// calculator
const calcBlock = document.querySelector('.calc-block');

calcBlock.addEventListener('input', (e) => {
  let target = e.target;
  if (target.matches('INPUT')) {
    target.value = target.value.replace(/\D/g, '');
  }
});


// connect
const clearInput = (elem) => {
  elem.value = elem.value.replace(/ +/g, ' ');
  elem.value = elem.value.replace(/-+/g, '-');
  elem.value = elem.value.replace(/^-/g, '');
  elem.value = elem.value.replace(/-$/g, '').trim();
};

const form2Name = document.querySelector('#form2-name');
const form2Email = document.querySelector('#form2-email');
const form2Phone = document.querySelector('#form2-phone');
const form2Message = document.querySelector('#form2-email');

form2Name.addEventListener('blur', () => {
  form2Name.value = form2Name.value.replace(/[^а-яА-ЯёЁ -]/g, '');
  clearInput(form2Name);
  form2Name.value = form2Name.value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
});

form2Email.addEventListener('blur', () => {
  form2Email.value = form2Email.value.replace(/[^a-zA-Z@-_!~*'.]/g, '');
  clearInput(form2Email);
});

form2Phone.addEventListener('blur', () => {
  form2Phone.value = form2Phone.value.replace(/[^()-D]/g, '');
  clearInput(form2Phone);
});

form2Message.addEventListener('blur', () => {
  form2Message.value = form2Message.value.replace(/[^а-яА-ЯёЁ -]/g, '');
  clearInput(form2Message);
});


// const form2 = document.querySelector('#form2');

// form2.addEventListener('focusout', (e) => {
//   let target = e.target;

//   if (target.matches('#form2-name')) {
//     target.value = target.value.replace(/[^а-яА-ЯёЁ -]/g, '');
//     clearInput(target.value);
//     form2Name.value = 
//     form2Name.value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
//   }
//   if (target.matches('#form2-message')) {
//     target.value = target.value.replace(/[^а-яА-ЯёЁ -]/g, '');
//     clearInput(target.value);
//   }
//   if (target.matches('#form2-email')) {
//     target.value = target.value.replace(/[^a-zA-Z@-_!~*'.]/g, '');
//     clearInput(target.value);
//   }
//   if (target.matches('#form2-phone')) {
//     target.value = target.value.replace(/[^()-D]/g, '');
//     clearInput(target.value);
//   }
// });
