(() => {
  const refs = {
    menu: document.querySelector('[data-menu'),
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    modalParent: document.querySelector('[data-modal-parent'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    const expanded = refs.openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.openMenuBtn.setAttribute('aria-expanded', !expanded);
    refs.menu.classList.toggle('page-menu--hidden');
    refs.modalParent.classList.toggle('block-scroll--mobile');
  }
})();

// (() => {
//   const menuBtnRef = document.querySelector('[data-menu-button]');
//   const mobileMenuRef = document.querySelector('[data-menu]');

//   menuBtnRef.addEventListener('click', () => {
//     const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

//     menuBtnRef.classList.toggle('is-open');
//     menuBtnRef.setAttribute('aria-expanded', !expanded);

//     mobileMenuRef.classList.toggle('is-open');
//   });
// })();
