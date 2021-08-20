import { createStore } from 'vuex'
import Vue from 'vue'
//import Vuex from 'vuex'
//import {} from '../utils/index'

//Vue.use(Vuex)

//export default new Vuex.Store({
  export default createStore({
  state: {
    user: null,
    token: null,
    admin: null,
    typeOfService: null,
    services: [],
    donations: [],
    compensations: [],
    offers: [],
    employees: [
      {imglink: '../../../assets/employees/khaled.jpg.png', lastname: 'Farek', firstname:'Khaled Bahaa Eddine', job:'Agent'}
    ],
    demands: []
  },
  mutations: {
    setUser: (state, payload) => {
      state.user = payload
    },
    setToken: (state, payload) => {
      state.token = payload
    },
    setAdmin: (state, payload) => {
      state.admin = payload
    },
    setServices: (state, payload) => {
      state.services = payload
    },
    setDonations: (state, payload) => {
      state.donations = payload
    },
    setCompensations: (state, payload) => {
      state.compensations = payload
    },
    setOffers: (state, payload) => {
      state.offers = payload
    },
    /* setEmployees: (state, payload) => {
      state.employees = payload
    }, */
    
    SetEmployees (state, payload) {
      state.employees.push(payload)
    } ,
    setDemands: (state, payload) => {
      state.demands = payload
    }
  },
  actions: {
    SetEmployees ({commit}, payload) {
      const employee= {
        firstname: payload.firstname,
        lastname: payload.lastname,
        //job: payload.job 
      }
      commit('SetEmployees', employee)
    }
  },
  getters: {
    user: state => state.user,
    token: state => state.token,
    admin: state => state.admin,
    services: state => state.services,
    donations: state => state.donations,
    compensations: state => state.compensations,
    offers: state => state.offers,
    employees: state => state.employees,
    demands: state => state.demands,
  }
})

/*export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})*/
