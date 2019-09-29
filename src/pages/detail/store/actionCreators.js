import axios from 'axios'
import * as actionTypes  from './actionTypes'

const actionDetail =(detail) => ({
  type: actionTypes.ACTION_DETAIL,
  title: detail.title,
  content: detail.cntent
})
export const getDetail = (id) => {
  return (dispatch) => {
    console.log('detail')
    axios.get(`/api/detail.json?id=${id}`).then(res => {
      const detail = res.data.data
      dispatch(actionDetail(detail))
    })
  }
}