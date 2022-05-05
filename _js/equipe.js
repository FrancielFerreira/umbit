const teamItem = document.querySelectorAll('.team-item a');

teamItem.forEach((item) => {
  function linkTeamItem(e) {
      event.preventDefault();
  }
  item.addEventListener('click', linkTeamItem);
})