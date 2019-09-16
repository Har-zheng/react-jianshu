import React, { Component, Fragment } from 'react';
import TodoItem from './TdoItem';
import axios from 'axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';
// 占位符  最外层 可以不用包裹 div
class TodoList extends Component {
  constructor(props) { //组件中最先执行的函数
    // TodoList super 指的是父类 Component 构造函数 
    // 当组件的stare或者props发生改变的时候,render函数就会重新执行
    super(props);
    this.state = { // 存储的数据 数据状态
      inputValue: '',
      list: [],
      show: true,
      listArr: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleToggole = this.handleToggole.bind(this)
    this.handleAdditem = this.handleAdditem.bind(this)
  }
  render() {
    console.log('父 render')
    return (
      <Fragment>
        {/* jsx 的插值{} */}
        <div>
          {/* 语义间的区别 */}
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={(input) => { this.input = input }}
          ></input>
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {/* dangerouslySetInnerHTML  不转译 */}
          {this.getTdoItem()}
        </ul>
        <div>
          <CSSTransition
           in={this.state.show}
           timeout={1000}
           classNames='fade'
           unmountOnExit onEntered={(el) => {el.style.color = 'blue'}}
           appear={true}>
            <div>hello</div>
          </CSSTransition>
          <button onClick={this.handleToggole}>toggole</button>
        </div>
        <div>
        <TransitionGroup>
          {
            this.state.listArr.map((item, index)=> {
            return (
              <CSSTransition
              in={this.state.show}
              timeout={1000}
              classNames='fade'
              unmountOnExit onEntered={(el) => {el.style.color = 'blue'}}
              appear={true}
              key={index}>
                <div >{item}</div>
              </CSSTransition>
            )
            })
          }
          </TransitionGroup>
          <button onClick={this.handleAdditem}>add</button>
        </div>
      </Fragment>
    )
  }
  handleAdditem() {
    this.setState((prevState)=>{
      return {
        listArr: [...prevState.listArr, 'item']
      }
    })
  }
  handleToggole() {
    console.log('toggole')
    this.setState({
      show: this.state.show ? false : true
    })
  }
  componentDidMount() { // 组件挂载时
    axios.get('/api/todolist').then((res) => {
      console.log('succ')
      let list = res.data
      this.setState({
        list: [...list]
      })
    }).catch(() => {
      console.log('err')
    })
  }
  getTdoItem() {
    return this.state.list.map((item, index) => {
      return (
        // 使用稳定的值 作为key值  这样利于dff算法计算
        <TodoItem key={item} item={item} index={index} deleteItem={this.handleItemDelete}></TodoItem>

      )
    })
  }
  // state  不可在函数中直接使用 this 指向当前的 函数  需要调用方法是改变this指向
  handleInputChange(e) {
    const value = e.target.value
    // 返回一个对对象  es6 可以简写 （{}）
    this.setState(() => ({
      inputValue: value
    }))

  }
  handleBtnClick() {

    this.setState((prevState) => ({
      list: [...prevState.list, this.state.inputValue], // 合并生成新的数组
      inputValue: ''
    }))

  }
  handleItemDelete(index) {

    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1) // 截取方法
      return { list }
    })

  }
};
export default TodoList;