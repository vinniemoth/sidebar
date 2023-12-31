const menuBtn = document.getElementById('button');
const menu = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  if (menu.classList.contains('openSidebar')) {
    menu.classList.toggle('openSidebar');
    menu.classList.toggle('openSidebar-reverse');
    menu.classList.toggle('active');
    console.log('HELLO!');
  } else if (menu.classList.contains('openSidebar-reverse')) {
    menu.classList.toggle('openSidebar-reverse');
    menu.classList.toggle('openSidebar');
    menu.classList.toggle('active');
    console.log('HELLO!');
  }
});
