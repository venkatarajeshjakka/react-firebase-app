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
    }
}

module.exports = stockCalculation;