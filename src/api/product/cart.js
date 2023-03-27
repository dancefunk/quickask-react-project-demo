//引入封装的请求服务
import { POST } from '@/services/request.js'

//导出接口
const cart = {
  CartIndex(data = {})
  {
    return POST({
      url: '/product/cart/index',
      params: data
    })
  },
  CartAdd(data = {})
  {
    return POST({
      url: '/product/cart/add',
      params: data
    })
  },
  CartEdit(data = {})
  {
    return POST({
      url: '/product/cart/edit',
      params: data
    })
  },
  CartDel(data = {})
  {
    return POST({
      url: '/product/cart/del',
      params: data
    })
  },
}

export default cart