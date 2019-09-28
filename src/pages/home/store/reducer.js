import {
  fromJS
} from 'immutable'

import * as actionTypes from './actionTypes'
const defaultSatte = fromJS({
  topicList: [],
  articleList: [],
  LabelList: [],
  articlePage: 1,
  showScroll: false
})
const changeHomeData =(state, action)=> {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    LabelList: fromJS(action.LabelList)
  })
}
const changeHomeList =(state, action)=> {
  return state.merge({
    'articleList': state.get('articleList').concat(action.list),
    'articlePage': action.nextPage
  })
}
const toggleScrollTop =(state, action)=> {
  return state.set('showScroll', action.isShow)
}
export default (state = defaultSatte, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case actionTypes.ADD_HOME_LIST:
      return changeHomeList(state, action)
    case actionTypes.TOGGLE_SCROLL_TOP:
      return toggleScrollTop(state, action)
    default:
      return state
  }
}