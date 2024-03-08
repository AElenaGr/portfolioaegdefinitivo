function imprimirPagina() {
  window.print();
}



// JavaScript para mostrar/ocultar secciones
document.querySelectorAll('.toggle-button').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    targetSection.classList.toggle('hidden');
  });
});
