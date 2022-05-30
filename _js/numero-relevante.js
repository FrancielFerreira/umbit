const numeros = document.querySelectorAll("[data-counter]");
const secaoNumeros = document.querySelector(".sobre");
const alturaMinima = window.innerHeight * 0.6;

function animaNumeros() {
  let interval = 1000;
  numeros.forEach((numero) => {
    let startValue = 0;
    let endValue = +numero.getAttribute("data-counter");
    let duration = Math.floor(interval / endValue);
    let countUp = setInterval(function () {
      startValue++;
      numero.innerText = `+ ${startValue}`;
    if(startValue == endValue) {
        clearInterval(countUp);
      };
    }, duration);
  });
};

function numRel() {
  const sectionTop = secaoNumeros.getBoundingClientRect().top;
  const ativarNumeros = (sectionTop - alturaMinima) > 0;
  const ativarNumeros2 = (sectionTop - alturaMinima) < 16;
  if (ativarNumeros && ativarNumeros2) {
    console.log("ativar");
    animaNumeros();
  };
};

window.addEventListener('scroll', numRel);
