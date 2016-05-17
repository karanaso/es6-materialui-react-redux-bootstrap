import React from 'react'
import ReactDOM from 'react-dom'
import setimmediate from 'setimmediate'
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import {getStoredState, persistStore, autoRehydrate} from 'redux-persist'

// 300 msec delay solutions
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

// Load all Budndles reducers
// InfoMessage Module Reducer
import { InfoMessageReducer } from './Bundles/InfoMessage/InfoMessageReducer'

// NavBar Module Reducer
import {SideBarsReducer} from './Bundles/NavBar/SideBarsReducer'

// Now that all reducers are loaded, apply them to combinedReducer and use autoRehydrate and persistStore
let store = createStore(
  combineReducers({
    InfoMessageReducer,
    SideBarsReducer
  }) , undefined, autoRehydrate() );
  persistStore(store);

//Now import all components that will be used in the router below
import WelcomeComponent from './Bundles/Welcome/Components/WelcomeComponent';
//import ..

//import the MASTER Layout where everything will be rendered inside.
import Layout from './Bundles/Layout/Layout'

//the Router class
export class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <Provider store={store}>
          <Router>
            <Route path="/" store={store} component={Layout}>
              <Route path="welcome" store={store} component={WelcomeComponent} />
            </Route>
          </Router>
        </Provider>
      )
  }
}

//subscribe the ReactDOM.render so it gets refreshed each time the state gets updated
store.subscribe( () => {
  ReactDOM.render( <AppRouter />,  document.getElementById('app') );
});
