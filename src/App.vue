<template>
  <v-app class="grey lighten-4 ">
     
    <v-content >
      <Navbar/>
      <v-container fluid class="mt-5">
        <router-view></router-view>

      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'

export default {
  name: 'App',
  components:{Navbar},
  data: () => ({
    
  }),
};
</script>
