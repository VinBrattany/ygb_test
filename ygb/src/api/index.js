import axios from 'axios'
import { getUrlParam } from '@/utils/'
const debug = process.env.NODE_ENV !== 'production'
const root = debug ? '/test-api' : ''

const post = (url, options, config) => {
  const ticket = getUrlParam('ticket')
  const appid = getUrlParam('appid') || getUrlParam('appId') || getUrlParam('client_id')
  const urlParamStr = (ticket ? '?ticket=' + ticket : '') + (appid ? '&appid=' + appid : '')

  return new Promise((resolve, reject) => {
    axios.post(root + url + urlParamStr, options, config || {}).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

const get = async (url, params) => {
  const ticket = getUrlParam('ticket')
  const appid = getUrlParam('appid') || getUrlParam('appId') || getUrlParam('client_id')
  const urlParamStr = (ticket ? '?ticket=' + ticket : '') + (appid ? '&appid=' + appid : '')

  return new Promise((resolve, reject) => {
    axios.get(root + url + urlParamStr, { params: params }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/** ******************************************服务申请**************************************/
// 获取服务申请列表
export const getServiceApplicationList = async params => get('/ygb/api/getServiceApplicationList', params)
