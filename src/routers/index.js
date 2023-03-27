import React from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'
import AuthRouter from './auth'
import Home from '@/components/home.js'

// 引入每个目录下面的index.js文件
const ModulesFile = require.context('./',true,/index.js$/)

// 总路由集合
const RouterMap = []

//对引入的文件进行循环
ModulesFile.keys().reduce((modules, modulePath) => {

  // 路由模块名称   文件夹/index  user/index
  const ModuleName = modulePath.replace(/^.\/(.*)\.js/,'$1')

  //不包含当前index.js 文件
  if(ModuleName !== 'index')
  {
    //路由列表
    const ModuleList = ModulesFile(modulePath)

    //追加到数组
    RouterMap.push(...ModuleList.default)
  }

  return RouterMap
}, {})


class RouterList extends React.Component{
  constructor(props)
  {
    super(props)

    this.state = {}
  }

  render()
  {
    return (
      <>
        <Routes>
          {/* 默认首页 */}
          <Route path="/" element={<Home />}></Route>

          <Route path="/" element={<><Outlet /></>}>
            {
              RouterMap.map((item, index) => {
                return (
                  <Route key={index} path={item.path} element={<AuthRouter auth={item.auth} component={<item.component />}></AuthRouter>}>
                    {item.children &&
                      item.children.map((son, idx) => <Route key={idx} path={son.path} element={<AuthRouter auth={son.auth} component={<son.component />}></AuthRouter>}></Route>)
                    }
                  </Route>
                )
              })
            }
          </Route>
        </Routes>
      </>
    )
  }
}

export default RouterList