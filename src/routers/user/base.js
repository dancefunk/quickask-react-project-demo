import login from "@/components/user/base/login"
import register from "@/components/user/base/register"
import profile from "@/components/user/base/profile"


/**
 * 用户基本资料路由 - 子路由
 */
const base = [
  {
    path: "base/profile",
    name: 'profile',
    component: profile,
    auth: true
  },
  {
    path: "base/login",
    name: 'login',
    component: login,
  },
  {
    path: "base/register",
    name: 'register',
    component: register
  },
]

export default base