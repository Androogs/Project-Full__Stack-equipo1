(() => {
  const refs = {
    openModalSubsBtn: document.querySelector('[data-modal-subs-open]'),
    closeModalSubsBtn: document.querySelector('[data-modal-subs-close]'),
    modalSubscribe: document.querySelector('[data-modal-subscribe]'),
  };

  refs.openModalSubsBtn.addEventListener('click', toggleModal);
  refs.closeModalSubsBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalSubscribe.classList.toggle('is-hidden');
  }
})();
