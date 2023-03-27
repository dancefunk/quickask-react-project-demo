import api from "@/components/demo/test/api"
import ui from "@/components/demo/test/ui"

/**
 * 用户基本资料路由 - 子路由
 */
const test = [
  //api调用案例
  {
    path: "test/api",
    name: 'api',
    component: api
  },
  //antd组件调用
  {
    path: "test/ui",
    name: 'ui',
    component: ui
  },
]

export default test