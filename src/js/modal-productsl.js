(() => {
  const refs = {
    openModalBtn: document.querySelector("[produkts-modall-open]"),
    closeModalBtn: document.querySelector("[produkts-modall-close]"),
    modal: document.querySelector("[produkts-modall]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();