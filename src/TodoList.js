import React, { Component, Fragment } from 'react'
// 占位符  最外层 可以不用包裹 div
class TodoList extends Component {
  constructor(props) { //组件中最先执行的函数
    // TodoList super 指的是父类 Component 构造函数 
    super(props);
    this.state = { // 存储的数据 数据状态
      inputValue: '',
      list: []
    }
  }
  render() {
    return (
      <Fragment>
        {/* jsx 的插值{} */}
        <div><input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}></input>
          <button onClick={this.handleBtnClick.bind(this)}>提交</button></div>
        <ul>
          {
            this.state.list.map((item, index)=> {
              return <li  onClick={this.handleItemDelete.bind(this, index)} key={index}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    )
  }
  // state  不可在函数中直接使用 this 指向当前的 函数  需要调用方法是改变this指向
  handleInputChange(e){
    console.log(e.target.value)
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnClick() {
    this.setState({
      // es6 语法 展开运算符  把之前的展开  再生成新的数组
      list: [...this.state.list, this.state.inputValue], // 合并生成新的数组
      inputValue: ''
    })
  }
  handleItemDelete(index){
    // react inmutable 
    // state 不允许我们做任何的改变
    
    const list = [...this.state.list] // 展开运算符  相当于拷贝 赋值 list
    list.splice(index, 1) // 截取方法
    this.setState({
      list: list
    })
  }
};
export default TodoList;