import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState){
  const store = createStore(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('./reducers/rootReducer.js', () => {
      const nextRootReducer = require('./reducers/rootReducer.js')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}