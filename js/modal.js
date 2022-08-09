(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    modalParent: document.querySelector('[data-modal-parent'),
    menu: document.querySelector('[data-menu'),
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.modalParent.classList.toggle('block-scroll');
  }

  function toggleMenu() {
    refs.menu.classList.toggle('page-menu--hidden');
    // refs.modalParent.classList.toggle('block-scroll');
  }
})();
