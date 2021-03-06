import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Terms from './Terms'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './configureStore'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const ReduxWrapper = () => {
	return (
		<Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Switch>
            <Route 
              path="/" 
              component={App} 
              exact
            />
            <Route 
              path="/privacy" 
              component={Terms} 
            />
          </Switch>
        </Router>
      </PersistGate>		
		</Provider>       
	)
}


ReactDOM.render(<ReduxWrapper />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
