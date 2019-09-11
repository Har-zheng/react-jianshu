import React, { Component, Fragment } from 'react';
import TodoItem from './TdoItem';
import './style.css';
// 占位符  最外层 可以不用包裹 div
class TodoList extends Component {
  constructor(props) { //组件中最先执行的函数
    // TodoList super 指的是父类 Component 构造函数 
    super(props);
    this.state = { // 存储的数据 数据状态
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }
  render() {
    return (
      <Fragment>
        {/* jsx 的插值{} */}
        <div>
          {/* 语义间的区别 */}
          <label htmlFor="insertArea">输入内容</label>
          <input id="insertArea" className='input' value={this.state.inputValue} onChange={this.handleInputChange}></input>
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {/* dangerouslySetInnerHTML  不转译 */}
          {this.getTdoItem()}
        </ul>
      </Fragment>
    )
  }
  getTdoItem() {
    return this.state.list.map((item, index) => {
      return (
        <div key={ index }>
          {/* 传值 item={item}  组件传值  属性的形式*/}
          <TodoItem  item={item} index={index} deleteItem={this.handleItemDelete}></TodoItem>
          {/* 
            <li onClick={this.handleItemDelete.bind(this, index)} key={index}
              dangerouslySetInnerHTML={{ __html: item }}
            >
            </li>
            */}
        </div>
      )
    })
  }
  // state  不可在函数中直接使用 this 指向当前的 函数  需要调用方法是改变this指向
  handleInputChange(e) {
    const value = e.target.value;
    // 返回一个对对象  es6 可以简写 （{}）
    this.setState(() => ({
      inputValue: value
    }))
    // console.log(e.target.value)
    // this.setState({
    //   inputValue: e.target.value
    // })
  }
  handleBtnClick() {
    // prevState 保存上次的数据
    this.setState((prevState) => ({
      list: [...prevState.list, this.state.inputValue], // 合并生成新的数组
      inputValue: ''
    }))
    // this.setState({
    //   // es6 语法 展开运算符  把之前的展开  再生成新的数组
    //   list: [...this.state.list, this.state.inputValue], // 合并生成新的数组
    //   inputValue: ''
    // })
  }
  handleItemDelete(index) {
    // react inmutable 
    // state 不允许我们做任何的改变

    // const list = [...this.state.list] // 展开运算符  相当于拷贝 赋值 list
    // list.splice(index, 1) // 截取方法
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1) // 截取方法
      return { list }
    })
    // this.setState({
    //   list: list
    // })
  }
};
export default TodoList;