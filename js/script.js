// Cambia esta fecha al momento especial ✨
const targetDate = new Date().getTime() + 5000;

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.querySelector(".counter h1").innerText = "¡Llegó el momento!";
        document.querySelector(".timebox").style.display = "none";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

//carta
const letterImg = document.getElementById("letter-img");
const letterContainer = document.getElementById("letter-container");
const message = document.getElementById("message");

let unlocked = false;

letterContainer.addEventListener("click", () => {
  const now = new Date().getTime();

  if (now >= targetDate && !unlocked) {
    unlocked = true;

    // Agrega clase para animar
    letterImg.classList.add("flip-open");

    // Espera la animación y luego cambia la imagen
    setTimeout(() => {
      letterImg.src = "media/sobre-abierto.png";
    }, 300); // mitad de la animación

    // Muestra el mensaje con algo de delay para hacerlo más lindo
    setTimeout(() => {
      message.classList.remove("hidden");
    }, 600);
  } else if (!unlocked) {
    // Vibra si no es el momento
    letterImg.classList.add("shake");
    setTimeout(() => {
      letterImg.classList.remove("shake");
    }, 400);
  }
});




