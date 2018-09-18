import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'

import NutritionScreenContainer from '../containers/NutritionScreenContainer'

import { saveToLocalStorage } from '../middlewares'
import reducer from '../reducer'
import thunk from 'redux-thunk'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(saveToLocalStorage, thunk)
)

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Route
              exact
              path="/nutrition"
              component={NutritionScreenContainer}
            />
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App
