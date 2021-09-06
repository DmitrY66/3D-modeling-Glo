/* eslint-disable no-useless-escape */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable strict */


'use strict';

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
      const time = 100;
      const step = 50;
      let n = 0;
      let t = Math.round(time / (total / step));
      let interval = setInterval(() => {
        n += step;
        if (n >= total) {
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

export default calculator;
