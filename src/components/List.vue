<template>
  <v-container>
   
  </v-container>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'HelloWorld',

    data() {
      return {
        wines: []
      }
    },
    async created() {
      try {
        const response = await axios.get('/wine/all');
        let data = response.data.wine_data;
        this.wines = data;
      } catch (err) {
        console.log(err)
      }
    }
  }
</script>
