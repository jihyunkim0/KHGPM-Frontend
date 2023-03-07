import Vue from 'vue'
import Vuex from 'vuex'

import state from "@/store/states"
import actions from "@/store/actions"
import mutations from "@/store/mutations"
import getters from "@/store/getters"

Vue.use(Vuex)
//원래 있던 중괄호는 import를 하면서 지움(지저분함 방지)
// 현재 상태를 관리하는 이유는 세션과 쿠키를 vue에서 관리하기 위해서
export default new Vuex.Store({
  // 왜 states 안하고 state 하나요 ?
  // states가 예약어이기 때문에 js 코드가 요상한 동작을 하게 됩니다.
  state,
  actions,
  mutations,
  getters,
})