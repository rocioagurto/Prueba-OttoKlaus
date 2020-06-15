<template>
  <div>
   <v-app-bar
    app
    color="teal lighten-3"
    dark
  >
    <div class="d-flex align-center">
      <h2>OTTOOKLAUSS</h2>
    </div>
    <v-spacer></v-spacer>
    <v-btn 
    text 
    @click="logout"
    >
    <span class="mr-2">Cerrar Sesión</span>
      <v-icon>mdi-lock</v-icon>
    </v-btn>
   </v-app-bar>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  methods: {
    logout(){
      Firebase.auth().signOut().then(()=>{
      this.$router.push('/login')
      })
    }
  }
}
</script>
