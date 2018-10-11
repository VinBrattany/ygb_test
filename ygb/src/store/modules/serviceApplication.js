import * as types from '../mutationType'
import { getServiceApplicationList } from '@/api/index'
/**
 * 服务申请
 */
const state = () => {
  return {
    serviceApplicationList: {}
  }
}

const getters = {
  getServiceApplicationList: state => state.serviceApplicationList
}

const actions = {
  async fetchServiceApplicationList ({ state, commit }) {
    const res = await getServiceApplicationList()
    const promise = new Promise((resolve, reject) => {
      if (res && !res.code) {
        const data = res.data
        if (data) {
          commit(types.SET_SERVICEAPPLICATIONLIST, data)
        }
        resolve(res)
      } else {
        reject(res)
      }
    })
    return promise
  }
}

const mutations = {
  [types.SET_SERVICEAPPLICATIONLIST] (state, list) {
    state.serviceApplicationList = list
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
