import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';

const configureStore = preloadedState => {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancers = [middlewareEnhancer];
  const composedEnhancer = composeWithDevTools(...storeEnhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers/rootReducer', () => {
      const newRootReducer = require('./reducers/rootReducer').default;
      store.replaceReducer(newRootReducer);
    });
  }

  return store;
};
const store = configureStore();

export default store;
