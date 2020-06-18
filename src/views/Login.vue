<template>
  <v-app>
    <v-card width="500" height="300" class="mx-auto mt-9">
      <v-card-title class="pb-0">
        <h1 class="mx-auto">OTTOKLAUSS</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field 
          label="User" 
          prepend-icon="mdi-account-circle"
          v-model="user"
          />  

          <v-text-field 
          label="Password" 
          :type="showPassword ? 'text' : 'password'" 
          prepend-icon="mdi-lock" 
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
          @click:append="showPassword = !showPassword"
          v-model="password"
          />  
        </v-form>
      </v-card-text>
      <v-card-actions>
      <v-spacer></v-spacer>
        <v-content>
          <v-btn color="cyan lighten-3 white--text" 
          width="450" 
          class="my-3" 
          @click="login"
          >Login
          </v-btn>
        </v-content>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
import Firebase from 'firebase'

export default {
  data: () => ({
    user: "",
    password: "",
    showPassword: false
  }),
  methods: {
    login(){
      Firebase.auth().signInWithEmailAndPassword(this.user, this.password)
      .then(() =>{
       this.$router.push('/')
        alert(`Bienvenid@ ${this.user}`)
      }).catch(()=>{
        alert('Datos ingresados no son validos, intente nuevamente')
      })
    }
  }
};
</script>

<style scoped>
h1 {
  color: rgb(99, 206, 206);
}
</style>