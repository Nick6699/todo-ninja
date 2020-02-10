<template>
  <v-card
    class="mx-auto"
    max-width="300"
    tile
  >
    <v-list  class="primary" >
      <v-list-item-group v-model="item"  >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          router :to ="item.route" 
        >
          <v-list-item-icon >
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content class="white--text">
            <v-list-item-title   v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>


<script>
  export default {
    name: 'MenuList',
    data: () => ({
      item: 1,
      items: [
        { text: 'Dashboard', icon: 'mdi-clock' ,route:'/dashboard'},
        { text: 'Projects', icon: 'mdi-flag' ,route:'/project'},
        { text: 'Team', icon: 'mdi-account' ,route:'/team'},
        { text: 'Home', icon: 'mdi-home' ,route:'/home'},
      ],
    }),
  }
</script>

<style>

</style>