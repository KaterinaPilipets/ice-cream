(() => {
  const refs = {
    openModalBtn: document.querySelector("[location-modall-open]"),
    closeModalBtn: document.querySelector("[location-modall-close]"),
    modal: document.querySelector("[location-modall]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();