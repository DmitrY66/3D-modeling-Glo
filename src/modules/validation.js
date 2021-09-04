/* eslint-disable no-useless-escape */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable strict */

'use strict';

const validation = () => {
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

  const activeButton = (button) => {
    if (labelName === true &&
      labelEmail === true &&
      labelPhone === true) {
      button.disabled = false;
    }
  };

  const backgroundOut = (formInput, inputId) => {
    formInput.addEventListener('focusout', (e) => {
      let target = e.target;
      if (target.matches(inputId)) {
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
        const targetIdF3 = '#form3-name, #form3-email, #form3-phone';

        const btn = form3[3];
        btn.disabled = true;

        backgroundOut(form3, targetIdF3);

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


  // header validation
  const headerValidation = () => {
    const form1 = document.querySelector('#form1');
    const targetIdF1 = '#form1-name, #form1-email, #form1-phone';

    const btn = form1[3];
    btn.disabled = true;

    backgroundOut(form1, targetIdF1);

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
    const targetIdF2 = '#form2-name, #form2-email, #form2-phone, #form2-message';

    const btn = form2[4];
    btn.disabled = true;

    backgroundOut(form2, targetIdF2);

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


};

export default validation;
