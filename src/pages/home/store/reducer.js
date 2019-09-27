import {
  fromJS
} from 'immutable'

<<<<<<< HEAD
const defaultSatte = fromJS({
  topicList: [],
  articleList: [],
  LabelList: []
=======
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
  }],
  articleList: [
    {
    id: 1,
    title: '内心强大的人，到哪里都能活得好',
    desc: '01 我的读者中有一位比我年长几岁的姐姐，姑且称她为安姐吧，她经常会给，晚上一人睡在荒野，白天则拿起锄头、菜刀进行开荒，办起了养兔场',
    imgUrl: '//upload-images.jianshu.io/upload_images/1546252-3c008c571513c266.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },
  {
    id: 2,
    title: '内心强大的人，到哪里都能活得好',
    desc: '01 我的读者中有一位比我年长几岁的姐姐，姑且称她为安姐吧，她经常会给，晚上一人睡在荒野，白天则拿起锄头、菜刀进行开荒，办起了养兔场',
    imgUrl: '//upload-images.jianshu.io/upload_images/1546252-3c008c571513c266.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },
  {
    id: 3,
    title: '内心强大的人，到哪里都能活得好',
    desc: '01 我的读者中有一位比我年长几岁的姐姐，姑且称她为安姐吧，她经常会给，晚上一人睡在荒野，白天则拿起锄头、菜刀进行开荒，办起了养兔场',
    imgUrl: '//upload-images.jianshu.io/upload_images/1546252-3c008c571513c266.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }
],
LabelList:[
  {
    imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
  },
  {
    imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
  },
  {
    imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
  },
  {
    imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
  }
]
>>>>>>> 4d15a24b439661348645833dc6f1b9ba42f252b8
})
export default (state = defaultSatte, action) => {
  switch (action.type) {
    default:
      return state
  }
}