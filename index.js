
/*const btn = ""
const rangeStartDate = ""
const rangeEndDate = document.getElementById("RangeEndDate")
const longestBearish = document.getElementById("LongestBearish")
const highestTradingVol = document.getElementById("HighestTradingVol")
const bestDayToBuy = document.getElementById("BestDayToBuy")
const bestDayToSell = document.getElementById("BestDayToSell")*/

var rangeStartDate = ""
var bestDayToSell = ""
window.onload = function() {
var btn = document.getElementById("btn")

/*var rangeStartDate = document.getElementById("RangeStartDate")
const rangeEndDate = document.getElementById("RangeEndDate")
const longestBearish = document.getElementById("LongestBearish")
const highestTradingVol = document.getElementById("HighestTradingVol")
const bestDayToBuy = document.getElementById("BestDayToBuy")*/

rangeStartDate = document.getElementById("BestDayToSell")
bestDayToSell = document.getElementById("BestDayToSell")
console.log(bestDayToSell);

btn.addEventListener("click", Esa);
}
/********************/
/* Retrieve data from here: https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=1392577232&to=1422577232
/********************/
function Esa() {
    console.log("RetrieveData")
//https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=1392577232&to=1422577232
//console.log(btn)
console.log(rangeStartDate)
//console.log(rangeStartDate.valueAsNumber)
}


