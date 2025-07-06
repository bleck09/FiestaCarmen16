
const graduationDate = new Date("July 14, 2025 00:00:00").getTime();

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = graduationDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".section3-content").innerHTML = "<h1>¡Es el día del acto!</h1>";
  }
}, 1000);




function setupBook(bookSelector, coverSelector) {
  const book = document.querySelector(bookSelector);
  const cover = document.querySelector(coverSelector);
  if (!book || !cover) return;

  let openTimeout;
  let closeTimeout;
  let isUserInteracting = false;

  function setAutoOpenTimeout() {
    clearTimeout(openTimeout);
    openTimeout = setTimeout(() => {
      if (!isUserInteracting) {
        openBook(false);
        setAutoCloseTimeout();
      }
    }, 10000);
  }

  function setAutoCloseTimeout() {
    clearTimeout(closeTimeout);
    closeTimeout = setTimeout(() => {
      if (!isUserInteracting) {
        closeBook();
        setAutoOpenTimeout();
      }
    }, 10000);
  }

  function openBook(manual = false) {
    book.classList.add("open");
    if (manual) {
      isUserInteracting = true;
      setAutoCloseTimeout();
    }
  }

  function closeBook() {
    book.classList.remove("open");
    isUserInteracting = false;
    setAutoOpenTimeout();
  }

  function toggleBook() {
    if (book.classList.contains("open")) {
      closeBook();
    } else {
      openBook(true);
    }
  }

  book.addEventListener("click", toggleBook);
  setAutoOpenTimeout();
}

// 📘 Propietario
setupBook(".book_propietario", ".cover_propietario");

// 📕 Pasante
setupBook(".book_pasante", ".cover_pasante");



let misaIndex = 0;
  const misaSlides = document.querySelectorAll('.misa-slides img');

  function showMisaSlide(n) {
    misaSlides.forEach((img, i) => {
      img.style.display = (i === n) ? 'block' : 'none';
    });
  }

  function misaSlide(n) {
    misaIndex += n;
    if (misaIndex < 0) misaIndex = misaSlides.length - 1;
    if (misaIndex >= misaSlides.length) misaIndex = 0;
    showMisaSlide(misaIndex);
  }

  document.addEventListener("DOMContentLoaded", () => {
    showMisaSlide(misaIndex);
  });

  document.querySelectorAll('.thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const mainImage = document.getElementById('mainImage');
      const mainText = document.getElementById('mainText');
  
      const titulo = thumb.dataset.titulo;
      const nombres = thumb.dataset.nombres.split('|');
  
      const html = `
        <span class="titulo-slider">${titulo}</span>
        <span class="nombres-slider">${nombres.join('<br>')}</span>
      `;
  
      mainImage.src = thumb.src;
      mainText.innerHTML = html;
  
      // Reiniciar animación
      mainText.classList.remove('main-text');
      void mainText.offsetWidth;
      mainText.classList.add('main-text');
  
      // Manejar clases activas en thumbnails
      document.querySelectorAll('.thumb').forEach(img => img.classList.remove('active'));
      thumb.classList.add('active');
    });
  });


   // ➕ Nuevo slider (independiente)
  document.querySelectorAll('.thumb2').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const mainImage2 = document.getElementById('mainImage2');
      const mainText2 = document.getElementById('mainText2');

      const titulo2 = thumb.dataset.titulo;
      const nombres2 = thumb.dataset.nombres.split('|');

      const html2 = `
        <span class="titulo-slider2">${titulo2}</span>
        <span class="nombres-slider2">${nombres2.join('<br>')}</span>
      `;

      mainImage2.src = thumb.src;
      mainText2.innerHTML = html2;

      // Reiniciar animación
      mainText2.classList.remove('main-text2');
      void mainText2.offsetWidth;
      mainText2.classList.add('main-text2');

      document.querySelectorAll('.thumb2').forEach(img => img.classList.remove('active'));
      thumb.classList.add('active');
    });
  });








  let indexDiablada = 0;
let indexTinkus = 0;
let indexMorenada = 0;

function showSlides(slidesClass, index) {
  const slides = document.querySelectorAll(`.${slidesClass} img`);
  slides.forEach((img, i) => {
    img.style.display = (i === index) ? 'block' : 'none';
  });
}

function slideDiablada(n) {
  const slides = document.querySelectorAll('.diablada-slides img');
  indexDiablada = (indexDiablada + n + slides.length) % slides.length;
  showSlides('diablada-slides', indexDiablada);
}

function slideTinkus(n) {
  const slides = document.querySelectorAll('.tinkus-slides img');
  indexTinkus = (indexTinkus + n + slides.length) % slides.length;
  showSlides('tinkus-slides', indexTinkus);
}

function slideMorenada(n) {
  const slides = document.querySelectorAll('.morenada-slides img');
  indexMorenada = (indexMorenada + n + slides.length) % slides.length;
  showSlides('morenada-slides', indexMorenada);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides('diablada-slides', indexDiablada);
  showSlides('tinkus-slides', indexTinkus);
  showSlides('morenada-slides', indexMorenada);
});


