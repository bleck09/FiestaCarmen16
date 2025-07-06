 const track = document.getElementById('carruselTrack');
  const wrapper = document.getElementById('carruselWrapper');
  const images = track.querySelectorAll('img');

  let currentIndex = 0;
  let isDragging = false;
  let startX = 0;
  let animationInterval;

  function getImgWidth() {
    const img = images[0];
    const style = window.getComputedStyle(img);
    const margin = parseInt(style.marginRight || 0) + parseInt(style.marginLeft || 0);
    return img.offsetWidth + margin + 20; // incluye gap
  }

  function goToImage(index) {
    const width = getImgWidth();
    track.style.transition = 'transform 1s ease-in-out';
    track.style.transform = `translateX(-${width * index}px)`;
    currentIndex = index;
  }

  function startAutoSlide() {
    animationInterval = setInterval(() => {
      currentIndex++;
      if (currentIndex >= images.length) {
        track.style.transition = 'none';
        track.style.transform = `translateX(0px)`;
        currentIndex = 0;
        setTimeout(() => {
          goToImage(1);
          currentIndex = 1;
        }, 50);
      } else {
        goToImage(currentIndex);
      }
    }, 4000); // tiempo entre cambios
  }

  function stopAutoSlide() {
    clearInterval(animationInterval);
  }

  // TOUCH: pausa solo si tocan
  wrapper.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX;
    stopAutoSlide();
  });

  wrapper.addEventListener('touchend', () => {
    isDragging = false;
    startAutoSlide();
  });

  wrapper.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX;
    const walk = x - startX;
    track.style.transition = 'none';
    track.style.transform = `translateX(-${getImgWidth() * currentIndex - walk}px)`;
  });

  // MOUSE: permite arrastrar, pero no pausa
  wrapper.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
  });

  wrapper.addEventListener('mouseup', () => {
    isDragging = false;
  });

  wrapper.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX;
    const walk = x - startX;
    track.style.transition = 'none';
    track.style.transform = `translateX(-${getImgWidth() * currentIndex - walk}px)`;
  });

  window.addEventListener('load', () => {
    startAutoSlide();
  });