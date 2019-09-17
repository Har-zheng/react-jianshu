import React,{ Fragment } from 'react'
import {connect} from 'react-redux'

const TodoListReactRedux = (props) => {
  const {inputValue,handleInputChange,list,handleDetale,handleBtnClick } = props
  return (
    <Fragment>
      <div>
        <div>
          <input value={inputValue} onChange={handleInputChange}></input>
          <button onClick={handleBtnClick}>提交</button>
        </div>
        <ul>
          { list.map((item, index) => {
            return (
              <li key={index} onClick={ handleDetale.bind(this, index) }>{item}</li>
            )
          })}
        </ul>
        hello!!
      </div>
      </Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
// 两个作用 1 state.dispatch,   2 props  把方法绑定到 this.props上 组件中可调用
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e){
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleBtnClick(){
      console.log('btn')
      const action = {
        type: 'add_todo_item'
      }
      dispatch(action)
    },
    handleDetale(index){
      const action = {
        type: 'delete_todo_item',
        index: index
      }
      dispatch(action)
    }
  }
}
// react-redux 组件的连接 共享state   mapStateToProps做链接映射 state 的数据 映射到propos 第二个参数 mapDispatchToProps  是修改的映射方法
//  connect 连接  1 容器组件  2 ui组件  导出的就是执行的结果
export default connect(mapStateToProps, mapDispatchToProps)(TodoListReactRedux);