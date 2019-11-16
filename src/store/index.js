import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleawares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middleawares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
