// Debounce do Lodash
const debounceNR = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

let counters = document.querySelectorAll(".sobre-numeros li span");
let interval = 1000;
const animCounter = window.innerHeight * 0.9;

function numRel() {
  counters.forEach((counter) => {
    let startValue = 0;
    let endValue = parseInt(counter.getAttribute("data-counter"));
    let duration = Math.floor(interval / endValue);
    const counterTop = counter.getBoundingClientRect().top;
    const showNumRel = (counterTop - animCounter) < 0
    if (showNumRel) {
      let countUp = setInterval(function () {
        startValue += 1;
        counter.textContent = `+ ${startValue}`;
        if(startValue == endValue) {
          clearInterval(countUp);
        };
      }, duration);
    }
  });
}
window.addEventListener('scroll', debounceNR(function() {
  numRel();
}, 200));