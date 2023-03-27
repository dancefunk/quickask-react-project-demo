//引入封装的请求服务
import { POST, UPLOAD } from '@/services/request.js'

//导出接口
const base = {
  register(data = {})
  {
    return POST({
      // /api/user/base/register
      url: '/user/base/register',
      params: data
    })
  },
  login(data = {})
  {
    return POST({
      url: '/user/base/login',
      params: data
    })
  },
  check(data = {})
  {
    return POST({
      url: '/user/base/check',
      params: data
    })
  },
  email(data = {})
  {
    return POST({
      url: '/user/base/email',
      params: data
    })
  },
  profile(data = {})
  {
    return UPLOAD({
      url: '/user/base/profile',
      params: data
    })
  }
}

export default base