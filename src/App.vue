<template>
  <v-app f>
    <Header/>
    <v-content >
      <NavigationPath />
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import NavigationPath from './components/NavigationPath';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    NavigationPath,
  },
  data: () => ({
    //
  }),
};
</script>
