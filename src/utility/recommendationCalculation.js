const underScore = require('underscore');
const lodash = require('lodash');

let recommendationCalculation ={

topRecommendation : function(filteredRecommendations)
{
        var groupedItems = underScore.groupBy(filteredRecommendations,'stockCode');
    
        var stockCodeArray = Object.keys(groupedItems);
        
        var finalData = [];
        for(var i=0; i<stockCodeArray.length; i++)
        {
            var individualItem =groupedItems[Object.keys(groupedItems)[i]];
            var buyItems = underScore.where(individualItem, {recommendation:'Buy'})

            var stockCode = Object.keys(groupedItems)[i];
            var count = underScore.size(buyItems);
            var data = {
             stockCode : stockCode,
                count : count
                 }
            finalData.push(data);
         }
         var sortedList = underScore.sortBy(finalData, 'count')
         var sortByDesc = lodash.reverse(sortedList);
         var countofItems = underScore.size(sortByDesc);

         return countofItems > 5 ? sortByDesc.slice(0,5):sortByDesc;

},
topIdeasBackgroundColor : function(count)
{
    var backgroundColor = ['#FF4C4C','#FF7C4C','#FFFF4C','#601E9E','#005900'];
    return backgroundColor.slice(0,count);
}

}

module.exports = recommendationCalculation;