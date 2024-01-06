<template>
    <div>
        <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        width="1024"
      >
        <v-card>
          <v-card-title>
            <span class="text-h5">Add ToDo</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    label="Title*"
                    hint="Task Title"
                    required
                    v-model="title"
                  ></v-text-field>
                </v-col>
                
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                >
                  <v-text-field
                    label="Discription"
                    hint="Task information"
                    v-model="info"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="red"
              variant="text"
              @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="success"
              variant="text"
              @click="addItem()"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    </div>
</template>

<script>
import EventBus from "../../plugins/event-bus";
import ItemService from '@/services/ItemService';

export default {
  name:"AddItemForm",
  data() {
    return {
      dialog: false,
      title:null,
      info:null,
    };
  },
  created(){
    console.log("Inside OpenAddItemFormEvent");
    EventBus.$on('OpenAddItemFormEvent', this.openDialog);
  },
  beforeDestroy() {
    EventBus.$off('OpenAddItemFormEvent');
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
    addItem(){
      ItemService.addItem({"title":this.title,"info":this.info}).then( res =>{
        console.log(JSON.stringify(res))
          if(res!=null){
            console.log('Item added');
            this.dialog = false;
            EventBus.$emit('ItemListUpdated');
          }
      }).catch(err=>{
        console.log("Error adding item",err);
      })
    },
  },
};
</script>