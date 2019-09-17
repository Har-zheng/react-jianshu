import { createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import Todosagas from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =typeof window === 'object' &&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
  // other store enhancers if any
);
// c创建数据 公共存储仓库
const store = createStore(reducer,enhancer); 

sagaMiddleware.run(Todosagas)

export default store
//,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()