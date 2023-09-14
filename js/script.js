document
  .getElementById("calculatorForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const side = parseFloat(
      document.getElementById("side").value.replace(",", ".")
    );

    if (!isNaN(side) && side >= 0) {
      const area = side * side;
      const perimeter = 4 * side;

      document.getElementById("areaResult").textContent = area.toFixed(2);
      document.getElementById("perimeterResult").textContent =
        perimeter.toFixed(2);
    } else {
      alert("Masukkan angka positif.");
    }
  });

document.getElementById("resetButton").addEventListener("click", function () {
  document.getElementById("calculatorForm").reset();
  document.getElementById("areaResult").textContent = "";
  document.getElementById("perimeterResult").textContent = "";
});
