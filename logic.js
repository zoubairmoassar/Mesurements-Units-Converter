var CM = document.getElementById("CM");
var INCH = document.getElementById("INCH");
var FEET = document.getElementById("FEET");
var num = document.getElementById("NumberNpt");
var cal = document.getElementById("convertion").innerHTML;

var checking = document.getElementsByClassName("Checkbox");

CM.addEventListener("change", function () {
  INCH.checked = false;
  FEET.checked = false;
  document.getElementById("convertion").innerHTML = "____";
  num.value = "";

  num.addEventListener("input", function () {
    if (num.value > 0) {
      document.getElementById("convertion").innerHTML =
        num.value +
        "cm" +
        " ≈ " +
        (num.value / 2.54).toFixed(2) +
        '"' +
        " ≈ " +
        (num.value / 30.48).toFixed(2) +
        "ft";
    } else if (num.value < 0) {
      document.getElementById("convertion").innerHTML =
        "Please enter a positive Input";
    }
  });
});

INCH.addEventListener("input", function () {
  FEET.checked = false;
  CM.checked = false;
  document.getElementById("convertion").innerHTML = "____";
  num.value = "";

  num.addEventListener("input", function () {
    if (num.value > 0) {
      document.getElementById("convertion").innerHTML =
        (num.value * 2.54).toFixed(2) +
        "cm" +
        " ≈ " +
        num.value +
        '"' +
        " ≈ " +
        (num.value / 12).toFixed(2) +
        "ft";
    } else if (num.value < 0) {
      document.getElementById("convertion").innerHTML =
        "Please enter a positive Input";
    }
  });
});

FEET.addEventListener("change", function () {
  INCH.checked = false;
  CM.checked = false;
  document.getElementById("convertion").innerHTML = "____";
  num.value = "";

  num.addEventListener("input", function () {
    if (num.value > 0) {
      document.getElementById("convertion").innerHTML =
        (num.value * 30.48).toFixed(2) +
        "cm" +
        " ≈ " +
        (num.value * 12).toFixed(2) +
        '"' +
        " ≈ " +
        num.value +
        "ft";
    } else if (num.value < 0) {
      document.getElementById("convertion").innerHTML =
        "Please enter a positive Input";
    }
  });
});

KG.addEventListener("change", function () {
  LBS.checked = false;
  document.getElementById("convertion").innerHTML = "____";
  num.value = "";

  num.addEventListener("input", function () {
    if (num.value > 0) {
      document.getElementById("convertion").innerHTML =
        num.value + " Kg" + " ≈ " + (num.value * 2.205).toFixed(3) + " LBS";
    } else if (num.value < 0) {
      document.getElementById("convertion").innerHTML =
        "Please enter a positive Input";
    }
  });
});

LBS.addEventListener("change", function () {
  KG.checked = false;
  document.getElementById("convertion").innerHTML = "____";
  num.value = "";

  num.addEventListener("input", function () {
    if (num.value > 0) {
      document.getElementById("convertion").innerHTML =
        (num.value / 2.205).toFixed(3) + " Kg" + " ≈ " + num.value + " LBS";
    } else if (num.value < 0) {
      document.getElementById("convertion").innerHTML =
        "Please enter a positive Input";
    }
  });
});

USD.addEventListener("change", function () {
  GBP.checked = false;
  EURO.checked = false;
  document.getElementById("convertion").innerHTML = "____";
  num.value = "";

  num.addEventListener("input", function () {
    if (num.value > 0) {
      document.getElementById("convertion").innerHTML =
        num.value +
        " $" +
        " ≈ " +
        (num.value * 0.94).toFixed(2) +
        " €" +
        " ≈ " +
        (num.value / 1.25).toFixed(2) +
        " £";
    } else if (num.value < 0) {
      document.getElementById("convertion").innerHTML =
        "Please enter a positive Input";
    }
  });
});

EURO.addEventListener("change", function () {
  GBP.checked = false;
  USD.checked = false;
  document.getElementById("convertion").innerHTML = "____";
  num.value = "";

  num.addEventListener("input", function () {
    if (num.value > 0) {
      document.getElementById("convertion").innerHTML =
        (num.value / 0.9).toFixed(2) +
        " $" +
        " ≈ " +
        num.value +
        " €" +
        " ≈ " +
        (num.value * 0.9).toFixed(2) +
        " £";
    } else if (num.value < 0) {
      document.getElementById("convertion").innerHTML =
        "Please enter a positive Input";
    }
  });
});

GBP.addEventListener("change", function () {
  EURO.checked = false;
  USD.checked = false;
  document.getElementById("convertion").innerHTML = "____";
  num.value = "";

  num.addEventListener("input", function () {
    if (num.value > 0) {
      document.getElementById("convertion").innerHTML =
        (num.value * 1.3).toFixed(2) +
        " $" +
        " ≈ " +
        (num.value / 0.8).toFixed(2) +
        " €" +
        " ≈ " +
        num.value +
        " £";
    } else if (num.value < 0) {
      document.getElementById("convertion").innerHTML =
        "Please enter a positive Input";
    }
  });
});
