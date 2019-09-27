import {
  fromJS
} from 'immutable'


const defaultSatte = fromJS({
  topicList: [],
  articleList: [],
  LabelList: []
})
export default (state = defaultSatte, action) => {
  switch (action.type) {
    case 'change_home_data':
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        LabelList: fromJS(action.LabelList)
      })
    default:
      return state
  }
}