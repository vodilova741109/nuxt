<template>
  <v-row>
    <v-col class="text-center">
    <Circular />
    <!-- {{health}} -->
    </v-col>
  </v-row>
</template>




<style scoped>
.text-center{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>

<script>


export default {
  data() {
    return {
      // health:{}
    }
  },
//   async asyncData({ $axios }) {
//     const health = await $axios.$get('http://localhost:3000/api/health')      
//     return { health };  
//   }
}
</script>

