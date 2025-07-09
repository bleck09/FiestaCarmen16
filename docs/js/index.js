// index.js

// Capturar parámetro de la URL
const params = new URLSearchParams(window.location.search);
const codigo = params.get('codigo');

// Diccionario de invitados y frases personalizadas
const invitados = {
  maria: {
    nombre: "María",
    mensaje: "¡María, será un honor verte compartir esta alegría con nosotros!"
  },
  familia: {
    nombre: "Familia",
    mensaje: "Querida familia González, nos sentimos felices de contar con su compañía en esta celebración tan especial."
  },
  jose: {
    nombre: "Jose",
    mensaje: "José Luis y Ana, su presencia embellecerá esta fecha de fe y alegría."
  },
  padrinos: {
    nombre: "Padrinos",
    mensaje: "Queridos padrinos López, su ejemplo y apoyo son parte esencial de esta celebración."
  },
  juanita: {
    nombre: "Juanita",
    mensaje: "Queridos amigos, Juanita y Carlos, será un honor compartir este día junto a ustedes."
  }
  // Puedes seguir agregando más invitados aquí
};

// Buscar información del invitado
const invitado = invitados[codigo];

// Cuando cargue la página:
window.addEventListener('DOMContentLoaded', () => {
  const saludoElement = document.getElementById('nombre-invitado');
  const mensajeElement = document.getElementById('mensaje-invitado');

  if (invitado) {
    // Si hay invitado específico
    if (saludoElement) {
      saludoElement.innerText = `¡Hola ${invitado.nombre}! Te esperamos con alegría ✨`;
    }
    if (mensajeElement) {
      mensajeElement.innerText = invitado.mensaje;
    }
  } else {
    // Si es general (sin código o código incorrecto)
    if (saludoElement) {
      saludoElement.innerText = "¡Bienvenido a la invitación!";
    }
    if (mensajeElement) {
      mensajeElement.innerText = "La Fe nos une, la tradición nos llama. Los Pasantes 2025 tenemos el honor de invitarle(s) a celebrar con nosotros la Festividad de la Virgen del Carmen, en nuestra querida provincia Ayopaya, Independencia.";
    }
  }
});


// envuelve en IIFE para no contaminar el scope global
(function() {
  const SKIP_CLASS = 'fast-forward';

  function skipAnimations() {
    document.body.classList.add(SKIP_CLASS);
    // opcional: si quieres que sólo ocurra la primera vez
    document.removeEventListener('click', skipAnimations);
    document.removeEventListener('dblclick', skipAnimations);
  }

  // al primer clic o doble clic en la página, cancelamos animaciones
  document.addEventListener('click', skipAnimations);
  document.addEventListener('dblclick', skipAnimations);
})();
