import React, { Component } from 'react'
import PropTypes from 'prop-types'; // 校验传值的类型 

class TodoItem extends Component {
  constructor(props) { // 组件创建时第一个执行的函数
    super(props); // 固定写法
    this.handkeClick = this.handkeClick.bind(this)
  }
  render() {
    const { item, test} = this.props;
    //1  this.props接受父传递的值
    // 2 父传子
    return (
      <div key onClick={this.handkeClick}>
       {test} - {item}
      </div>
    )
  }
  handkeClick() { // 子组件 调用 父组件的方法传值 同时可以使用 arrayof()两种类型其之一
    // alert(this.props.index)
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}
TodoItem.propTypes = {
  test: PropTypes.string.isRequired, // 必传项
  item: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}
TodoItem.defaultProps = { // 设置传值的默认值  当父组件未传值
  test: 'hello world!'
}
export default TodoItem