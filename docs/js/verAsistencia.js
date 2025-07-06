function verificarInvitada(event) {
    event.preventDefault();
  
    const frase = document.querySelectorAll('.input-field')[0];
    const codigo = document.querySelectorAll('.input-field')[1];
  
    const fraseValida = frase.value.trim().toLowerCase() === "vla";
    const codigoValido = codigo.value.trim() === "vla";
  
    if (fraseValida && codigoValido) {
      window.open("https://docs.google.com/spreadsheets/d/1dlGrEAL4SQMpZA0lTpa9riH3VlFDc04yGzW_J8Pb80w/edit?usp=sharing", "_blank");
    } else {
      if (!fraseValida) {
        frase.value = "";
        frase.placeholder = "Frase incorrecta";
        frase.style.border = "1px solid red";
      }
  
      if (!codigoValido) {
        codigo.value = "";
        codigo.placeholder = "Código incorrecto";
        codigo.style.border = "1px solid red";
      }
    }
  }
  
  // Limpia el borde rojo cuando se empieza a escribir de nuevo
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.input-field').forEach(input => {
      input.addEventListener('input', () => {
        input.style.border = "";
      });
    });
  });