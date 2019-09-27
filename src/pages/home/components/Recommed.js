import React, { Component } from 'react';
import { RecommendItem, Downloads, Code } from '../styled'
import { connect } from 'react-redux'
class Recommend extends Component {
  render() {
    const { list } = this.props
    return (
      <RecommendItem>
        {
          list.map((Item, index) => {
            return (
              <img key={index} className="img_item" src={Item.get('imgUrl')} alt="" />
            )
          })
        }
        <Downloads>
          <img className="download_img" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""></img>
          <div className="info">
            <p className="dow_text">下载简书App></p>
            <p className="dow_desc">随时随地发现和创作内容</p>
          </div>
        </Downloads>
        <Code></Code>
      </RecommendItem>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'LabelList'])
})
<<<<<<< HEAD
=======
const mapDispathToProps = () => {
  return {
    moseEnter(dowl) {
      dowl.style.display = 'block'
    },
    moseLeave(dowl) {
      dowl.style.display = 'none'
    }
  }
}
>>>>>>> f63cfc3... feat: home 完善

export default connect(mapState, null)(Recommend);