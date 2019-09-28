import axios from 'axios'
import * as actionTypes  from './actionTypes'

const actionDetail =(detail) => ({
  type: actionTypes.ACTION_DETAIL,
  title: detail.title,
  content: detail.cntent
})
export const getDetail = () => {
  return (dispatch) => {
    console.log('detail')
    axios.get('/api/detail.json').then(res => {
      const detail = res.data.data
      dispatch(actionDetail(detail))
    })
  }
}