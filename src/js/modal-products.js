(() => {
  const refs = {
    openModalBtn: document.querySelector("[produkts-modal-open]"),
    closeModalBtn: document.querySelector("[produkts-modal-close]"),
    modal: document.querySelector("[produkts-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();