import { combineReducers  } from 'redux-immutable'
// as 别名
import { reducer as headerReducer } from '../common/header/store'


// 拆分reducer 功能 分成若干小部分  combineReducers
const reducer =  combineReducers({
  header: headerReducer
})
export default reducer