const sobreContador = document.querySelectorAll(".sobre-numeros li span");
sobreContador.forEach(item => {
  count1 = 0;
  item.style.display = "block";
  item.innerText = '0';
  const contador = +item.innerText;
  console.log(contador);
})