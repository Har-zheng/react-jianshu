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
    default:
      return state
  }
}