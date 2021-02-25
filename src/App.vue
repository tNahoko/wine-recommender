<template>
  <v-app>
    <v-app-bar app dark fixed>
      <h1>Wine Recommender</h1>
    </v-app-bar>
    <v-main>
      <Search/>
      <List v-if="showList === true" />
    </v-main>
  </v-app>
</template>

<script>
import Search from './components/Search';
import List from './components/List';

export default {
  name: 'App',

  components: {
    List,
    Search,
  },

  data () {
    return {
      items: this.$store.state.recommendation,
    }
  },
  computed: {
    showList: function() {
      return this.$store.state.showList;
    },
  },
  methods: {
    toggleList: function() {
      this.$store.dispatch("setShowList", true);
    },
  }
};
</script>
