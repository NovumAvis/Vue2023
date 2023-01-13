import { createStore } from 'vuex'

export default createStore({
  state: {
		isAuth: true,
		newReg: false,
  },
  getters: {
  },
  mutations: {

		setLogPage(state){
			state.newReg = false;
		},
		setRegPage(state){
			state.newReg = true;
		},
		setAuthOut(state){
			state.isAuth = false;
		},
		setAuthIn(state){
			state.isAuth = true;
		},
		
  },
  actions: {
  },
  modules: {
  }
})
