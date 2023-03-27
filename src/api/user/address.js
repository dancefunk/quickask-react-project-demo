//引入封装的请求服务
import { POST } from '@/services/request.js'

//导出接口
const address = {
  AddressIndex(data = {})
  {
    return POST({
      url: '/user/address/index',
      params: data
    })
  },
  AddressAdd(data = {})
  {
    return POST({
      url: '/user/address/add',
      params: data
    })
  },
  AddressInfo(data = {})
  {
    return POST({
      url: '/user/address/info',
      params: data
    })
  },
  AddressEdit(data = {})
  {
    return POST({
      url: '/user/address/edit',
      params: data
    })
  },
  AddressDel(data = {})
  {
    return POST({
      url: '/user/address/del',
      params: data
    })
  },
  AddressCheck(data = {})
  {
    return POST({
      url: '/user/address/check',
      params: data
    })
  },
  AddressOrder(data = {})
  {
    return POST({
      url: '/user/address/order',
      params: data
    })
  }
}

export default address