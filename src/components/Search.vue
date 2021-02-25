<template>
  <v-container>
    <v-toolbar
    dark
    color="teal"
  >
    <v-toolbar-title>Tell us which wine you like!</v-toolbar-title>
    <v-autocomplete
      v-model="select"
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      hide-no-data
      hide-details
      label="Search your current favorite"
      solo-inverted
      return-object
    ></v-autocomplete>
     </v-toolbar>
  <v-toolbar>
    <v-btn outlined block color="green" @click="getRecommendation">See top 7 recommendation</v-btn>
  </v-toolbar>
  </v-container>
</template>

<script>
  export default {
    name: 'Search',
    data () {
      return {
        isLoading: false,
        items:[],
        search: null,
        select: null,
        id: "",
        title: "",
        recommendation: []
      }
    },
    computed: {
      allWines: function() {
        return this.$store.state.allWines;
      },
      showList: function() {
        return this.$store.state.showList;
      },
    },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
    },
    methods : {
      getRecommendation: async function() {
        this.$store.dispatch("getRecommendation", this.select);
      },
      querySelections (v) {
        console.log(v)
        this.loading = true
        this.select = this.$store.state.allWines.filter( (wine) => {
          wine[6] === v;
        })[0][0]
        this.$store.dispatch("getRecommendation", this.select);
        this.loading = false
      },
    },
    mounted () {
      const data = this.$store.state.allWines;
      for (const wine of data) {
        this.items.push(wine[6])
      }
    }
  }
</script>
