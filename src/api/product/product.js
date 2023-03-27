//引入封装的请求服务
import { POST } from '@/services/request.js'

//导出接口
const product = {
  ProductIndex(data = {})
  {
    return POST({
      url: '/product/product/index',
      params: data
    })
  },
  ProductType(data = {})
  {
    return POST({
      url: '/product/product/type',
      params: data
    })
  },
  ProductInfo(data = {})
  {
    return POST({
      url: '/product/product/info',
      params: data
    })
  },
}

export default product