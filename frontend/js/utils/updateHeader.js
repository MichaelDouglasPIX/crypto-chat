function updateDate() {
  let date = new Date(),
    currentYar = date.getFullYear();
  document.getElementById('currentYear').textContent = currentYar;
}

export { updateDate };
