import React,{ Component } from 'react'

class TodoItem extends Component {
  constructor(props){ // 组件创建时第一个执行的函数
    super(props); // 固定写法
    this.handkeClick = this.handkeClick.bind(this)
  }
  render() {
    const {item} =  this.props ;
    //1  this.props接受父传递的值
    // 2 父传子
    return (
    <div onClick={this.handkeClick}>
    {item}
    </div>
    )
  }
  handkeClick(){ // 子组件 调用 父组件的方法传值 
    // alert(this.props.index)
    const { deleteItem } = this.props
    deleteItem(this.props.index)
  }  
}
export default TodoItem