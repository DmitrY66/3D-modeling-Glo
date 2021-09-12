/* eslint-disable no-useless-escape */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable strict */


'use strict';

const sendForm = () => {
  const errorMessage = 'Что-то пошло не так!';
  // const loadMessage = 'Загрузка...';
  const successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

  const statusMessage = document.createElement('div');
  statusMessage.textContent = 'Тут будет сообщение!';
  statusMessage.style.cssText = 'font-size: 2rem';

  const preloader = document.createElement('div');
  preloader.className = 'sk-plane';

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
      target.appendChild(preloader);

      preloader.style.display = 'block';
      statusMessage.textContent = '';

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
            preloader.style.display = 'none';
          }
        )
        .then(cleanInput)
        .catch(
          (error) => {
            statusMessage.textContent = errorMessage;
            preloader.style.display = 'none';
            console.error('errorische', error);
          }
        );
    }
  });
};

export default sendForm;
