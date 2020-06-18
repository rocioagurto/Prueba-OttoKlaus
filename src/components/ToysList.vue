<template>
  <div>
      <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Codigo</th>
           <th class="text-left">Stock</th>
           <th class="text-left">Precio</th>
           <th class="text-left">Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="toy in toys" :key="toy.id">
          <td>{{ toy.data.name }}</td>
          <td>{{ toy.data.code }}</td>
          <td>{{ toy.data.stock }}</td>
          <td>{{ toy.data.price }}</td>
          <td>
            <v-btn  @click="editToy(toy.id)" tile text small color="pink lighten-4 white--text mx-auto"><v-icon>mdi-pencil</v-icon></v-btn>
            <v-btn  @click="removeToy(toy.id)" tile text small  color="purple lighten-4 white--text mx-auto"><v-icon>mdi-delete</v-icon></v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions([ 'setToys', 'deleteToy', 'setCurrentToy', 'displayToyForm']),
        removeToy(id){
          let confirmation = confirm('Estas segura que quieres eliminar el jueguete?')
          if (confirmation) {
            this.deleteToy(id)
          }

        },
        editToy(id){
           //establecer el juguete actual, en base al id entregado
          this.setCurrentToy(id)
          //desplegar el formulario con el juguete actual
          this.displayToyForm()
        }
        

    },
    computed: {
        ...mapState(['toys'])
    },
    created() {
        this.setToys()
    }

}
</script>

<style>

</style>