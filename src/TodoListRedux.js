import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store/index'
import TodoListReduxUI from './TodoListReduxUI'
import { getInputChangeAction, getAddItemAction,getDeleteItemAction, getIitList } from './store/actionCreators'
class TodoListRedux extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleBtnDelete = this.handleBtnDelete.bind(this)
    store.subscribe(this.handleStoreChange) // react 数据变更时调用  固定写法
  }
  render() {
    return <TodoListReduxUI 
    inputValue={this.state.inputValue}
    handleInputChange={this.handleInputChange}
    handleBtnClick={this.handleBtnClick}
    list={this.state.list}
    handleBtnDelete ={this.handleBtnDelete}
    ></TodoListReduxUI>
  }
  componentDidMount(){
    const action = getIitList()
    store.dispatch(action)
  }
  handleInputChange(e){
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange(){
    // 重新挂载新的数据
   this.setState(store.getState())
  }
  handleBtnClick(e){
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleBtnDelete(index){
    const action = getDeleteItemAction(index)
    store.dispatch(action)
    console.log(index)
  }
}

export default TodoListRedux