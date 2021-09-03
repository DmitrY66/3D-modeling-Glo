/* eslint-disable no-useless-escape */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable strict */


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
    if (target.matches('a')) {
      menu.classList.remove('active-menu');
    }
  });
};

toggleMenu();


// validation
// ==============================================
let labelName = false;
let labelEmail = false;
let labelPhone = false;
let labelMessage = false;

const validName = (target) => {
  if (/^[а-яА-Я\s]+$/.test(target.value)) {
    target.style.background = '#9eff78';
    labelName = true;
  } else {
    target.style.background = '#ffa2a2';
    labelName = false;
  }
  if (target.value !== '') {
    target.value =
      target.value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(' ');
  } else {
    target.placeholder = "Имя русскими буквами";
  }
};

const validEmail = (target) => {
  if (/^\w+@{1}\w+\.\w{2,}$/.test(target.value)) {
    target.style.background = '#9eff78';
    labelEmail = true;
  } else {
    target.style.background = '#ffa2a2';
    labelEmail = false;
  }
  target.value = target.value.replace(/_+/g, '_');
  if (target.value === '') {
    target.placeholder = "Образец: mail@domen.zone";
  }
};

const validPhone = (target) => {
  if (/\+\d{11}/.test(target.value)) {
    target.style.background = '#9eff78';
    labelPhone = true;
  } else {
    target.style.background = '#ffa2a2';
    labelPhone = false;
  }
  if (target.value === '') {
    target.placeholder = "Образец: +00000000000";
  }
};

const validMessage = (target) => {
  if (/^[\u0400-\u04FF\s\d\.\!\,-\:\(\)\"]+$/.test(target.value)) {
    target.style.background = '#9eff78';
    labelMessage = true;
  } else {
    target.style.background = '#ffa2a2';
    labelMessage = false;
  }
  if (target.value === '') {
    target.placeholder = "Разрешен ввод только кирилицы";
  }
};

const activeButton = (target) => {
  if (labelName === true &&
    labelEmail === true &&
    labelPhone === true) {
    target.disabled = false;
  }
};

const backgroundOut = (target) => {
  target.addEventListener('focusout', (e) => {
    let target = e.target;
    if (target.matches('#form2-name, #form2-email, #form2-phone, #form2-message',)) {
      if (target.value === '') {
        target.style.background = '';
      }
    }
  });
};
// ==============================================


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


      // popup validation
      const form3 = document.querySelector('#form3');

      const btn = form3[3];
      btn.disabled = true;

      backgroundOut(form3);

      form3.addEventListener('input', (e) => {
        let target = e.target;

        if (target.matches('#form3-name')) {
          validName(target);
        }

        if (target.matches('#form3-email')) {
          validEmail(target);
        }

        if (target.matches('#form3-phone')) {
          validPhone(target);
        }

        activeButton(btn);
      });

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
const ourTeam = () => {
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
};

ourTeam();


// header validation
const headerValidation = () => {

  const form1 = document.querySelector('#form1');

  const btn = form1[3];
  btn.disabled = true;

  backgroundOut(form1);

  form1.addEventListener('input', (e) => {
    let target = e.target;

    if (target.matches('#form1-name')) {
      validName(target);
    }

    if (target.matches('#form1-email')) {
      validEmail(target);
    }

    if (target.matches('#form1-phone')) {
      validPhone(target);
    }

    activeButton(btn);
  });
};

headerValidation();


// connect
const formConnect = () => {
  const form2 = document.querySelector('#form2');

  const btn = form2[4];
  btn.disabled = true;

  backgroundOut(form2);

  form2.addEventListener('input', (e) => {
    let target = e.target;

    if (target.matches('#form2-name')) {
      validName(target);
    }

    if (target.matches('#form2-email')) {
      validEmail(target);
    }

    if (target.matches('#form2-phone')) {
      validPhone(target);
    }

    if (target.matches('#form2-message')) {
      validMessage(target);
    }

    if (labelName === true &&
      labelEmail === true &&
      labelPhone === true &&
      labelMessage === true) {
      btn.disabled = false;
    }
  });
};

formConnect();


// calculator
const calculator = () => {
  const calcBlock = document.querySelector('.calc-block');
  calcBlock.addEventListener('focusout', (e) => {
    let target = e.target;
    if (target.matches('INPUT')) {
      target.value = target.value.replace(/\D/g, '');
    }
  });

  // расчет суммы
  const calc = (price = 100) => {
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const totalValue = document.getElementById('total');
    let total = 0;

    const countSum = () => {
      let countValue = 1;
      let dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value;
      const squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = Math.round(price * typeValue * squareValue * countValue * dayValue);
      } else {
        total = 0;
      }
      // вывод суммы без эффекта
      // totalValue.textContent = total;
    };

    // эффект вывода суммы
    const outputEffect = () => {
      const time = 1000;
      const step = 10;
      let n = 0;
      let t = Math.round(time / (total / step));
      let interval = setInterval(() => {
        n += step;
        if (n === total) {
          clearInterval(interval);
        }
        totalValue.textContent = n;
      }, t);

      calcBlock.addEventListener('change', (e) => {
        const target = e.target;
        if (target.matches('select') || target.matches('input')) {
          clearInterval(interval);
        }
      });
    };

    calcBlock.addEventListener('change', (e) => {
      const target = e.target;
      if (target.matches('select') || target.matches('input')) {
        countSum();
        if (total !== 0) {

          outputEffect();
        } else {
          totalValue.textContent = total;
        }
      }
    });
  };

  calc(100);
};

calculator();


// send-ajax-form
const sendForm = () => {
  const errorMessage = 'Что-то пошло не так!';
  const loadMessage = 'Загрузка...';
  const successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

  const statusMessage = document.createElement('div');
  statusMessage.textContent = 'Тут будет сообщение!';
  statusMessage.style.cssText = 'font-size: 2rem';

  const cleanInput = () => {
    const formInputs = document.querySelectorAll('input');
    const btnTypeSabmit = document.querySelectorAll('button[type="submit"]');

    formInputs.forEach(elem => {
      elem.value = '';
    });

    btnTypeSabmit.forEach(elem => {
      elem.disabled = true;
    });
  };

  const postData = (body) => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  document.body.addEventListener('submit', (e) => {
    const target = e.target;

    if (target.matches('#form1, #form2, #form3')) {
      e.preventDefault();

      target.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;

      const formData = new FormData(target);
      let body = {};

      formData.forEach((val, key) => {
        body[key] = val;
      });

      postData(body)
        .then(
          (response) => {
            if (response.status !== 200) {
              throw new Error('status network not 200');
            }
            statusMessage.textContent = successMessage;
          }
        )
        .then(cleanInput)
        .catch(
          (error) => {
            statusMessage.textContent = errorMessage;
            console.error('errorische', error);
          }
        );
    }
  });
};

sendForm();
