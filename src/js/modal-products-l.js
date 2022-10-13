(() => {
  const refs = {
    openModalBtn: document.querySelector("[location-modal-l-open]"),
    closeModalBtn: document.querySelector("[location-modal-l-close]"),
    modal: document.querySelector("[location-modal-l]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();