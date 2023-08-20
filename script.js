


const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
function convertValues() { //3
   const inputCurrencyValue = document.querySelector(".input-currency").value //4 para pegar so o valor do input

   const currencyValueToConvert = //Valor em real
      document.querySelector(".currency-value-to-convert")

   const currencyValueConvert = //Valor convertido
      document.querySelector(".currency-value")

   const dolarToday = 4.96
   const euroToday = 5.44
   const libraToday = 6.33
   const bitcoinToday = 129.551

   if (currencySelect.value == "dolar") {
      currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputCurrencyValue / dolarToday)
   }

   if (currencySelect.value == "euro") {
      currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputCurrencyValue / euroToday)
   }


   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
   }).format(inputCurrencyValue)

   if (currencySelect.value == "libra") {
      currencyValueConvert.innerHTML = new Intl.NumberFormat("gd-ES", {
         style: "currency",
         currency: "GBP"
      }).format(inputCurrencyValue / libraToday)
   }

   if (currencySelect.value == "bitcoin") {
      currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "BTC"
      }).format(inputCurrencyValue / bitcoinToday)
   }

}

function changeCurrency(){

const currencyName = document.getElementById("currency-name")
const currencyImage = document.querySelector(".currency-img")

if (currencySelect.value == "dolar"){
   currencyName.innerHTML = "Dólar Americano"
   currencyImage.src = "./assets/dolar.png"
} 

if (currencySelect.value == "euro"){
   currencyName.innerHTML = "Euro"
   currencyImage.src = "./assets/euro.png"
} 

if (currencySelect.value == "libra"){
   currencyName.innerHTML = "Libra"
   currencyImage.src = "./assets/libra.png"
} 

if (currencySelect.value == "bitcoin"){
   currencyName.innerHTML = "Bitcoin"
   currencyImage.src = "./assets/bitcoin.png"
} 

convertValues()
}

currencySelect.addEventListener("change", changeCurrency )
convertButton.addEventListener("click", convertValues) //2 Este é um ouvinte de eventos, ou seja quando eu clicar no meu botão ele irá chamar
// a minha função criada acima, e traves do console.log irá mostrar cada vez que eu clicar a msg funcionou
