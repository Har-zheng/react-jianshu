import React, { Component } from 'react';
import { TopicWrapper,TopicItem } from '../styled'
class Topic extends Component {
  render(){
    return (
      <TopicWrapper>
        <TopicItem>
         <img src="./title.jpg" />
        </TopicItem>
      </TopicWrapper>
    )
  }
}

export default Topic;