<template>
  <div class="container">
    <app-bar/>
    <v-main>
      <v-overlay :value="loading">
        <v-progress-circular indeterminate size="64"/>
      </v-overlay>
    <toys-list/>
     <v-btn @click="displayToyForm" color="deep-orange lighten-3 white--text" class="mx-auto mt-6">Nuevo Juguete</v-btn>
    <toy-form/>
    </v-main>
  </div>
</template>
<script>

import AppBar from '../components/AppBar'
import ToysList from '../components/ToysList'
import ToyForm from '../components/ToyForm'
import {mapActions, mapState} from 'vuex'



export default {
  components: {
    AppBar,
    ToysList,
    ToyForm
  },
  methods: {
    ...mapActions(['displayToyForm'])
  },
  computed:{
    ...mapState(['loading'])
  }
}
</script>
  