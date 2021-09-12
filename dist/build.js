(()=>{"use strict";function e(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var r,i,a,s,l,c,d,u,f,m,p,h,v,y,b,g,S,w,x,E,k,L,q,A;(function(e){var t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds");function r(){var r,i,a,s=(r=(new Date(e).getTime()-(new Date).getTime())/1e3,i=Math.floor(r%60),a=Math.floor(r/60%60),{hours:Math.floor(r/60/60),minutes:a,seconds:i});s.seconds<10&&(s.seconds="0"+s.seconds),s.minutes<10&&(s.minutes="0"+s.minutes),s.hours<10&&(s.hours="0"+s.hours),t.textContent=s.hours,n.textContent=s.minutes,o.textContent=s.seconds}r();var i=setInterval(r,1e3,e);(new Date).getTime()>=new Date(e).getTime()&&(clearInterval(i),t.textContent="00",n.textContent="00",o.textContent="00")})("1 january 2022"),L=document.querySelector("body"),q=document.querySelector("menu"),(A=document.createElement("div")).className="shade",A.style.width="100%",A.style.height="100vh",A.style.background="#00000063",A.style.position="fixed",A.style.top="0",A.style.display="none",L.append(A),L.addEventListener("click",(function(e){var t=e.target;t.closest(".menu")&&(q.classList.toggle("active-menu"),A.style.display="block"),t.matches("a")&&(q.classList.remove("active-menu"),A.style.display="none"),t.matches(".shade")&&(q.classList.remove("active-menu"),A.style.display="none")})),x=document.querySelector(".service-header"),E=document.querySelectorAll(".service-header-tab"),k=document.querySelectorAll(".service-tab"),x.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&E.forEach((function(e,n){e===t&&function(e){for(var t=0;t<k.length;t++)e===t?(E[t].classList.add("active"),k[t].classList.remove("d-none")):(E[t].classList.remove("active"),k[t].classList.add("d-none"))}(n)}))})),function(){var e=document.querySelector(".portfolio-content"),t=document.querySelector(".portfolio-dots"),n=document.querySelectorAll(".portfolio-item");n.length>0&&n.forEach((function(e,n){var o=document.createElement("li");o.classList.add("dot"),0===n&&o.classList.add("dot-active"),t.append(o)}));var o,r=document.querySelectorAll(".dot"),i=0,a=function(e,t,n){e[t].classList.remove(n)},s=function(e,t,n){e[t].classList.add(n)},l=function(){a(n,i,"portfolio-item-active"),a(r,i,"dot-active"),++i>=n.length&&(i=0),s(n,i,"portfolio-item-active"),s(r,i,"dot-active")},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;o=setInterval(l,e)};e.addEventListener("click",(function(e){e.preventDefault();var t=e.target;a(n,i,"portfolio-item-active"),a(r,i,"dot-active"),t.matches("#arrow-right")?i++:t.matches("#arrow-left")?i--:t.matches(".dot")&&r.forEach((function(e,n){e===t&&(i=n)})),i>=n.length&&(i=0),i<0&&(i=n.length-1),s(n,i,"portfolio-item-active"),s(r,i,"dot-active")})),e.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(o)})),e.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&c()})),c(3e3)}(),(w=document.querySelector("#command")).addEventListener("mouseover",(function(e){var t=e.target;"command__photo"===t.className&&(t.dataset.a=t.src,t.src=t.dataset.img)})),w.addEventListener("mouseout",(function(e){var t=e.target;"command__photo"===t.className&&(t.src=t.dataset.a)})),(S=document.querySelector(".calc-block")).addEventListener("focusout",(function(e){var t=e.target;t.matches("INPUT")&&(t.value=t.value.replace(/\D/g,""))})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),o=document.querySelector(".calc-count"),r=document.querySelector(".calc-day"),i=document.getElementById("total"),a=0,s=function(){var i=1,s=1,l=t.options[t.selectedIndex].value,c=+n.value;o.value>1&&(i+=(o.value-1)/10),r.value&&r.value<5?s*=2:r.value&&r.value<10&&(s*=1.5),a=l&&c?Math.round(e*l*c*i*s):0},l=function(){var e=0,t=Math.round(100/(a/50)),n=setInterval((function(){(e+=50)>=a&&clearInterval(n),i.textContent=e}),t);S.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&clearInterval(n)}))};S.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&(s(),0!==a?l():i.textContent=a)}))}(100),function(){var e=document.createElement("div");e.textContent="Тут будет сообщение!",e.style.cssText="font-size: 2rem";var t=document.createElement("div");t.className="sk-plane";var n=function(){var e=document.querySelectorAll("input"),t=document.querySelectorAll('button[type="submit"]');e.forEach((function(e){e.value=""})),t.forEach((function(e){e.disabled=!0}))};document.body.addEventListener("submit",(function(o){var r=o.target;if(r.matches("#form1, #form2, #form3")){o.preventDefault(),r.appendChild(e),r.appendChild(t),t.style.display="block",e.textContent="";var i=new FormData(r),a={};i.forEach((function(e,t){a[t]=e})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(a).then((function(n){if(200!==n.status)throw new Error("status network not 200");e.textContent="Спасибо! Мы скоро с Вами свяжемся!",t.style.display="none"})).then(n).catch((function(n){e.textContent="Что-то пошло не так!",t.style.display="none",console.error("errorische",n)}))}}))}(),l=!1,c=!1,d=!1,u=!1,f='\n<p \nclass = "inserted"\nstyle ="color: #fff;\nbackground: red;\nfont-size: 14px;\nborder-radius: 8px;\npadding: 0 4px 0 4px;\nposition: absolute;\nz-index: 100;\ndisplay: none;\n">Введите имя русскими буквами</p>\n',m='\n<p \nclass = "inserted"\nstyle ="color: #fff;\nbackground: red;\nfont-size: 14px;\nborder-radius: 8px;\npadding: 0 4px 0 4px;\nposition: absolute;\nz-index: 100;\ndisplay: none;\n">Образец: mail@domen.zone</p>\n',p='\n<p \nclass = "inserted"\nstyle ="color: #fff;\nbackground: red;\nfont-size: 14px;\nborder-radius: 8px;\npadding: 0 4px 0 4px;\nposition: absolute;\nz-index: 100;\ndisplay: none;\n">Образец: +00000000000</p>\n',h=function(e){/^[а-яА-Я\s]+$/.test(e.value)?(e.style.background="#9eff78",e.nextElementSibling.style.display="none",l=!0):(e.style.background="#ffa2a2",e.nextElementSibling.style.display="block",l=!1),""!==e.value?e.value=e.value.split(/\s+/).map((function(e){return e[0].toUpperCase()+e.substring(1).toLowerCase()})).join(" "):e.placeholder="Имя русскими буквами"},v=function(e){/^\w+@{1}\w+\.\w{2,}$/.test(e.value)?(e.style.background="#9eff78",e.nextElementSibling.style.display="none",c=!0):(e.style.background="#ffa2a2",e.nextElementSibling.style.display="block",c=!1),e.value=e.value.replace(/_+/g,"_"),""===e.value&&(e.placeholder="Образец: mail@domen.zone")},y=function(e){/\+\d{11}/.test(e.value)?(e.style.background="#9eff78",e.nextElementSibling.style.display="none",d=!0):(e.style.background="#ffa2a2",e.nextElementSibling.style.display="block",d=!1),""===e.value&&(e.placeholder="Образец: +00000000000")},b=function(e){!0===l&&!0===c&&!0===d&&(e.disabled=!1)},g=function(e,t,n){e.addEventListener("focusout",(function(e){var o=e.target;o.matches(t)&&""===o.value&&(o.style.background="",n.forEach((function(e){e.style.display="none"})))}))},r=document.querySelector(".popup"),i=document.querySelectorAll(".popup-btn"),a=document.querySelector(".popup-content"),s=0,i.forEach((function(e){e.addEventListener("click",(function(){var e=window.innerWidth;r.style.display="block";var t=document.querySelector("#form3");t[0].insertAdjacentHTML("afterEnd",f),t[1].insertAdjacentHTML("afterEnd",p),t[2].insertAdjacentHTML("afterEnd",m);var n=t.querySelectorAll(".inserted"),o=t[3];o.disabled=!0,g(t,"#form3-name, #form3-email, #form3-phone",n),t.addEventListener("input",(function(e){var t=e.target;t.matches("#form3-name")&&h(t),t.matches("#form3-email")&&v(t),t.matches("#form3-phone")&&y(t),b(o)})),e>768&&function e(){s++,a.style.top=-30+s+"%",s<50&&setTimeout(e,6)}()}))})),r.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?r.style.display="none":(t=t.closest(".popup-content"))||(r.style.display="none"),s=0})),function(){var e=document.querySelector("#form1");e[0].insertAdjacentHTML("afterEnd",f),e[1].insertAdjacentHTML("afterEnd",m),e[2].insertAdjacentHTML("afterEnd",p);var t=e.querySelectorAll(".inserted"),n=e[3];n.disabled=!0,g(e,"#form1-name, #form1-email, #form1-phone",t),e.addEventListener("input",(function(e){var t=e.target;t.matches("#form1-name")&&h(t),t.matches("#form1-email")&&v(t),t.matches("#form1-phone")&&y(t),b(n)}))}(),function(){var e=document.querySelector("#form2");e[0].insertAdjacentHTML("afterEnd",f),e[1].insertAdjacentHTML("afterEnd",m),e[2].insertAdjacentHTML("afterEnd",p),e[3].insertAdjacentHTML("afterEnd",'\n<p \nclass = "inserted"\nstyle ="color: #fff;\nbackground: red;\nfont-size: 14px;\nborder-radius: 8px;\npadding: 0 4px 0 4px;\nposition: absolute;\nz-index: 100;\ndisplay: none;\n">Разрешен ввод только кирилицы</p>\n');var t=e.querySelectorAll(".inserted"),n=e[4];n.disabled=!0,g(e,"#form2-name, #form2-email, #form2-phone, #form2-message",t),e.addEventListener("input",(function(e){var t=e.target;t.matches("#form2-name")&&h(t),t.matches("#form2-email")&&v(t),t.matches("#form2-phone")&&y(t),t.matches("#form2-message")&&function(e){/^[\u0400-\u04FF\s\d\.\!\,-\:\(\)\"]+$/.test(e.value)?(e.style.background="#9eff78",e.nextElementSibling.style.display="none",u=!0):(e.style.background="#ffa2a2",e.nextElementSibling.style.display="block",u=!1),""===e.value&&(e.placeholder="Разрешен ввод только кирилицы")}(t),!0===l&&!0===c&&!0===d&&!0===u&&(n.disabled=!1)}))}(),new(function(){function o(e){var t=e.main,n=e.wrap,r=e.next,i=e.prev,a=e.infinity,s=void 0!==a&&a,l=e.position,c=void 0===l?0:l,d=e.slidesToShow,u=void 0===d?3:d,f=e.responsive,m=void 0===f?[]:f;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),t&&n||console.warn('slider-carousel: Необходимы 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(t),this.wrap=document.querySelector(n),this.slides=document.querySelector(n).children,this.next=document.querySelector(r),this.prev=document.querySelector(i),this.slidesToShow=u,this.options={position:c,infinity:s,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=m}var r,i;return r=o,(i=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.next&&this.prev||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var t,n=function(t,n){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=e(t))){o&&(t=o);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){o=o.call(t)},n:function(){var e=o.next();return s=e.done,e},e:function(e){l=!0,a=e},f:function(){try{s||null==o.return||o.return()}finally{if(l)throw a}}}}(this.slides);try{for(n.s();!(t=n.n()).done;)t.value.classList.add("glo-slider__item")}catch(e){n.e(e)}finally{n.f()}}},{key:"addStyle",value:function(){var e=document.getElementById("sliderCarousel-style");e||((e=document.createElement("style")).id="sliderCarousel-style"),e.textContent="\n        .glo-slider{\n          overflow: hidden !important;\n          // background: black;\n        }\n        .glo-slider__wrap{\n          display: flex !important;\n          transition: transform 0.5s !important;\n          will-change: transform !important;\n        }\n        .glo-slider__item{\n          display: flex !important;\n          align-items: center;\n          justify-content: center;\n          flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n          margin: auto 0 !important;\n        }\n        .glo-slider__prev,\n        .glo-slider__next{\n          margin: 0 20px;\n          border: 20px solid transparent;\n          background: transparent;\n        }\n        .glo-slider__next{\n          border-left-color: #19b5fe;\n        }\n        .glo-slider__prev{\n          border-right-color: #19b5fe;\n        }\n        body .companies-wrapper button:hover{\n          background: transparent;\n          outline: transparent;\n        }\n        "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){this.next.addEventListener("click",this.nextSlider.bind(this)),this.prev.addEventListener("click",this.prevtSlider.bind(this))}},{key:"prevtSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next)}},{key:"responseInit",value:function(){var n,o=this,r=this.slidesToShow,i=this.responsive.map((function(e){return e.breakpoint})),a=Math.max.apply(Math,function(e){if(Array.isArray(e))return t(e)}(n=i)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||e(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=function(){var e=document.documentElement.clientWidth;if(e<a)for(var t=0;t<i.length;t++)e<i[t]&&(o.slidesToShow=o.responsive[t].slideToShow,o.options.widthSlide=Math.floor(100/o.slidesToShow),o.addStyle());else o.slidesToShow=r,o.options.widthSlide=Math.floor(100/o.slidesToShow),o.addStyle()};s(),window.addEventListener("resize",s)}}])&&n(r.prototype,i),o}())({main:".companies-wrapper",wrap:".companies-hor",slidesToShow:4,infinity:!0,responsive:[{breakpoint:1024,slideToShow:3},{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]}).init(),function(){var e=document.querySelector("menu").querySelectorAll('a[href^="#"]'),t=document.querySelector("main>a");t.addEventListener("click",(function(e){e.preventDefault();var n=t.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}));var n,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw a}}}}(e);try{var i=function(){var e=n.value;"#close"!==e.attributes.href.value&&e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))};for(r.s();!(n=r.n()).done;)i()}catch(e){r.e(e)}finally{r.f()}}()})();