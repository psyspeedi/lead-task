import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

// module
import analytics from './analytics'
import auth from './auth'

Vue.use(Vuex)

const apiKey = '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo'
const apiUrl = 'https://track-api.leadhit.io/client/test_auth'

Axios.defaults.headers.common['Api-Key'] = apiKey
Axios.defaults.baseURL = apiUrl

export default new Vuex.Store({
  modules: { analytics, auth }
})
