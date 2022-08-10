(() => {
  const refs = {
    menu: document.querySelector('[data-menu'),
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('page-menu--hidden');
    // refs.modalParent.classList.toggle('block-scroll');
  }
})();
