// Debounce do Lodash
const debounce = function(func, wait, immediate) {
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
  
window.addEventListener('scroll', debounce(function() {
  const menuBg = document.querySelector('.header-bg');
  menuBg.classList.toggle('ativo', window.scrollY > 0);
}, 50));