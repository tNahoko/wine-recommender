<template>
  <v-container>
    <v-toolbar
    dark
    color="teal"
  >
    <v-toolbar-title>Your current favorite</v-toolbar-title>
    <v-autocomplete
      v-model="select"
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      hide-no-data
      hide-details
      label="Search/choose the wine you like"
      solo-inverted
      return-object
    ></v-autocomplete>
     </v-toolbar>
  <v-toolbar>
    <v-btn outlined block color="green" @click="handleClick">See top 7 recommendation</v-btn>
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
      }
    },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
    },
    methods : {
      querySelections (v) {
        this.loading = true
        this.select = this.$store.state.allWines.filter( (wine) => {
          wine[6] === v;
        })[0][0]
        this.$store.dispatch("getRecommendation", this.select);
        this.loading = false
      },
      handleClick: async function () {
        const id = this.$store.state.allWines.filter(w => w[6] === this.select)[0][0];
        await this.$store.dispatch("getRecommendation", id);
        await this.$store.dispatch("setShowList", true);
      }
    },
    mounted: async function() {
      await this.$store.dispatch("getAllWines");
      const data = this.$store.state.allWines;
      for (const wine of data) {
        this.items.push(wine[6])
      }
    }
  }
</script>
