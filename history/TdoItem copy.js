import React, { Component } from 'react'
import PropTypes from 'prop-types'; // 校验传值的类型 

class TodoItem extends Component {
  constructor(props) { // 组件创建时第一个执行的函数
    super(props); // 固定写法
    this.handkeClick = this.handkeClick.bind(this)
  }
  render() {
    console.log('child render!!')
    const { item } = this.props;
    //1  this.props接受父传递的值
    // 2 父传子
    return (
      <div onClick={this.handkeClick}>
        {item}
      </div>
    )
  }
  // 
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.item !== this.props.item) {
      return true;
    } else {
      return false
    }
  }
  handkeClick() { // 子组件 调用 父组件的方法传值 同时可以使用 arrayof()数组组成部分两种类型其之一
    // alert(this.props.index)
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}
TodoItem.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

export default TodoItem