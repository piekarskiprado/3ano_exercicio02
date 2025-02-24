document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form-sorteador");
  const resultado = document.querySelector(".resultado");
  const resultadoValor = document.querySelector("#resultado-valor");

  function sortearNumero(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const numeroMaximo = parseInt(
      document.querySelector("#numero-maximo").value
    );
    if (!isNaN(numeroMaximo) && numeroMaximo > 0) {
      resultadoValor.innerText = sortearNumero(numeroMaximo);
      resultado.style.display = "block";
    } else {
      alert("Por gentileza, coloque um número correto.");
    }
  });
});
