const underScore = require('underscore');
var cal = require('./stockCalculation');

let utility ={
 grouped : function(input)
 {
    var groupedItems = underScore.groupBy(input,'stockCode');
        //get array of stock codes

    
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

 }

}
module.exports = utility;