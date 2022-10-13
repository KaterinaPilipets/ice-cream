(() => {
  const refs = {
    openModalBtn: document.querySelector("[location-modal-ll-open]"),
    closeModalBtn: document.querySelector("[location-modal-ll-close]"),
    modal: document.querySelector("[location-modal-ll]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();