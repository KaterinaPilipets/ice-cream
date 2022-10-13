(() => {
  const refs = {
    openModalBtn: document.querySelector("[location-modalll-open]"),
    closeModalBtn: document.querySelector("[location-modalll-close]"),
    modal: document.querySelector("[location-modalll]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();