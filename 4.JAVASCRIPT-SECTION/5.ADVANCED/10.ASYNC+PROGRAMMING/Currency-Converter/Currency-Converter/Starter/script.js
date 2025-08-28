// icons
feather.replace();
// convert side
const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// exchange rates side

const baseCurrency = document.getElementById("base-currency");
const getRatesBtn = document.getElementById("get-rates-btn");
const exchangeRates = document.getElementById("exchange-rates");

// mode div selection

const exchangeMode = document.getElementById("exchange-mode");
const convertMode = document.getElementById("convert-mode");
const toggleBtns = document.querySelectorAll(".toggle-btn");

// api key
const apiKey = "fbbc187b1ebcf4d6e10b1dbd";

// toggle mode

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
    const mode = btn.getAttribute("data-mode");
    if (mode === "convert") {
      convertMode.style.display = "flex";
      exchangeMode.style.display = "none";
    } else {
      convertMode.style.display = "none";
      exchangeMode.style.display = "flex";
    }
  });
});

// conversion

convertBtn.addEventListener("click", () => {
  const amount = amountInput.value;
  const from = fromCurrency.value;
  const to = toCurrency.value;

  fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const rate = data.conversion_rate;
      const convertedAmount = (amount * rate).toFixed(2);

      result.innerHTML = `<span class='currency-icon'></span>${convertedAmount} ${to}`;
    })
    .catch((error) => {
      console.log(error);
    });
});

// exchange rate
getRatesBtn.addEventListener("click", async () => {
  const base = baseCurrency.value;
  try {
    const res = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${base}`
    );
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    let ratesHtml = "<h3>Exchange Rates</h3><ul>";
    for (const [currency, rate] of Object.entries(data.conversion_rates)) {
      if (currency !== base) {
        ratesHtml +=
          `<li><span class='currency-icon'></span>${currency}: ${rate.toFixed(4)}</li>`;
      }
    }
    ratesHtml += '</ul>'
    exchangeRates.innerHTML = ratesHtml
  } catch (error) {
    console.error("Error fetching conversion:", error);
  }
});
