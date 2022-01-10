
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
var btnGetData = document.getElementById("GetData")

/*var rangeStartDate = document.getElementById("RangeStartDate")
const rangeEndDate = document.getElementById("RangeEndDate")
const longestBearish = document.getElementById("LongestBearish")
const highestTradingVol = document.getElementById("HighestTradingVol")
const bestDayToBuy = document.getElementById("BestDayToBuy")*/

rangeStartDate = document.getElementById("BestDayToSell")
bestDayToSell = document.getElementById("BestDayToSell")
console.log(bestDayToSell);

btnGetData.addEventListener("click", RetrieveData);
}
/********************/
/* Retrieve data from here: https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=1392577232&to=1422577232
/********************/

let rawData = ""
function RetrieveData() {
    console.log("RetrieveData")
    let url = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=1392577232&to=1422577232";
    //console.log(btn)
    console.log(rangeStartDate)
    //console.log(rangeStartDate.valueAsNumber)
    $.getJSON(url, function(data, status) {
//        console.log(status)
//        console.log(data)
//        rawData = data
        prices = data.prices
        // Handle prices array
        processPrices(prices)

    });

function processPrices(prices) {
        //prices[0] date
        //prices[1] price
        console.log("prices: ", prices)
        console.log("prices 0: ", prices[0][0])
        console.log(`prices.length: ${prices.length}`)
//Loop through prices arrays

        prices.forEach(element => {
//            console.log(element[0])
            d = new Date(element[0])
            var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
            d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
            console.log(datestring)
            console.log(element[1])
        }); 

/*
    //    var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
        */
    }
}


