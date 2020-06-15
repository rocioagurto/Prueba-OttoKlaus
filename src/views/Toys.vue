<template>
  <div class="container mt-16">
    <app-bar/>
    <v-main>
     <v-btn @click="displayToyForm">Nuevo Juguete</v-btn>
    <toys-list/>
    <toy-form/>
    </v-main>
  </div>
</template>
<script>

import AppBar from '../components/AppBar'
import ToysList from '../components/ToysList'
import ToyForm from '../components/ToyForm'
import {mapActions} from 'vuex'



export default {
  components: {
    AppBar,
    ToysList,
    ToyForm
  },
  methods: {
    ...mapActions(['displayToyForm'])
  }
}
</script>
  