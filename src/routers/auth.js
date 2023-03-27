import React from 'react'
import {Navigate} from 'react-router-dom'


const AuthRouter = (props) => 
{
  //根据auth参数来判断是否需要登录访问
  if(props.auth)
  {
    //获取cookie信息
    var LoginUser = React.$cookie.load('LoginUser') ? React.$cookie.load('LoginUser') : {}

    //如果没有cookie,就重定向到登录界面,有cookie的话就显示路由组件
    if(JSON.stringify(LoginUser) === "{}")
    {
      return (
        <Navigate to="/user/base/login" />
      )
    }else
    {
      return (
        <>
          {props.component}
        </>
      )
    }
  }else
  {
    return (
      <>
        {props.component}
      </>
    )
  }
}


export default AuthRouter