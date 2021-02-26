<template>
  <ul>
    <li v-for="item in recommendation" :key="item.id">
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
 export default {
    name: 'List',

    data() {
      return {
        items: this.$store.state.recommendation
      }
    },
    computed: {
      recommendation: function() {
        return this.$store.state.recommendation;
      }
    },
    methods: {
      //
    }
  }
</script>
