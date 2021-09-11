/* eslint-disable no-useless-escape */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable strict */


'use strict';

// smoothScroll();
const smoothScroll = () => {
  const menu = document.querySelector('menu');
  const smoothLinks = menu.querySelectorAll('a[href^="#"]');
  const mainA = document.querySelector('main>a');

  mainA.addEventListener('click', (e) => {
    e.preventDefault();
    const id = mainA.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });

  for (let smoothLink of smoothLinks) {
    if (smoothLink.attributes.href.value !== '#close') {
      smoothLink.addEventListener('click', (e) => {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');
        document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
  }
};
export default smoothScroll;
