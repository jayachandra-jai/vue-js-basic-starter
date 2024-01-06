<template>
  <div class="hello">
    <AddItemForm></AddItemForm>
    <v-container>
      <v-row class="mt-4">
        <v-col>
          <h1>My Tasks</h1>
        </v-col>
        <v-col class="text-right">
          <v-btn 
            class="text-none" 
            variant="flat" 
            color="primary" 
            @click="addItem">
            Add ToDo <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="item in todoList" :key="item.id" cols="12">
          <v-card hover>
            <v-card-title class="d-flex justify-space-between">
              <div>{{ item.title }}</div>
              <div>
                <v-checkbox v-model="item.isChecked" @input="checkItem(item)" class="ml-auto"></v-checkbox>
              </div>
            </v-card-title>
            <v-card-subtitle class="d-flex justify-space-between">
              <div>{{ item.info }}</div>
              <div>
                <v-btn icon @click="deleteItem(item.id)" color="red">
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
    
  
  </div>
</template>

<script>
import EventBus from "../../plugins/event-bus";
import AddItemForm from '../Item/AddItemForm';
import ItemService from '@/services/ItemService';

export default {
  name: 'HomePage',
  data(){
    return{
      isChecked: false,
      todoList:[],
      headers: [
        { text: 'Title', value: 'title' },
        { text: 'Info', value: 'info' },
    ],
    }
  },
  created(){
    console.log("Inside created");
    this.getAllItems();
    EventBus.$on('ItemListUpdated', this.getAllItems);
  },
  beforeDestroy() {
    EventBus.$off('ItemListUpdated');
  },
  components:{
    AddItemForm,
  },
  methods:{
    addItem(){
      EventBus.$emit('OpenAddItemFormEvent');
    },
    getAllItems(){
      console.log("Inside getAllItems profile:"+JSON.stringify(this.$store.getters.getProfile));
      ItemService.getAllItems().then(res =>{
        console.log("Inside getAllItems:"+JSON.stringify(res.data.responseObj));
        this.todoList=res.data.responseObj;
      }).catch(err =>{
        console.log("Error in getAllItems",err);
      })
    },
    deleteItem(id){
      console.log("Inside delete:"+id);
      ItemService.deleteItem(id).then(res =>{
        console.log("Inside deleteItem:"+JSON.stringify(res.data));
        this.getAllItems();
      }).catch(err =>{
        console.log("Error in getAllItems",err);
      })
    },
    checkItem(id){
      console.log("Inside checkItem:"+id);
      ItemService.checkItem(id).then(res =>{
        console.log("Inside deleteItem:"+JSON.stringify(res.data));
        this.getAllItems();
      }).catch(err =>{
        console.log("Error in getAllItems",err);
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
