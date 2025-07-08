 // Función reutilizable para cada carrusel
function initCarrusel(id, direction = 'normal') {
  const carrusel = document.getElementById(id);
  let angle = 0;
  let isDragging = false;
  let startX = 0;
  let autoRotateInterval;
  let lastMoveTime = 0;

  const rotate = () => {
    angle = (angle + (direction === 'reverse' ? -0.3 : 0.3)) % 360;
    updateRotation();
  };

  const updateRotation = () => {
    carrusel.style.transform = `perspective(1200px) rotateY(${angle}deg)`;
  };

  const startAutoRotate = () => {
    if (!autoRotateInterval) {
      autoRotateInterval = setInterval(rotate, 30);
    }
  };

  const stopAutoRotate = () => {
    clearInterval(autoRotateInterval);
    autoRotateInterval = null;
  };

  const startDrag = (x) => {
    isDragging = true;
    stopAutoRotate();
    startX = x;
  };

  const moveDrag = (x) => {
    if (!isDragging) return;
    const delta = x - startX;
    angle += delta * 0.4;
    angle = angle % 360;
    updateRotation();
    startX = x;
    lastMoveTime = Date.now();
  };

  const endDrag = () => {
    isDragging = false;
    setTimeout(() => {
      if (Date.now() - lastMoveTime > 300) {
        startAutoRotate();
      }
    }, 500);
  };

  // Eventos para mouse
  carrusel.addEventListener("mousedown", e => startDrag(e.clientX));
  window.addEventListener("mousemove", e => moveDrag(e.clientX));
  window.addEventListener("mouseup", endDrag);

  // Eventos para touch (móvil)
  carrusel.addEventListener("touchstart", e => startDrag(e.touches[0].clientX));
  carrusel.addEventListener("touchmove", e => moveDrag(e.touches[0].clientX));
  carrusel.addEventListener("touchend", endDrag);

  startAutoRotate();
}

// Iniciar los 3 carruseles
document.addEventListener("DOMContentLoaded", () => {
  initCarrusel("carrusel3d_Diablada", 'normal'); // gira a la derecha
  initCarrusel("carrusel3d_tinku", 'reverse');   // gira a la izquierda
  initCarrusel("carrusel3d", 'normal');          // gira a la derecha
});


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.5 // Puedes ajustar: 0.5 = mitad de la tarjeta debe estar visible
  });

  // Observar cada tarjeta con la clase específica
  document.querySelectorAll('.mpasantes-card-glow').forEach(card => {
    observer.observe(card);
  });




  
const botones = document.querySelectorAll('.acordeon-btn');

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      const item = boton.parentElement;
      item.classList.toggle('activo');
    });
  });