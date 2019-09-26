import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`
export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`
// 
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  float: left;
  padding: 1px;
  margin-right: 26px;
  margin-top: 18px;
  background: #f3f3f3;
  .img_item{
    width: 45px;
    height: 28px;
  }
  .span{
    float:right;
    line-height: 28px;
    display: block;
    padding: 0 4px;
    font-size: 14px;
  }
`
export const ListItem = styled.div`
    padding: 20px 0;
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
  .pic{
    width: 125px;
    height: 100px;
    display:block;
    float: right;
    border-radus:1px solid #dcdcdc;
  }

`
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title{
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    line-height: 18px;
    font-size: 13px;
    color: #999;
  }
`
export const RecommendItem = styled.div`
  position: relative;
  padding: 30px 0 0;
  width: 100%;
  .img_item{
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`
export const Downloads = styled.div`
  margin-bottom: 30px;
  padding-left: 10px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  .download_img{
    width: 60px;
    height: 60px;
    opacity: .85;
    padding: 10px 0;
  }
  .info{
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    margin-top: -74px;
  }
  .dow_text{
    font-size: 15px;
    color: #333;
  }
  .dow_desc{
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
`
export const Code = styled.div`
  position: absolute;
  width: 160px;
  height: 160px;
  background: #fff;
  border: 1px solid #ccc;
  padding: 6px;
  border-radius: 6px;
  background: url('//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png');
  background-size: 100%;
  top: 80px;
  left: 48px;
`
export const Writersider = styled.div`

`
export const WriterTitle = styled.div`
    font-size: 14px;
    color: #969696;
    margin-bottom: 12px;
  .recom{
    
  }
  .change{
    float: right;
    span{
      margin-right: 6px;
    }
  }
`
export const WriterConten = styled.div`
  position: relative;
  .item_conten{
    height: 48px;
    margin-bottom: 12px;
  }
  .item{
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid #ddd;
    }
  }
  .title{
    padding-top: 5px;
    /* margin-right: 60px; */
    font-size: 14px;
    display: block;
  }
  .desc{
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
  .guanhzu{
    position: absolute;
    line-height: 48px;
    right: 0;
    top: 0;
    font-size: 13px;
    color: #42c02e;
  }
`
export const WriterButton = styled.div`
clear: both;
.button{
  padding: 14px 0;
  width: 99%;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  display: inline-block;
  text-align: center;
}
`
