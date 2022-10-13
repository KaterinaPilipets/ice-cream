(() => {
  const refs = {
    openModalBtn: document.querySelector("[hero-modal2-open]"),
    closeModalBtn: document.querySelector("[hero-modal2-close]"),
    modal: document.querySelector("[hero-modal2]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();