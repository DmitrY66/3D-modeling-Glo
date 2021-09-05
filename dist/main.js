(()=>{"use strict";(function(e){let t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),a=document.querySelector("#timer-seconds");function n(){let n=function(){let t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t%60),a=Math.floor(t/60%60);return{hours:Math.floor(t/60/60),minutes:a,seconds:o}}();n.seconds<10&&(n.seconds="0"+n.seconds),n.minutes<10&&(n.minutes="0"+n.minutes),n.hours<10&&(n.hours="0"+n.hours),t.textContent=n.hours,o.textContent=n.minutes,a.textContent=n.seconds}n();let c=setInterval(n,1e3,e);(new Date).getTime()>=new Date(e).getTime()&&(clearInterval(c),t.textContent="00",o.textContent="00",a.textContent="00")})("1 january 2022"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu");e.addEventListener("click",(()=>{t.classList.toggle("active-menu")})),t.addEventListener("click",(e=>{e.target.matches("a")&&t.classList.remove("active-menu")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let a=e.target;a=a.closest(".service-header-tab"),a&&t.forEach(((e,n)=>{e===a&&(e=>{for(let a=0;a<o.length;a++)e===a?(t[a].classList.add("active"),o[a].classList.remove("d-none")):(t[a].classList.remove("active"),o[a].classList.add("d-none"))})(n)}))}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelector(".portfolio-dots"),o=document.querySelectorAll(".portfolio-item");o.length>0&&o.forEach(((e,o)=>{const a=document.createElement("li");a.classList.add("dot"),0===o&&a.classList.add("dot-active"),t.append(a)}));const a=document.querySelectorAll(".dot");let n,c=0;const r=(e,t,o)=>{e[t].classList.remove(o)},s=(e,t,o)=>{e[t].classList.add(o)},l=()=>{r(o,c,"portfolio-item-active"),r(a,c,"dot-active"),c++,c>=o.length&&(c=0),s(o,c,"portfolio-item-active"),s(a,c,"dot-active")},d=(e=3e3)=>{n=setInterval(l,e)};e.addEventListener("click",(e=>{e.preventDefault();let t=e.target;r(o,c,"portfolio-item-active"),r(a,c,"dot-active"),t.matches("#arrow-right")?c++:t.matches("#arrow-left")?c--:t.matches(".dot")&&a.forEach(((e,o)=>{e===t&&(c=o)})),c>=o.length&&(c=0),c<0&&(c=o.length-1),s(o,c,"portfolio-item-active"),s(a,c,"dot-active")})),e.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)})),e.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&d()})),d(3e3)})(),(()=>{const e=document.querySelector("#command");e.addEventListener("mouseover",(e=>{let t=e.target;"command__photo"===t.className&&(t.dataset.a=t.src,t.src=t.dataset.img)})),e.addEventListener("mouseout",(e=>{let t=e.target;"command__photo"===t.className&&(t.src=t.dataset.a)}))})(),(()=>{const e=document.querySelector(".calc-block");e.addEventListener("focusout",(e=>{let t=e.target;t.matches("INPUT")&&(t.value=t.value.replace(/\D/g,""))})),((t=100)=>{const o=document.querySelector(".calc-type"),a=document.querySelector(".calc-square"),n=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),r=document.getElementById("total");let s=0;e.addEventListener("change",(l=>{const d=l.target;(d.matches("select")||d.matches("input"))&&((()=>{let e=1,r=1;const l=o.options[o.selectedIndex].value,d=+a.value;n.value>1&&(e+=(n.value-1)/10),c.value&&c.value<5?r*=2:c.value&&c.value<10&&(r*=1.5),s=l&&d?Math.round(t*l*d*e*r):0})(),0!==s?(()=>{let t=0,o=Math.round(1e3/(s/10)),a=setInterval((()=>{t+=10,t===s&&clearInterval(a),r.textContent=t}),o);e.addEventListener("change",(e=>{const t=e.target;(t.matches("select")||t.matches("input"))&&clearInterval(a)}))})():r.textContent=s)}))})(100)})(),(()=>{const e=document.createElement("div");e.textContent="Тут будет сообщение!",e.style.cssText="font-size: 2rem";const t=()=>{const e=document.querySelectorAll("input"),t=document.querySelectorAll('button[type="submit"]');e.forEach((e=>{e.value=""})),t.forEach((e=>{e.disabled=!0}))};document.body.addEventListener("submit",(o=>{const a=o.target;if(a.matches("#form1, #form2, #form3")){o.preventDefault(),a.appendChild(e),e.textContent="Загрузка...";const n=new FormData(a);let c={};n.forEach(((e,t)=>{c[t]=e})),(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(c).then((t=>{if(200!==t.status)throw new Error("status network not 200");e.textContent="Спасибо! Мы скоро с Вами свяжемся!"})).then(t).catch((t=>{e.textContent="Что-то пошло не так!",console.error("errorische",t)}))}}))})(),(()=>{let e=!1,t=!1,o=!1,a=!1;const n=t=>{/^[а-яА-Я\s]+$/.test(t.value)?(t.style.background="#9eff78",e=!0):(t.style.background="#ffa2a2",e=!1),""!==t.value?t.value=t.value.split(/\s+/).map((e=>e[0].toUpperCase()+e.substring(1).toLowerCase())).join(" "):t.placeholder="Имя русскими буквами"},c=e=>{/^\w+@{1}\w+\.\w{2,}$/.test(e.value)?(e.style.background="#9eff78",t=!0):(e.style.background="#ffa2a2",t=!1),e.value=e.value.replace(/_+/g,"_"),""===e.value&&(e.placeholder="Образец: mail@domen.zone")},r=e=>{/\+\d{11}/.test(e.value)?(e.style.background="#9eff78",o=!0):(e.style.background="#ffa2a2",o=!1),""===e.value&&(e.placeholder="Образец: +00000000000")},s=a=>{!0===e&&!0===t&&!0===o&&(a.disabled=!1)},l=(e,t)=>{e.addEventListener("focusout",(e=>{let o=e.target;o.matches(t)&&""===o.value&&(o.style.background="")}))};(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup-content");let a=0;t.forEach((t=>{t.addEventListener("click",(()=>{let t=window.innerWidth;e.style.display="block";const d=document.querySelector("#form3"),u=d[3];if(u.disabled=!0,l(d,"#form3-name, #form3-email, #form3-phone"),d.addEventListener("input",(e=>{let t=e.target;t.matches("#form3-name")&&n(t),t.matches("#form3-email")&&c(t),t.matches("#form3-phone")&&r(t),s(u)})),t>768){const e=()=>{a++,o.style.top=-30+a+"%",a<50&&setTimeout(e,6)};e()}}))})),e.addEventListener("click",(t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"),o||(e.style.display="none")),a=0}))})(),(()=>{const e=document.querySelector("#form1"),t=e[3];t.disabled=!0,l(e,"#form1-name, #form1-email, #form1-phone"),e.addEventListener("input",(e=>{let o=e.target;o.matches("#form1-name")&&n(o),o.matches("#form1-email")&&c(o),o.matches("#form1-phone")&&r(o),s(t)}))})(),(()=>{const s=document.querySelector("#form2"),d=s[4];d.disabled=!0,l(s,"#form2-name, #form2-email, #form2-phone, #form2-message"),s.addEventListener("input",(s=>{let l=s.target;l.matches("#form2-name")&&n(l),l.matches("#form2-email")&&c(l),l.matches("#form2-phone")&&r(l),l.matches("#form2-message")&&(e=>{/^[\u0400-\u04FF\s\d\.\!\,-\:\(\)\"]+$/.test(e.value)?(e.style.background="#9eff78",a=!0):(e.style.background="#ffa2a2",a=!1),""===e.value&&(e.placeholder="Разрешен ввод только кирилицы")})(l),!0===e&&!0===t&&!0===o&&!0===a&&(d.disabled=!1)}))})()})()})();