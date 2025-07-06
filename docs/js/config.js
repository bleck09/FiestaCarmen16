// Configura la fecha de tu graduación
const countDownDate = new Date("Jun 10, 2025 10:00:00").getTime();

// Actualiza la cuenta regresiva cada 1 segundo
const countdownFunction = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // Calcula días, horas, minutos, segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Inserta en el HTML
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // Si la cuenta regresiva termina
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "¡Llegó el gran día!";
  }
}, 1000);
