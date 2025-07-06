  const carrusel = document.getElementById("carrusel3d");
  let angle = 0;
  let isDragging = false;
  let startX = 0;
  let autoRotateInterval;
  let lastMoveTime = 0;

  // Auto rotación con velocidad controlada
  const rotate = () => {
    angle = (angle + 0.3) % 360;
    updateRotation();
  };

  const updateRotation = () => {
    carrusel.style.transform = `perspective(1000px) rotateY(${angle}deg)`;
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

  // Manejo de arrastre
  const startDrag = (x) => {
    isDragging = true;
    stopAutoRotate();
    startX = x;
  };

  const moveDrag = (x) => {
    if (!isDragging) return;
    const delta = x - startX;
    angle += delta * 0.4;
    angle = angle % 360; // evita que se dispare a números altos
    updateRotation();
    startX = x;
    lastMoveTime = Date.now();
  };

  const endDrag = () => {
    isDragging = false;
    // Espera un pequeño tiempo antes de volver a auto-rotar
    setTimeout(() => {
      // Solo si no ha habido movimiento reciente
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

  // Iniciar auto-rotación
  startAutoRotate();