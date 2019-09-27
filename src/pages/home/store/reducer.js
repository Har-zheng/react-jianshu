import {
  fromJS
} from 'immutable'

import * as actionTypes from './actionTypes'
const defaultSatte = fromJS({
  topicList: [],
  articleList: [],
  LabelList: []
})
export default (state = defaultSatte, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        LabelList: fromJS(action.LabelList)
      })
    default:
      return state
  }
}