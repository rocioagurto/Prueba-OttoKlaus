import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Firebase from 'firebase'
import FirebaseConfig from './config/firebase'

Firebase.initializeApp(FirebaseConfig)
Vue.config.productionTip = false

// Para que al actualizar, no se salga del usuario
let app = ''
Firebase.auth().onAuthStateChanged(() =>{
  if(!app){
    app = new Vue({

      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})