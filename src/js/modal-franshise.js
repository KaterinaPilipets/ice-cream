(() => {
  const refs = {
    openModalBtn: document.querySelector("[franshise-modal-open]"),
    closeModalBtn: document.querySelector("[franshise-modal-close]"),
    modal: document.querySelector("[franshise-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();