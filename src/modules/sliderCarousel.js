/* eslint-disable no-useless-escape */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable strict */


'use strict';
const classSliderCarousel = () =>  {
  class SliderCarousel {
    constructor({
      main,
      wrap,
      next,
      prev,
      infinity = false,
      position = 0,
      slidesToShow = 3,
      responsive = [],
    }) {
      if (!main || !wrap) {
        console.warn('slider-carousel: Необходимы 2 свойства, "main" и "wrap"!');
      }
      this.main = document.querySelector(main);
      this.wrap = document.querySelector(wrap);
      this.slides = document.querySelector(wrap).children;
      this.next = document.querySelector(next);
      this.prev = document.querySelector(prev);
      this.slidesToShow = slidesToShow;
      this.options = {
        position,
        infinity,
        widthSlide: Math.floor(100 / this.slidesToShow),
        maxPosition: this.slides.length - this.slidesToShow,
      };
      this.responsive = responsive;
    }
  
    init() {
      this.addGloClass();
      this.addStyle();
  
      if (this.next && this.prev) {
        this.controlSlider();
      } else {
        this.addArrow();
        this.controlSlider();
      }
      if (this.responsive) {
        this.responseInit();
      }
    }
  
    addGloClass() {
      this.main.classList.add('glo-slider');
      this.wrap.classList.add('glo-slider__wrap');
      for (const item of this.slides) {
        item.classList.add('glo-slider__item');
      }
    }
  
    addStyle() {
      let style = document.getElementById('sliderCarousel-style');
      if (!style) {
        style = document.createElement('style');
        style.id = 'sliderCarousel-style';
      }
  
      style.textContent = `
        .glo-slider{
          overflow: hidden !important;
          // background: black;
        }
        .glo-slider__wrap{
          display: flex !important;
          transition: transform 0.5s !important;
          will-change: transform !important;
        }
        .glo-slider__item{
          display: flex !important;
          align-items: center;
          justify-content: center;
          flex: 0 0 ${this.options.widthSlide}% !important;
          margin: auto 0 !important;
        }
        .glo-slider__prev,
        .glo-slider__next{
          margin: 0 20px;
          border: 20px solid transparent;
          background: transparent;
        }
        .glo-slider__next{
          border-left-color: #19b5fe;
        }
        .glo-slider__prev{
          border-right-color: #19b5fe;
        }
        body .companies-wrapper button:hover{
          background: transparent;
          outline: transparent;
        }
        `;
      document.head.appendChild(style);
    }
  
    controlSlider() {
      this.next.addEventListener('click', this.nextSlider.bind(this));
      this.prev.addEventListener('click', this.prevtSlider.bind(this));
    }
  
    prevtSlider() {
      if (this.options.infinity || this.options.position > 0) {
        --this.options.position;
        if (this.options.position < 0) {
          this.options.position = this.options.maxPosition;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      }
    }
  
    nextSlider() {
      if (this.options.infinity || this.options.position < this.options.maxPosition) {
        ++this.options.position;
        if (this.options.position > this.options.maxPosition) {
          this.options.position = 0;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      }
    }
  
    addArrow() {
      this.prev = document.createElement('button');
      this.next = document.createElement('button');
  
      this.prev.className = 'glo-slider__prev';
      this.next.className = 'glo-slider__next';
  
      this.main.appendChild(this.prev);
      this.main.appendChild(this.next);
    }
  
    responseInit() {
      const slidesToShowDefault = this.slidesToShow;
      const allRespone = this.responsive.map(item => item.breakpoint);
      const maxResponse = Math.max(...allRespone);
  
      const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow < maxResponse) {
          for (let i = 0; i < allRespone.length; i++) {
            if (widthWindow < allRespone[i]) {
              this.slidesToShow = this.responsive[i].slideToShow;
              this.options.widthSlide = Math.floor(100 / this.slidesToShow);
              this.addStyle();
            }
          }
        } else {
          this.slidesToShow = slidesToShowDefault;
          this.options.widthSlide = Math.floor(100 / this.slidesToShow);
          this.addStyle();
        }
      };
  
      checkResponse();
  
      window.addEventListener('resize', checkResponse);
  
    }
  }

  const carousel = new SliderCarousel({
    main: '.companies-wrapper',
    wrap: '.companies-hor',

    slidesToShow: 4,
    infinity: true,

    responsive: [{
      breakpoint: 1024,
      slideToShow: 3,
    },
      {
      breakpoint: 768,
      slideToShow: 2,
    },
      {
      breakpoint: 576,
      slideToShow: 1,
    }]
  });
  carousel.init();
};
export default classSliderCarousel;
