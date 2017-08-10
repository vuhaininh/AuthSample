import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import App from './components/app';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
/* Index Config Redux, Middleware and Render the Application */
const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
const routeMiddleware = routerMiddleware(history);
// Create redux store and apply middleware
const createStoreWithMiddleware = applyMiddleware(reduxThunk,routeMiddleware)(createStore);
// Create a history of your choosing (we're using a browser history in this case)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)
