import { Outlet } from 'react-router-dom'

// 引入当前目录下面的所有文件
const ModulesFile = require.context('./',true,/.js$/)

const RouterMap = []

ModulesFile.keys().reduce((modules, modulePath) => {
  // 路由模块名称
  const ModuleName = modulePath.replace(/^.\/(.*)\.js/,'$1')

  //不包含当前index.js 文件
  if(ModuleName !== 'index')
  {
    //路由列表(数组)
    const ModuleList = ModulesFile(modulePath)

    //追加到数组
    RouterMap.push(...ModuleList.default)
  }

  return RouterMap
},{})

//默认父组件 可以自己定义
const layout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

const RouterList = [
  {
    path: '/user',
    component: layout,
    children: RouterMap,
  }
]

export default RouterList
  