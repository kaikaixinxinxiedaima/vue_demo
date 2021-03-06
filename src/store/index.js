import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    add (state) {
      state.count = state.count + 1
    },
    reduce (state) {
      state.count = state.count - 1
    }
  },
  actions: {
    add (context) {
      context.commit('add')
    },
    reduce (context) {
      context.commit('reduce')
    }
  }
})
