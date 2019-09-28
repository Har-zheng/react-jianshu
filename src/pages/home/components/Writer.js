import React, { PureComponent } from 'react';
import { Writersider, WriterTitle, WriterConten, WriterButton } from '../styled'


class Writer extends PureComponent {
  render() {
    return (
      <Writersider>
        <WriterTitle>
          <span className="recom">推荐作者</span>
          <span className="change">
            <span ref={(Icon) => { this.spinIcon = Icon }} className="iconfont spin">&#xe60e;</span>
            换一批</span>
        </WriterTitle>
        <WriterConten>
          <div className="item_conten">
            <div className="item">
              <img src="//upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
            </div>
            <p className="title">三儿王屿</p>
            <p className="desc">写了165.9k字 · 3.5k喜欢</p>
            <a className="guanhzu" href="/ab">关注</a>
          </div>
          <div className="item_conten">
            <div className="item">
              <img src="//upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
            </div>
            <p className="title">三儿王屿</p>
            <p className="desc">写了165.9k字 · 3.5k喜欢</p>
            <a className="guanhzu" href="/c">关注</a>
          </div>
        </WriterConten>
        <WriterButton>
          <a  className="button" href="/d">查看全部</a>
        </WriterButton>
      </Writersider>
    )
  }
}

export default Writer;