// A color has six hexadecimal digits. padStart preserves leading zeroes.
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777216)
    .toString(16)
    .padStart(6, "0")
    .toUpperCase();
}

// Wait until the page elements are available before attaching the click event.
document.addEventListener("DOMContentLoaded", function () {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");
  const colorCode = document.getElementById("color-code");

  changeColorBtn.addEventListener("click", function () {
    const color = getRandomColor();
    colorBox.style.backgroundColor = color;
    colorBox.setAttribute("aria-label", "Color preview: " + color);
    colorCode.textContent = color;
  });
});
