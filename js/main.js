import { toggleNavbar } from "./navbar.js";
import { hoverEffect } from "./hoverEffect.js";

// Llama a la función hoverEffect al cargar la página
hoverEffect();

// Si quieres llamar a toggleNavbar en algún evento, usa un event listener
document.querySelector(".toggle-btn").addEventListener("click", toggleNavbar);

const amount = document.querySelector("#amount");
const fromCurrencySelect = document.querySelector("#from-currency");
const swapCurrencies = document.querySelector("#swap-currencies");
const converted = document.querySelector("#converted");
const toCurrencySelect = document.querySelector("#to-currency");
const conversionRate = document.querySelector("#conversion-rate");

const API_URL =
  "https://v6.exchangerate-api.com/v6/eb03a998d2561a4d7b204f1a/latest/";

let currencyRates = {};

async function initializeCurrency(baseCurrency = "USD") {
  try {
    const res = await fetch(API_URL + baseCurrency);
    const data = await res.json();

    if (data.result === "success") {
      currencyRates = data.conversion_rates;

      populateCurrencyOptions(Object.keys(currencyRates), baseCurrency);
      convertCurrency();
    } else {
      alert("Error al obtener las tasas de cambio.");
    }
  } catch (error) {
    console.error("Error de red:", error);
  }
}

function populateCurrencyOptions(currencyRates, baseCurrency) {
  fromCurrencySelect.innerHTML = "";
  toCurrencySelect.innerHTML = "";

  currencyRates.forEach((currency) => {
    const option1 = document.createElement("option");
    option1.value = currency;
    option1.textContent = currency;
    fromCurrencySelect.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = currency;
    option2.textContent = currency;
    toCurrencySelect.appendChild(option2);
  });

  fromCurrencySelect.value = baseCurrency;
  toCurrencySelect.value = "EUR";
}

function convertCurrency() {
  const amountValue = parseFloat(amount.value);
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  if (isNaN(amountValue) || amountValue <= 0) {
    converted.value = "";
    conversionRate.textContent = "Ingrese un valor valido.";
    return;
  }

  const rate = currencyRates[toCurrency] / currencyRates[fromCurrency];
  const convertedAmount = (amountValue * rate).toFixed(2);

  converted.value = convertedAmount;
  conversionRate.innerHTML = `${amountValue} ${fromCurrency} = 
  <span class="conversion-rate-span">${convertedAmount}</span> ${toCurrency}`;
}

swapCurrencies.addEventListener("click", (event) => {
  event.preventDefault();
  const tempCurrency = fromCurrencySelect.value;
  fromCurrencySelect.value = toCurrencySelect.value;
  toCurrencySelect.value = tempCurrency;
  convertCurrency();
});

amount.addEventListener("input", convertCurrency);
fromCurrencySelect.addEventListener("change", () => {
  initializeCurrency(fromCurrencySelect.value);
});
toCurrencySelect.addEventListener("change", convertCurrency);

initializeCurrency();
