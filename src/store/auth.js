import Axios from 'axios'
import router from '../router'

export default {
  namespaced: true,
  state: {
    loading: false,
    siteId: localStorage.getItem('Leadhit-Site-Id') || ''
  },
  getters: {
    isLoggedIn: state => !!state.siteId
  },
  mutations: {
    SET_SITE_ID: (state, siteId) => (state.siteId = siteId),
    SET_LOADING: (state, loading) => (state.loading = loading)
  },
  actions: {
    async login({ commit }, siteId) {
      commit('SET_LOADING', true)
      try {
        const res = await Axios.get(Axios.defaults.baseURL, {
          headers: {
            'Leadhit-Site-Id': siteId
          }
        })

        if (res.data.message === 'ok') {
          localStorage.setItem('Leadhit-Site-Id', siteId)
          commit('SET_SITE_ID', siteId)
          router.push('/analytics')
        }
        commit('SET_LOADING', false)
      } catch (e) {
        commit('SET_LOADING', false)
        throw new Error(e)
      }
    },
    logout({ commit }) {
      localStorage.removeItem('Leadhit-Site-Id')
      commit('SET_SITE_ID', '')
      router.push('/auth')
    }
  }
}
