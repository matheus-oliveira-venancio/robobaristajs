class Modal {
  constructor(id) {
    this.id = id;
    this.modal = document.querySelector(id);
  }

  static open(id) {
    const modal = document.querySelector(id);
    modal.classList.remove("d-none");
    modal.classList.add("d-flex");
  }

  static close(id) {
    const modal = document.querySelector(id);
    modal.classList.remove("d-flex");
    modal.classList.add("d-none");
  }
}
