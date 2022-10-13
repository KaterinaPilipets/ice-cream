(() => {
  const refs = {
    openModalBtn: document.querySelector("[hero-modall-open]"),
    closeModalBtn: document.querySelector("[hero-modall-close]"),
    modal: document.querySelector("[hero-modall]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();