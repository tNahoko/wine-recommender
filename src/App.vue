<template>
  <v-app>
    <v-app-bar app dark clipped-left>
      <h1>Wine Recommender</h1>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="handleNav"></v-app-bar-nav-icon>
    </v-app-bar>
      
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
