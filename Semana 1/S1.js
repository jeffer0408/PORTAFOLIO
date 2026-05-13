window.onload = () => {
  const modal = document.getElementById("miModal");
  modal.showModal();
};

const modal = document.getElementById("miModal");

modal.addEventListener("click", (e) => {
  const rect = modal.getBoundingClientRect();
  const isInDialog =
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom;

  if (!isInDialog) {
    modal.close();
  }
});
