const btnMobile = document.getElementById('btn-menu-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const menuMobile = document.querySelector('.header-menu');
    menuMobile.classList.toggle('ativo');
    const active = menuMobile.classList.contains('ativo');
    event.currentTarget.setAttribute('area-expanded', active);
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
// btnMobile.addEventListener('touchstart', toggleMenu);

// const btnTeam = document.querySelectorAll('#equipe a');
// console.log(btnTeam, 'teste');

// btnTeam.forEach((item) => {
//   function clickNoLink(event) {
//       event.preventDefault();
//       console.log('clicou');
//   }
//   item.addEventListener('click', clickNoLink);
// })

