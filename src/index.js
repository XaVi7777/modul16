import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { rootReducer } from './redux/rootReducer';


const child = document.createElement('div');
child.setAttribute('id', 'app');
document.body.appendChild(child);

const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('#app'));
