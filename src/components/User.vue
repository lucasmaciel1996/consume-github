<template>
  <v-card
    class="pa-1 ma-2"
  >
  <form>
    <v-alert
      :type="alert.type"
      outlined
      dismissible
      v-if="searchuser"      
    >
    <strong>{{alert.msg}}</strong>
    </v-alert>
    <v-text-field
      v-model="name"
      required
      counter
      :rules="minName"
      placeholder="Name User GitHub"
      label="Name User GitHub"
       v-on:keyup.enter="submit"
    ></v-text-field>
    <v-btn class="mr-4" @click="getAllUsers(name)" outlined rounded :disabled="disableButton">
      Search
      <v-icon>mdi-magnify</v-icon>
     </v-btn>
     {{name}}
  </form>
  <v-list three-line
  pagination.sync="4">
    <template v-for="(item, index) in users">
      <v-divider
        v-if="item.divider"
        :key="index"
      ></v-divider>

      <v-list-item
        v-else
        :key="item.login"
        @click="showDetailsUser(item.login)"
      >
        <v-list-item-avatar>
          <v-img :src="item.avatar_url"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-html="item.login"></v-list-item-title>
          <v-list-item-subtitle v-html="item.repos_url"></v-list-item-subtitle>
          </v-list-item-content>
      </v-list-item>
    </template>
    </v-list>
  </v-card>
</template>
<script>
import userApi from './../service/users';
  export default {
    data: () => ({
      users:[],
      name:'',
      alert:'',
      searchuser:false,
      minName: [
        v => (v && v.length !=0) || 'Name must be less than  1 characters',
      ],
    }),
    mounted(){
        this.getAllUsers();
    },
    computed:{
      disableButton(){
        return this.name.length == 0;
      },
    },
    methods:{
      getAllUsers(name){
        this.users = [];
        userApi.getAllUser(name).then(response =>{
          if(name == null){
            response.data.map(item =>{
              this.users.push(item);
              this.users.push({divider:true});       
            });
          }else{
            this.alert ={
             type:'success',
             msg:`${response.data.name}`
            }
            this.searchuser =true;
            this.name=''; 
            this.users.push(response.data);
            this.users.push({divider:true});
          }
        }).catch(error =>{
           this.alert ={
             type:'error',
             msg:`${error.response.status} - ${error.response.statusText}`
           }
           this.name='';
           this.searchuser =true;
        });
      },
      showDetailsUser(username){
        this.$router.push(`/userdetails/${username}`)    
        
      },
    }
  }
</script>
