const toggleButton = document.getElementsByClassName('toggle-Button')[0]
const navl = document.getElementsByClassName('navl')[0]

document.addEventListener('click', () => {
  navl.classList.toggle('active');
})
