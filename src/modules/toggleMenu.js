/* eslint-disable no-useless-escape */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable strict */


'use strict';

const toggleMenu = () => {
  const bodyMenu = document.querySelector('body');
  const menuTop = document.querySelector('menu');

  const div = document.createElement('div');
  div.className = 'shade';
  div.style.width = '100%';
  div.style.height = '100vh';
  div.style.background = '#00000063';
  div.style.position = 'fixed';
  div.style.top = '0';
  div.style.display = 'none';
  bodyMenu.append(div);

  bodyMenu.addEventListener('click', (e) => {
    let target = e.target;
    if (target.closest('.menu')) {
      menuTop.classList.toggle('active-menu');
      div.style.display = 'block';
    }
    if (target.matches('a')) {
      menuTop.classList.remove('active-menu');
      div.style.display = 'none';
    }
    if (target.matches('.shade')) {
      menuTop.classList.remove('active-menu');
      div.style.display = 'none';
    }
  });
};

export default toggleMenu;
