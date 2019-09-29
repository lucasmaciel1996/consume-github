<template>
  <v-card
    class="pa-1 ma-2"
  >
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
    }),
    mounted(){
        this.getAllUsers();
    },
    methods:{
       getAllUsers(){
           userApi.getAllUser().then(response =>{
               response.data.map(item =>{
                  this.users.push(item);
                  this.users.push({divider:true});       
               });
           });
       }
    }
  }
</script>
