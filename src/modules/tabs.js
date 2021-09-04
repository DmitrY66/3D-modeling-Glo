/* eslint-disable no-useless-escape */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable strict */


'use strict';

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

export default tabs;
