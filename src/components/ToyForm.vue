
  <template>
  <div class="text-center">
    <v-dialog
      :value="showForm"
      width="500"
      persistent=""
    >
    <v-card>
    <v-card-title class="headline cyan lighten-3 white--text" primary-title> Nuevo Juguete </v-card-title>
     
    
    <!-- form ventana modal -->
    <v-container>
        <v-row>
            <v-col>
                <v-form>
                <v-text-field label="Nombre" type="text" :value="currentToy.data.name" @input="updateName"/>
                <v-text-field label="Precio" prefix="$" :value="currentToy.data.price" @input="updatePrice"/>
                <v-text-field label="Codigo" type="text" :value="currentToy.data.code" @input="updateCode"/>
                <v-text-field label="Stock" suffix="Unidades" :value="currentToy.data.stock" @input="updateStock"/>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn depressed class="mb-5 mr-3" color="cyan lighten-1 white--text" @click="submitForm"> {{ !!currentToy.id ? 'Actualizar':'Crear' }} </v-btn>
        <v-btn color="warning" class="mb-5 mr-3" @click="closeForm">Cerrar</v-btn>
    </v-card-actions>
    </v-card>
    </v-dialog>
  </div>
</template>


<script>
import {mapState, mapActions} from 'vuex'
export default {
    methods: {
        ...mapActions(['hideToyForm', 'updateName', 'updateCode', 'updatePrice', 'updateStock', 'postToy', 'updateToy', 'closeForm']),
        submitForm(){
             if(this.currentToy.id){
                 //Si tiene id vmaos a llamar a la funcion que actualiza datos
                 this.updateToy(this.currentToy.id)
             } else {
                 this.postToy()
             }
             this.hideToyForm() 
         
        },
    },
     computed: {
        ...mapState(['showForm', 'currentToy'])

}
}
</script>

<style>

</style>