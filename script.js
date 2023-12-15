const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectUm = document.querySelector(".currency-select-um")

function convertValues() {
   const inputCurrencyValue = document.querySelector(".input-currency").value

   const currencyValueConvert = document.querySelector(".currency-value")
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

   const dolarToday = 4.96
   const euroToday = 5.44
   const libraToday = 6.33
   const bitcoinToday = 129.551

   if (currencySelect.value == "dolar") {
      currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputCurrencyValue / dolarToday)
   } else if (currencySelect.value == "euro") {
      currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputCurrencyValue / euroToday)
   } else if (currencySelect.value == "libra") {
      currencyValueConvert.innerHTML = new Intl.NumberFormat("gd-ES", {
         style: "currency",
         currency: "GBP"
      }).format(inputCurrencyValue / libraToday)
   } else if (currencySelect.value == "bitcoin") {
      currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "BTC"
      }).format(inputCurrencyValue / bitcoinToday)
   }

   if (currencySelectUm.value == "dolar") {
      currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputCurrencyValue);
   } else if (currencySelectUm.value == "euro") {
      currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputCurrencyValue);
   } else if (currencySelectUm.value == "real") {
      currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(inputCurrencyValue);
   } else if (currencySelectUm.value == "libra") {
      currencyValueToConvert.innerHTML = new Intl.NumberFormat("gd-ES", {
         style: "currency",
         currency: "GBP"
      }).format(inputCurrencyValue);
   } else if (currencySelectUm.value == "bitcoin") {
      currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "BTC"
      }).format(inputCurrencyValue);
   }
}

function changeCurrency() {
   const currencyName = document.getElementById("currency-name")
   const currencyImage = document.getElementById("currency-img")
   const currencyNameUm = document.getElementById("currency-nameum")
   const currencyImageUm = document.getElementById("currency-img-um")

   if (currencySelectUm.value === "dolar") {
      currencyNameUm.innerHTML = "Dólar Americano"
      currencyImageUm.src = "./assets/dolar.png"
   } else if (currencySelectUm.value === "euro") {
      currencyNameUm.innerHTML = "Euro"
      currencyImageUm.src = "./assets/euro.png"
   } else if (currencySelectUm.value === "libra"){
      currencyNameUm.innerHTML = "Libra"
      currencyImageUm.src = "./assets/libra.png"
   } else if (currencySelectUm.value === "bitcoin"){
      currencyNameUm.innerHTML = "Bitcoin";      currencyImageUm.src = "./assets/bitcoin.png";
   } else if (currencySelectUm.value === "real") {
      currencyNameUm.innerHTML = "Real Brasileiro";
      currencyImageUm.src = "./assets/real.png";
   }
   convertValues();
   if (currencySelect.value === "dolar") {
      currencyName.innerHTML = "Dólar Americano";
      currencyImage.src = "./assets/dolar.png";
   } else if (currencySelect.value === "euro") {
      currencyName.innerHTML = "Euro";
      currencyImage.src = "./assets/euro.png";
   } else if (currencySelect.value === "libra") {
      currencyName.innerHTML = "Libra";
      currencyImage.src = "./assets/libra.png";
   } else if (currencySelect.value === "bitcoin") {
      currencyName.innerHTML = "Bitcoin";
      currencyImage.src = "./assets/bitcoin.png";
   } else if (currencySelect.value === "real") {
      currencyName.innerHTML = "Real Brasileiro";
      currencyImage.src = "./assets/real.png";
   }
   convertValues();

   
}

currencySelectUm.addEventListener("change", changeCurrency);
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);