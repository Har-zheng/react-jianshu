import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input,Button, List } from 'antd';
import store from './store/index'

import { getInputChangeAction, getAddItemAction,getDeleteItemAction } from './store/actionCreators'
class TodoListRedux extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
    <div style={{padding: '10px'}}>
      <div>
        <Input 
        placeholder="Todo info"
        value={this.state.inputValue} 
        style={{width: '300px', marginRight: '10px'}}
        onChange={this.handleInputChange} />
        <Button onClick={this.handleBtnClick} type="primary">提交</Button>
        <List
        style={{marginTop: '10px', width: '600px'}}
        bordered
        dataSource={this.state.list}
        renderItem={(item,index) => (
        <List.Item>
         {item} <Button type="danger" onClick={this.handleBtnDelete.bind(this, index)} size="small" style={{float: "right"}}>删除</Button>
        </List.Item>
      )}
    />
      </div>
    </div>)
  }
  handleInputChange(e){
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange(){
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