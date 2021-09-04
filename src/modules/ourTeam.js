/* eslint-disable no-useless-escape */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable strict */


'use strict';

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

export default ourTeam;
