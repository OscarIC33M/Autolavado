document.addEventListener('DOMContentLoaded', function() {
  const abrirBtn = document.getElementById('abrir');
  const cerrarBtn = document.getElementById('cerrar');
  const nav = document.getElementById('nav');

  abrirBtn.addEventListener('click', function() {
      nav.classList.add('visible');
  });

  cerrarBtn.addEventListener('click', function() {
      nav.classList.remove('visible');
  });
});



  const modals = document.querySelectorAll('.modal');
  const openModalButtons = document.querySelectorAll('.open-modal');
  const closeModalButtons = document.querySelectorAll('.close');

  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.dataset.modal;
      const modal = document.getElementById(modalId);
      modal.style.display = 'block';
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      modal.style.display = 'none';
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });


