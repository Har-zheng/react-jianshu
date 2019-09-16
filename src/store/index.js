import { createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducer'

const composeEnhancers =typeof window === 'object' &&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
// c创建数据 公共存储仓库
const store = createStore(
  reducer,
  enhancer
  ); 

export default store
//,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()