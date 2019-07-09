const underScore =require('underscore');
const loadash = require('lodash');
let stockCalculation ={

    indivdualStockFormat : function(individualItem , stockCode)
    {
    
        var amount = underScore.map(individualItem, function(item)
        {
            var parsedQuantity = parseInt(item.quantity,10);
            var parsedCost = parseFloat(item.cost);
            return parsedQuantity*parsedCost;
        });
        var sum = loadash.sum(amount);
        //array of quantity
        var quantityArray = underScore.map(individualItem, function(item)
        {
            return parseInt(item.quantity,10);
        });
        //quantity sum

        var quantitySum = loadash.sum(quantityArray);
        
        //average Price
        var averagePrice = Number.parseFloat(sum / quantitySum).toFixed(2);
        var data ={
            stockCode: stockCode,
            averagePrice: parseFloat(averagePrice),
            totalQuantity:  quantitySum,
            totalValue : sum
        };
        return data;
    },
    portfolioCalculation : function( portfolioStocks,nseStockData)
    {
        var totalInvestmentValueArray = underScore.pluck(portfolioStocks,'totalValue');
        var totalInvestmentValue = loadash.sum(totalInvestmentValueArray);
        console.log(nseStockData);
        var dailyStockItem = underScore.map(portfolioStocks, function(item)
        {
            
            var stockData = underScore.findWhere(nseStockData, {stockCode: item.stockCode});
            console.log(stockData);
            var changeInPrice = stockData.price.regularMarketChange;
            var currentPrice = stockData.price.regularMarketPrice;
            var totalChange= changeInPrice*item.totalQuantity;
            var currentValue =item.totalQuantity*currentPrice;
            return {
                totalChange: totalChange,
                currentValue: currentValue
            }
        });
        var totalChangeArray = underScore.pluck(dailyStockItem,'totalChange');
        var todayTotalChange = loadash.sum(totalChangeArray);

        var totalCurrentValueArray = underScore.pluck(dailyStockItem,'currentValue');
        var todayTotalCurrenValue = loadash.sum(totalCurrentValueArray);

        var data = {
            currentValue : todayTotalCurrenValue,
            investedValue : totalInvestmentValue,
            todayGain : todayTotalChange
        }

        return data;


    }
}

module.exports = stockCalculation;