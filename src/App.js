import './App.css'
import {BrowserRouter, Link, NavLink} from 'react-router-dom'
import RouterList from './routers/index.js'

function App() 
{
  return (
    <BrowserRouter>
      <Link to="/">去首页</Link><br />
      <Link to="/user/base/login">登录 - 有登录按钮和退出按钮</Link><br />
      <Link to="/user/base/register">注册</Link><br />
      <Link to="/user/base/profile">会员中心</Link><br />
      <NavLink
          to="/user/base/profile"
          style={ (isActive) => ({color: isActive ? 'red' : '#fff'}) }
      >
        会员中心(NavLink组件 会判断是否匹配的当前路由 当前选中状态)
      </NavLink><br />

      <hr />

      <Link to="/demo/test/api">API接口调用(console控制台打印)</Link><br />
      <Link to="/demo/test/ui">Antd UI组件调用</Link><br />

      <hr />
      <RouterList />
    </BrowserRouter>
  )
}

export default App