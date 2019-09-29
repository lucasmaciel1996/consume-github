<template>
   <v-container fluid>
  <v-card
    class="pa-1 ma-2"
  >
    <v-list three-line>
      <template v-for="(item, index) in repos">
        <v-divider
          v-if="item.divider"
          :key="index"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.name"
        >
          <v-list-item-action>
             <v-icon color="black">mdi-github-circle</v-icon>
         </v-list-item-action>    
          <v-list-item-content>
            <v-list-item-title v-html="item.name"></v-list-item-title>
            <v-list-item-subtitle v-html="item.language"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="item.created_at"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="item.size"></v-list-item-subtitle>
           </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
   </v-container>
</template>
<script>
export default {
    props:{
        repos:Array,
    }
}
</script>