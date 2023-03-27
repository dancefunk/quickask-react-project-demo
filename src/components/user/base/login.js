import React from 'react'


const login = () => 
{
    //初始化路由跳转对象
    const navigate = React.$router.useNavigate()

    //退出方法
    const logout = () =>
    {
        //删除cookie
        React.$cookie.remove('LoginUser', {path: '/'})

        //antd UI 框架 反馈组件
        React.$antd.message.success({
            content: '退出成功',
            duration: 1,
            onClose: () => 
            {
                navigate(0)
            }
        })
    }

    //登录方法
    const login = () =>
    {
        //设置cookie
        React.$cookie.save('LoginUser', {nickname: '张三'}, {path: '/'})

        //antd UI 框架 反馈组件
        React.$antd.message.success({
            content: '登录成功',
            duration: 1,
            onClose: () => 
            {
                navigate(0)
            }
        })
    }

    //判断是否登录方法
    const Auth = () =>
    {
        var LoginUser = React.$cookie.load('LoginUser') ? React.$cookie.load('LoginUser') : {}

        if(!LoginUser || JSON.stringify(LoginUser) === "{}")
        {
            return (
                <button onClick={login}>请登录</button>
            )
        }else
        {
            return (
                <button onClick={logout}>退出登录</button>
            )
        }
    }

    return (
        <>
            <h1>登录界面</h1>

            <Auth />
        </>
    )
}

export default login