import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import GameScreenContainer from '../containers/GameScreenContainer'
import NutritionScreenContainer from '../containers/NutritionScreenContainer'
import StartScreenContainer from '../containers/StartScreenContainer'
import SetupScreenContainer from '../containers/SetupScreenContainer'
import SummaryScreenContainer from '../containers/SummaryScreenContainer'
import { saveToLocalStorage } from '../middlewares'
import reducer from '../reducer'
import thunk from 'redux-thunk'
import { loadPlayersFromServer } from '../actions'

const store = createStore(reducer, applyMiddleware(saveToLocalStorage, thunk))

class App extends Component {
  componentDidMount() {
    store.dispatch(loadPlayersFromServer())
  }

  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Route exact path="/" component={StartScreenContainer} />
            <Route path="/nutrition" component={NutritionScreenContainer} />
            <Route path="/setup" component={SetupScreenContainer} />
            <Route path="/summary" component={SummaryScreenContainer} />
            <Route path="/game" component={GameScreenContainer} />
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App
