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
            
            var changeInPrice = stockData.price.regularMarketChange;
            var currentPrice = stockData.price.regularMarketPrice;
            var totalChange= changeInPrice* parseInt(item.totalQuantity,10);
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
        
        var originalPrice = todayTotalCurrenValue - todayTotalChange;
        var dailyChangePercentage = (todayTotalChange/ originalPrice)*100;
        var gain = todayTotalCurrenValue - totalInvestmentValue;
        
        var gainPercentage = ( gain / totalInvestmentValue)*100;
        
        var data = {
            currentValue : todayTotalCurrenValue,
            investedValue : totalInvestmentValue,
            todayGain : Number.parseFloat(todayTotalChange).toFixed(2),
            dailyChangePercentage : Number.parseFloat(dailyChangePercentage).toFixed(2),
            totalGain : Number.parseFloat(gain).toFixed(2),
            gainPercentage : Number.parseFloat(gainPercentage).toFixed(2),
            todayChangeType : todayTotalChange < 0 ? 'negative' : 'positive',
             overallChangeType : gain < 0 ? 'negative' : 'positive'
        }

        return data;


    }
}

module.exports = stockCalculation;