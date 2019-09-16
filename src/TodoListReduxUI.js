import React from 'react'
import {Input,Button,List } from 'antd'
const TodoListUI = (props)=> {
  return (
    <div style={{padding: '10px'}}>
    <div>
      <Input 
      placeholder="Todo info"
      value={props.inputValue} 
      style={{width: '300px', marginRight: '10px'}}
      onChange={props.handleInputChange} />
      <Button onClick={props.handleBtnClick} type="primary">提交</Button>
      <List
      style={{marginTop: '10px', width: '600px'}}
      bordered
      dataSource={props.list}
      renderItem={(item,index) => (
      <List.Item>
       {item} <Button type="danger" onClick={()=>{ props.handleBtnDelete(index) }} size="small" style={{float: "right"}}>删除</Button>
      </List.Item>
    )}
  />
    </div>
  </div>
  )
}
// class TodoListUI extends Component { // 普通组件
//   render() {
//     return (
//       <div style={{padding: '10px'}}>
//       <div>
//         <Input 
//         placeholder="Todo info"
//         value={this.props.inputValue} 
//         style={{width: '300px', marginRight: '10px'}}
//         onChange={this.props.handleInputChange} />
//         <Button onClick={this.props.handleBtnClick} type="primary">提交</Button>
//         <List
//         style={{marginTop: '10px', width: '600px'}}
//         bordered
//         dataSource={this.props.list}
//         renderItem={(item,index) => (
//         <List.Item>
//          {item} <Button type="danger" onClick={()=>{ this.props.handleBtnDelete(index) }} size="small" style={{float: "right"}}>删除</Button>
//         </List.Item>
//       )}
//     />
//       </div>
//     </div>
//     )
//   }
// }
export default TodoListUI