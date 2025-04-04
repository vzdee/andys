// Cambia esta fecha al momento especial ✨
const targetDate = new Date("2025-04-12T11:59:00").getTime();

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
const letter = document.getElementById("letter");
const message = document.getElementById("message");

let unlocked = false;

letter.addEventListener("click", () => {
  const now = new Date().getTime();
  if (now >= targetDate && !unlocked) {
    unlocked = true;
    letter.classList.remove("locked");
    letter.classList.add("unlocked");
    letter.innerText = "💌 Carta abierta";
    message.classList.remove("hidden");
  } else if (!unlocked) {
    letter.classList.add("locked");
    setTimeout(() => {
      letter.classList.remove("locked");
    }, 500); // Reinicia animación
  }
});



