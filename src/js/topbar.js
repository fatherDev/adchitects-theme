const closeButton = document.querySelector('.js-close');
const topbar = document.querySelector('.topbar');
const header = document.querySelector('.js-header');

closeButton.addEventListener('click', (e) => {
  topbar.classList.add('is-hidden');
  header.classList.add('no-gap');
  localStorage.setItem('hide-info-bar', true);
});

// Sprawdzenie, czy pasek informacyjny powinien być wyświetlany
if (localStorage.getItem('hide-info-bar')) {
  topbar.classList.add('is-hidden');
  header.classList.add('no-gap');
  header.style.transition = 'none';
  topbar.style.transition = 'none';
  localStorage.setItem('hide-info-bar', true);
  setTimeout(() => {
    header.style.transition = 'all 0.5s cubic-bezier(0.7, 0, 0.3, 1)';
  }, 100);
}
