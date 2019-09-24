import { fromJS } from 'immutable'

const defaultSatte= fromJS({
  topicList: [{
    id: 1,
    title: "社会热点",
    imgUrl: '//upload-images.jianshu.io/upload_images/9136691-f5a7368989e6dc6d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },
  {
    id: 2,
    title: "社会热点",
    imgUrl: '//upload-images.jianshu.io/upload_images/4474991-83de3d95b1577295.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }
]
})
export default (state = defaultSatte, action) => {
  switch(action.type){
    default:
      return state
  }
}