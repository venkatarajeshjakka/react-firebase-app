const underScore = require('underscore');
var cal = require('./stockCalculation');

let utility ={
 grouped : function(input)
 {
    var groupedItems = underScore.groupBy(input,'stockCode');
    
    var stockCodeArray = Object.keys(groupedItems);

    var finalData = [];
    for(var i=0; i<stockCodeArray.length; i++)
    {
        var individualItem =groupedItems[Object.keys(groupedItems)[i]];
        var stockCode = Object.keys(groupedItems)[i];
        var data = cal.indivdualStockFormat(individualItem,stockCode);
        finalData.push(data);
    }

    return finalData;

 },

 nseData : function(input)
 {
    var stockCodeArray = Object.keys(input);
    let finalData =[]; 
    for(var i=0; i<stockCodeArray.length; i++)
    {
        var individualStockInfo = input[Object.keys(input)[i]];
        var stockCode = Object.keys(input)[i];
        var stockArray = stockCode.split('.');
        var stockSymbol = underScore.first(stockArray);
        var data = {
            stockCode: stockSymbol,
            summaryDetail: individualStockInfo.summaryDetail,
            price: individualStockInfo.price
        }
        finalData.push(data);
    }
    return finalData;
 }

}
module.exports = utility;