import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import USPopulation from './components/us-population';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(() => ({
  birds: [
    {
      name: 'robin',
      views: 1
    }
  ]
}));

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
