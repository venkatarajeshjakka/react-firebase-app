import React, { Component }from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import AddStock from './components/portfolio/AddPortfolioStock'
import Portfolio from './components/portfolio/PortfolioSummary'
import AddReco from './components/portfolio/AddRecommendations'
import RecommendationSummary from './components/recommendations/RecommendationSummary'
import RecommendationSummaryIndividual from './components/recommendations/RecommendationSummaryIndividual'
class  App extends Component {
  render()
  {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} /> 
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateProject} />
          <Route path='/add-stock' component={AddStock} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/add-reco' component={AddReco} />
          <Route path='/reco-summary' component={RecommendationSummary} />
          <Route path='/reco-summary-individual/:stockCode' component={RecommendationSummaryIndividual} />
        </Switch>
        </div>
      </BrowserRouter>
    )
  }
  
}

export default App;
