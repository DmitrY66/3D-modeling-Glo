/* eslint-disable no-undef */
/* eslint-disable no-useless-escape */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable strict */

'use strict';

import validation from './modules/validation';
import counterTimer from './modules/counterTimer';
import toggleMenu from './modules/toggleMenu';
import tabs from './modules/tabs';
import slider from './modules/slider';
import ourTeam from './modules/ourTeam';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';


counterTimer('1 january 2022');

toggleMenu();

tabs();

slider();

ourTeam();

calculator();

sendForm();

validation();
