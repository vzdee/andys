function actualizarContador() {
    const fechaObjetivo = new Date("2025-04-13T23:59:00").getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
      document.getElementById("tituloTiempoRestante").style.display = "none";
      document.querySelector(".mensaje").classList.add("mostrar");
      setTimeout(() => {
        document.querySelector(".time-line").style.display = "block";
      }, 5000);
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("Dias").innerText = dias < 10 ? "0" + dias : dias;
    document.getElementById("Horas").innerText = horas < 10 ? "0" + horas : horas;
    document.getElementById("Minutos").innerText = minutos < 10 ? "0" + minutos : minutos;
    document.getElementById("Segundos").innerText = segundos < 10 ? "0" + segundos : segundos;
  }

  setInterval(actualizarContador, 1000);
  actualizarContador();