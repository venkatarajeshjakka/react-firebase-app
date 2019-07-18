const underScore = require('underscore');

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
}

}

module.exports = recommendationCalculation;