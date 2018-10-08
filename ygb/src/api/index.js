import axios from 'axios'
import { getUrlParam } from '@/utils/'
const debug = process.env.NODE_ENV !== 'production'
const root = debug ? '/test-api' : ''

const post = (url, options, config) => {
  const ticket = getUrlParam('ticket')
  const appid = getUrlParam('appid') || getUrlParam('appId') || getUrlParam('client_id')
  const urlParamStr = (ticket ? '?ticket=' + ticket : '') + (appid ? '&appid=' + appid : '')

  const promise = new Promise((resolve, reject) => {
    axios.post(root + url + urlParamStr, options, config || {}).then(res => {
      const data = res.data
      resolve(data)
    }).catch(err => {
      reject(err)
    })
  })

  return promise
}

const get = async (url, param) => {
  const ticket = getUrlParam('ticket')
  const appid = getUrlParam('appid') || getUrlParam('appId') || getUrlParam('client_id')
  const urlParamStr = (ticket ? '?ticket=' + ticket : '') + (appid ? '&appid=' + appid : '')

  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: root + url + urlParamStr,
      params: param
    }).then(res => {
      resolve(res.data)
    }).catch(_ => {
      reject(_)
    })
  })
}

/** ******************************************处方申请**************************************/
