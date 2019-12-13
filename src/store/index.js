import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
// import targets from './modules/targets'
// import messages from './modules/messages'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    // targets,
    // messages
  },
  strict: debug
})