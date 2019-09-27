import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './styled'
import List from './components/List'
import Recommed from './components/Recommed'
import Topic from './components/Topic'
import Writer from './components/Writer'
import axios from 'axios'
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt="" className="banner-img" src="//upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommed></Recommed>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount(){
    axios.get('/api/home.json').then(res => {
      console.log(res)
      const result = res.data.data;
      const action = {
        type: "change_home_data",
        topicList: result.topicList,
        articleList: result.articleList,
        LabelList:result.LabelList,
      }
    })
  }
}
export default Home;