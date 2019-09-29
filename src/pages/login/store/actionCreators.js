import axios from 'axios'
import  * as constants  from './constants'

const changeLogin = () => ({
  type: constants.CHANEG_LOGIN,
  value: true
})
export const logoout = () => ({
  type: constants.LOGOOUT,
  value: false
})
export const login = (accout, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account='+ accout + '&password='+ password).then(res => {
      console.log(res)
      const result = res.data.data
      if(result){
        dispatch(changeLogin())
      }else{
        alert('登录失败!')
      }
    })
  }
}