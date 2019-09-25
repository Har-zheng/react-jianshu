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
  width: 240px;
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
  padding: 30px 0 0;
  .img_item{
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`
export const Downloads = styled.div`
  width: 96%;
  outline: 1px solid #ccc;
  padding: 10px 22px;
  .download_img{
    width: 60px;
    height: 60px;
    opacity: .85;
  }
  .info{
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    font-size: 15px;
  }
  .dow_text{
  }
  .dow_desc{
  }
`
