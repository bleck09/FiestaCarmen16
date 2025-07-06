 const carrusel = document.getElementById("carrusel3d");
  let angle = 0;
  let isDragging = false;
  let startX = 0;
  let autoRotateInterval;

  const rotate = () => {
    angle += 0.3;
    carrusel.style.transform = `perspective(1000px) rotateY(${angle}deg)`;
  };

  const startAutoRotate = () => {
    autoRotateInterval = setInterval(rotate, 30);
  };

  const stopAutoRotate = () => {
    clearInterval(autoRotateInterval);
  };

  // Mouse / Touch handlers
  const startDrag = (x) => {
    isDragging = true;
    stopAutoRotate();
    startX = x;
  };

  const moveDrag = (x) => {
    if (!isDragging) return;
    let delta = x - startX;
    angle += delta * 0.3;
    carrusel.style.transform = `perspective(1000px) rotateY(${angle}deg)`;
    startX = x;
  };

  const endDrag = () => {
    isDragging = false;
    startAutoRotate();
  };

  // Mouse events
  carrusel.addEventListener("mousedown", e => startDrag(e.clientX));
  window.addEventListener("mousemove", e => moveDrag(e.clientX));
  window.addEventListener("mouseup", endDrag);

  // Touch events
  carrusel.addEventListener("touchstart", e => startDrag(e.touches[0].clientX));
  carrusel.addEventListener("touchmove", e => moveDrag(e.touches[0].clientX));
  carrusel.addEventListener("touchend", endDrag);

  // Iniciar auto rotación al cargar
  startAutoRotate();