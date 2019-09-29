<template>
  <v-bottom-navigation
    v-model="bottomNav"
  >
    <v-btn value="home" to="/">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn value="user" to="/user">
      <span>User</span>
      <v-icon>mdi-account-search</v-icon>
    </v-btn>
    <v-btn value="userdetails" to="/userdetails">
      <span>User Details</span>
      <v-icon>mdi-account-search</v-icon>
    </v-btn>
    <v-btn value="projects" to="/projects">
      <span>Projects</span>
      <v-icon>mdi-briefcase</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
  export default {
    data () {
      return {
        bottomNav: 'home',
      }
    },
  }
</script>