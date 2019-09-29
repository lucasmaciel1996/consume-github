<template>
  <v-card 
    class="mx-auto"
  >
    <v-card-title class="black--text text-center">
      
     <v-container fluid>
      <v-img
        :src="user.avatar_url"
        contain
        max-height="600"
      ></v-img>
     </v-container>
      <div class="display-2">{{user.name}}</div>
    </v-card-title>
    <v-divider inset></v-divider>
    
      <v-list-item>
        <v-list-item-action>
          <v-icon color="black">mdi-information-outline</v-icon> 
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{user.bio}}</v-list-item-title>
          <v-list-item-subtitle>Bio</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    <v-list two-line>
      <v-list-item  
        :href="`${user.blog}`"
        target="_blank">
        <v-list-item-icon>
          <v-icon color="black">mdi-account-tie</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{user.blog}}</v-list-item-title>
          <v-list-item-subtitle>Blog</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-eye</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-list-item
        :href="`${user.html_url}`"
        target="_blank"
      >
        <v-list-item-action>
          <v-icon color="black">mdi-github-circle</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{user.html_url}}</v-list-item-title>
          <v-list-item-subtitle>GitHUb</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-eye</v-icon>
        </v-list-item-icon>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item >
        <v-list-item-icon>
          <v-icon color="black">mdi-email</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{user.email}}</v-list-item-title>
          <v-list-item-subtitle>Email</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider inset></v-divider>

      <v-list-item >
        <v-list-item-icon>
          <v-icon color="black">mdi-map-marker</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{user.location}}</v-list-item-title>
          <v-list-item-subtitle>Location</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item >
        <v-list-item-icon>
          <v-icon color="black">mdi-folder-information</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Repostories</v-list-item-title>
          <v-list-item-subtitle>Repos</v-list-item-subtitle>
          <Repositories :repos="repos"></Repositories>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
import userApi from './../service/users';
import Repositories from './Repositories';
export default {
    components:{
     Repositories,
    },
    data: () =>({
          name:'',
          user:'',
          repos:[],
    }),
    mounted(){
      this.name =this.$route.params.username;
      this.getUserByName();
    },
    methods:{
      getUserByName(){
        userApi.getUserByName(this.name).then(response => {
          this.user = response.data;
          this.getRepos();
        });
      },
      getRepos(){
        userApi.getRepos(this.name).then(response => {
          response.data.map(item =>{
            this.repos.push(item);
            this.repos.push({divider:true});
          })
        });
      }
    }  
}
</script>>