const underScore = require('underscore');
const loadash = require('lodash')
const utility = require('./utility')

let recommendationCalculation ={
getrecommendations: function(filteredRecommendations)
{
    return utility.filterRecommendation(filteredRecommendations);
},
topRecommendation : function(filteredRecommendations)
{
    
     var sortByDesc = utility.filterRecommendation(filteredRecommendations);
     var countofItems = underScore.size(sortByDesc);

     return countofItems > 5 ? sortByDesc.slice(0,5):sortByDesc;

},
topIdeasBackgroundColor : function(count)
{
    var backgroundColor = ['#FF4C4C','#FF7C4C','#FFFF4C','#601E9E','#005900'];
    return backgroundColor.slice(0,count);
},
targetRange : function(currentprice,recommendationArray)
{
    var filteredData = underScore.filter(recommendationArray, function(item)
    {
        return item.targetprice > currentprice;
    });
    var maxValue = underScore.max(filteredData, function(item)
    {
        return item.targetprice;
    });
    var minValue = underScore.min(filteredData,function(item)
    {
        return item.targetprice;
    }); 

   return {
        minValue : minValue,
        maxValue : maxValue
    }
    
},

targetRangeText : function(minValue, maxValue)
{
    var rangeValue = ''
    if(minValue === maxValue)
    {
        rangeValue = minValue;
    }
    else
    {
        rangeValue = minValue + '-' + maxValue
    }
    return rangeValue;
},
targetPotential : function(currentprice,targetPrice)
{
    if(targetPrice > currentprice)
    {
        var newNumber = targetPrice - currentprice;
        var percentageIncrease = Number.parseFloat((newNumber / currentprice)* 100).toFixed(2);
        return percentageIncrease + "%";
    }
    else
    {
        return 'Target Hit';
    }
},
filterWithDate : function(recommendationArray)
{
    var sortbyValues = underScore.sortBy(recommendationArray,'date')
    return loadash.reverse(sortbyValues)
}

}

module.exports = recommendationCalculation;