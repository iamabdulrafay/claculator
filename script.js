let string = "";

let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});

function toggleCalculator() {
  const calculatorDiv = document.getElementById("calculator");
  const onOffButton = document.getElementById("onOffButton");

  calculatorOn = !calculatorOn;
  if (calculatorOn) {
    calculatorDiv.style.display = "block";
    string = "";
    onOffButton.textContent = string;
  } else {
    calculatorDiv.style.display = "none";
    string = string + e.target.innerHTML;
    onOffButton.textContent = string;
  }
}

gsap.from("body>h1", {
  y: -500,
  rotate: "20deg",
  opacity: 0,
  scale: 5,
  duration: 1,
});
