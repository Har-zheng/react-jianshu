import React, { Component } from 'react';
import { ListItem, ListInfo } from '../styled';

class Lsit extends Component {
  render() {
    return (
      <ListItem>
        <img className="pic" src="//upload-images.jianshu.io/upload_images/1546252-3c008c571513c266.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" />
        <ListInfo>
          <h3 className="title">内心强大的人，到哪里都能活得好</h3>
          <p className="desc">01
            我的读者中有一位比我年长几岁的姐姐，姑且称她为安姐吧，她经常会给，晚上一人睡在荒野，白天则拿起锄头、菜刀进行开荒，办起了养兔场。</p>
        </ListInfo>
      </ListItem>
    )
  }
}

export default Lsit;