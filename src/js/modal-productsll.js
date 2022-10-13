(() => {
  const refs = {
    openModalBtn: document.querySelector("[produkts-modalll-open]"),
    closeModalBtn: document.querySelector("[produkts-modalll-close]"),
    modal: document.querySelector("[produkts-modalll]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();