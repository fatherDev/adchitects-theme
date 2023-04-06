const header = document.querySelector('.js-header');
const menuList = document.querySelector('.nav-main__sublist');

const screenHeight = window.innerHeight;

const scrolledHeaderClassName = 'is-scrolled';

if (!document.body.classList.contains('home')) {
  document.body.classList.add('subpage');
}

let prevScrollPos = window.scrollY;
document.addEventListener('scroll', () => {
  const currentScrollPos = window.scrollY;
  if (prevScrollPos < currentScrollPos) {
    header.classList.add(scrolledHeaderClassName);
    menuList.classList.add(scrolledHeaderClassName);
  } else {
    header.classList.remove(scrolledHeaderClassName);
    menuList.classList.remove(scrolledHeaderClassName);
  }
  prevScrollPos = window.scrollY;
});
