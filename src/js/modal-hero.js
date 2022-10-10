(() => {
  const refs = {
    openModalBtn: document.querySelector("[hero-modal-open]"),
    closeModalBtn: document.querySelector("[hero-modal-close]"),
    modal: document.querySelector("[hero-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();