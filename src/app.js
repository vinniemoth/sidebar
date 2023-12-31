const menuBtn = document.getElementById('button');
const menu = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  addSidebarAnimation();
});

const addSidebarAnimation = () => {
  menu.classList.toggle('openSidebar');
  menu.classList.toggle('openSidebar-reverse');
  menu.classList.toggle('active');
  return;
};
