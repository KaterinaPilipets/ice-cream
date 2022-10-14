(() => {
  const refs = {
    openModalBtn: document.querySelector("[hero-modal1-open]"),
    closeModalBtn: document.querySelector("[hero-modal1-close]"),
    modal: document.querySelector("[hero-modal1]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();