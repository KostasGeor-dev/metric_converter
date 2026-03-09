let numberInput = document.getElementById("number-input");
let btn = document.getElementById("btn");

let lengthC = document.getElementById("length-c");
let volumeC = document.getElementById("volume-c");
let massC = document.getElementById("mass-c");

btn.addEventListener("click", function () {
  let lengthMeters = (Number(numberInput.value) * 1.4).toFixed(3);
  let lengthSteps = (Number(numberInput.value) / 1.4).toFixed(3);

  let volumeLiters = (Number(numberInput.value) * 0.264).toFixed(3);
  let volumeGallons = (Number(numberInput.value) / 0.264).toFixed(3);

  let massKilo = (Number(numberInput.value) * 2.204).toFixed(3);
  let massPounds = (Number(numberInput.value) / 2.204).toFixed(3);

  lengthC.textContent = `${numberInput.value} meters = ${lengthMeters} steps | ${numberInput.value} steps = ${lengthSteps} meters`;

  volumeC.textContent = `${numberInput.value} liters = ${volumeLiters} gallons | ${numberInput.value} gallons = ${volumeGallons} liters`;

  massC.textContent = `${numberInput.value} kilos = ${massKilo} pounds | ${numberInput.value} pounds = ${massPounds} kilos`;
});
