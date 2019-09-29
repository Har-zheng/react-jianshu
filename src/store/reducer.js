import { combineReducers  } from 'redux-immutable'
// as 别名
import { reducer as headerReducer } from '../common/header/store'
import {reducer as homeReducer}  from '../pages/home/store'
import {reducer as DetailReducer}  from '../pages/detail/store'
import {reducer as LoginReducer}  from '../pages/login/store'

// 拆分reducer 功能 分成若干小部分  combineReducers
const reducer =  combineReducers({
  header: headerReducer,
  home:homeReducer,
  detail: DetailReducer,
  login: LoginReducer
})
export default reducer