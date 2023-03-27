import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';

//引入根组件
import App from './App';

//引入接口文件
import api from './api/index'

//引入cookie
import cookie from 'react-cookies'

//引入路由
import * as router from 'react-router-dom'

//引入Antd UI 组件
import * as antd from 'antd'

//全局自定义属性，挂载路由对象
React.$router = router

//react没有挂载，就设置为全局变量
React.$api = api

//设置全局自定义属性，挂载cookie对象
React.$cookie = cookie

//设置全局自定义属性，挂载antdUI对象
React.$antd = antd

//如果没有登录就给空对象，如果有登录就给cookie信息
React.$LoginUser = cookie.load('LoginUser') ? cookie.load('LoginUser') : {}

const root = ReactDOM.createRoot(document.getElementById('root'));

// React18版本开始，我们组件会默认渲染两次
// 在开发阶段，为了帮助开发者定位问题，react会故意的两次调用render阶段，他们认为这样能引起开发者的注意
// 所以如果不想渲染两次的话 可以把下面的 StrictMode 注释掉这样就不会渲染两次了
// 注释或者删除掉之后，就不会渲染两次了

root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
