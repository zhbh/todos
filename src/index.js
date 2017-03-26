import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers/reducers'

let store = createStore(todoApp);
store.subscribe(()=>{
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
