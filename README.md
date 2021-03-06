This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
## React 学习  实现简书  
### react 子父 组件间传值 props   子传父 调用传过来的方法 调用给父亲传值

### react 实现的原理  dom 渲染计算的原理   diff  算法

### ref 的使用

### react 中redux的使用  类似vuex   

### 生命周期函数 是指组件在某一时刻自动执行的函数

### conterstor 初始化就执行  initialzation (setup props and state) =>  mounting 挂载(1 componentwillMount => 在组件即将被挂载执行 2 render => 3 componentDidMount 组件在被挂载之后执行 )

### updation  => props (shouldComponentUpadte 在组件更新之前执行 返回布尔值 返回true=> )   state(shouldComponentUpadte (true)=>  componentWillUpdate 组件被更新,他会自动执行, 但是他在 shouldComponentUpadate返回true之后才执行 返回fales不执行   componentDidupdate(render完成之后)) 

### componentWillReaceiveProps 1 当一个组件从父组件接受参数  只要父组件的render函数被执行了 子组件的生命周期函数就会被执行 2(如果这个组件第一次存在于父组件中 不会执行) 3(如果这个组件之前已经存在于父组件中 才会被执行)

### Unmontting   componentWillUnmount 1 当这个组件即将被从页面剔除的时候 会被执行

### redux
![redux](./history/redux.png 'react redux')

### actionTypes 拆分  优化代码  定位错误比较便捷
### actionCreators 统一创建 action

### ui组件 容器组件

### 普通组件(this)   无状态组件(优点执行速度更快 箭头函数  传入this) => 一般使用ui组件  或者只用到render函数时  考虑使用

### redux-thunk   redux 中间件 进行action的封装  接受对象和函数 支持action中发送ajax请求 必须使用这个中间件

### redux-saga  redux 中间件 复杂的高于thunk  但是大型项目比较合适

### react-redux 方便使用redux  connect 连接方便action的操作

- npm install immutable  禁止修改state数据

```javascript
// import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
// 使用方式 immutable
const defaultSatte= fromJS({
  focused: false
})
export default (state = defaultSatte, action) => {
  if(action.type === actionTypes.SEARCH_FOCUS){
    // immutable 对象的值 回和之前的immutable对象的值 和设置的值 返回一个全新的对象
    return state.set('focused' ,true)
  }else if(action.type === actionTypes.SEARCH_BLUR){
    return state.set('focused', false)
  }
  return state;
}

```
- redux-immutable   state  函数调用 get方法
```javascript
// redux-immutable 的使用
import { combineReducers  } from 'redux-immutable'
// as 别名
import { reducer as headerReducer } from '../common/header/store'


// 拆分reducer 功能 分成若干小部分  combineReducers
const reducer =  combineReducers({
  header: headerReducer
})
export default reducer

// 使用方式
 focused: state.getIn(['header', 'focused'])
```
- 学习使用ref <span ref={(Icon)=> {this.spinIcon = Icon}} className="iconfont spin">&#xe60e;</span> 通过一个箭头函数
- 
- 动态路由获取参数   match  params模式传参 /:id  获取 this.props.metah
- location 解析出来参数  
- PureComponent  与 Component   提升性能  有关render时性能的使用
- yarn add react-loadable 使用这个 拆分加载项  避免一次加载过多