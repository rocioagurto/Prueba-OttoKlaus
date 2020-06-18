import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const emptyToy = {
                  data:{
                    name: '',
                    code: 0,
                    price: '',
                    stock: 0
                  },
                  id: null,
                };

export default new Vuex.Store({
  state: {
      toys: [],
      showForm: false,
      currentToy: emptyToy,
      loading: false
  },
  mutations: {
    // Establecer juguete vacío
    SET_EMPTY_TOY (state) {
      state.currentToy.id = null
      Object.keys(emptyToy.data).forEach(key => {
        state.currentToy.data[key] = emptyToy.data[key]
      })
    },
    // conjunto de juguetes
    SET_TOYS(state, data) { state.toys = data },
    // mostrar formulario de juguete
    DISPLAY_TOY_FORM(state) { state.showForm = true },
    // Esconder formulario de juguete
    HIDE_TOY_FORM(state) { state.showForm = false },
    //Mostrar loading
    HOLA_LOADING(state){state.loading = true},
    // se oculte Loading
    CHAO_LOADING(state){state.loading = false},
    // Actualizar nombre
    UPDATE_NAME(state, name) { state.currentToy.data.name = name},
    // Actualizar codigo
    UPDATE_CODE(state, code) { state.currentToy.data.code = code},
    // Actualizar precio
    UPDATE_PRICE(state, price) { state.currentToy.data.price = price},
    // Actualizar stock
    UPDATE_STOCK(state, stock) { state.currentToy.data.stock = stock},
    // juguete actualizado
    SET_CURRENT_TOY(state, toy){ state.currentToy = toy },
    
  },
  actions: {
    setToys({ commit }){
      commit('HOLA_LOADING')
      axios.get('https://us-central1-ottoklaus-b9753.cloudfunctions.net/toys/toys')
      .then(response => {
        commit('CHAO_LOADING')
        commit('SET_TOYS', response.data)
        commit('SET_EMPTY_TOY')
      }) 
    },
    displayToyForm ({ commit }) { commit('DISPLAY_TOY_FORM')},
    closeForm ({commit}){
      commit('HIDE_TOY_FORM')
      commit('SET_EMPTY_TOY')
    },
    hideToyForm ({ commit }) { commit('HIDE_TOY_FORM')},
    updateName ({ commit }, name) { commit('UPDATE_NAME', name)},
    updateCode ({ commit }, code) { commit('UPDATE_CODE', code)},
    updatePrice ({ commit }, price) { commit('UPDATE_PRICE', price)},
    updateStock ({ commit }, stock) { commit('UPDATE_STOCK', stock)},
    postToy({ dispatch, state}){
      axios.post('https://us-central1-ottoklaus-b9753.cloudfunctions.net/toys/toy' , state.currentToy.data)
      .then(() =>{
        dispatch('setToys')
      })
    },
    deleteToy({ dispatch, commit }, id){
      axios.delete(`https://us-central1-ottoklaus-b9753.cloudfunctions.net/toys/toy/${id}`)
      .then(() => {
        commit('SET_EMPTY_TOY')
        dispatch('setToys')
      })
    },
    setCurrentToy({ commit }, id){
      axios.get(`https://us-central1-ottoklaus-b9753.cloudfunctions.net/toys/toy/${id}`)
      .then((response) => {
        commit('SET_CURRENT_TOY', response.data)
      })
    },
    // actualizar juguete
    updateToy({ state, dispatch}, id) {
      axios.put(`https://us-central1-ottoklaus-b9753.cloudfunctions.net/toys/toy/${id}`, state.currentToy.data)
      .then(() => {
        dispatch('setToys')
      })
    }
  },
  modules: {
  }
})