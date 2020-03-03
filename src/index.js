import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './configureStore';

import App from './components/app/App';

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
  );
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept(App, renderApp);
}

renderApp();
