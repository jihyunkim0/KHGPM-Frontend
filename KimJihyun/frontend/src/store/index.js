import Vue from 'vue'
import Vuex from 'vuex'

import states from "@/store/states"
import actions from "@/store/actions"
import mutations from "@/store/mutations"
import getters from "@/store/getters"

//원래 있던 중괄호는 import를 하면서 지움(지저분함 방지)
// 현재 상태를 관리하는 이유는 세션과 쿠키를 vue에서 관리하기 위해서
Vue.use(Vuex)

export default new Vuex.Store({
  states,
  actions,
  mutations,
  getters,
})
