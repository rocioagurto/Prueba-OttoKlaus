import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    toys : [],
    showForm: false
  },
  mutations: {
    SET_TOYS(state, data){state.toys = data},
    // Cuando queramos que se muestre o no el formulario
    DISPLAY_TOYFORM(state){state.showForm = true },
    HIDE_TOYFORM(state){state.showForm = false}
  },
  actions:{ 
    setToys({commit}){
      axios.get('https://us-central1-ottoklaus-b9753.cloudfunctions.net/toys/toys')
      .then(response => {
        commit('SET_TOYS', response.data)
      })
    },
    displayToyForm({commit}){
      commit('DISPLAY_TOYFORM')
    },
    hideToyForm({commit}){
      commit('HIDE_TOYFORM')
    }
  }

 
})
