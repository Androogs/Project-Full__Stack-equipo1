(() => {
  const refs = {
    openModalBuyBtn: document.querySelector('[data-modal-buy-open]'),
    openModalBuyBtn2: document.querySelector('[data-modal-buy-open2]'),
    closeModalBuyBtn: document.querySelector('[data-modal-buy-close]'),
    modalBuy: document.querySelector('[data-modal-buy]'),
  };

  refs.openModalBuyBtn.addEventListener('click', toggleModal);
  refs.openModalBuyBtn2.addEventListener('click', toggleModal);
  refs.closeModalBuyBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalBuy.classList.toggle('is-hidden');
  }
})();
