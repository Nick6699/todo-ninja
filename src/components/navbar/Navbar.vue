<template>
  <nav>
    <v-toolbar flat>
      <v-app-bar-nav-icon class="grey--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <VToolbarTitle class="text-uppercase grey--text">
        <span class="font-weight-light">todo</span>
        <span>Ninja</span>
      </VToolbarTitle>
      <VSpacer />
      <!-- dropduwn menu -->
      <div class="text-center">
        <v-menu  class="mx-6" offset-y >
          <template v-slot:activator="{ on }">
            <v-btn text color="grey" v-on="on">
              <v-icon left>expand_more</v-icon>
              <span>MENU</span>
            </v-btn>
          </template>

          <v-list >
            <v-list-item v-for="item in items" :key="item.text" :to="item.route">
              <v-list-item-title>
                <v-icon>{{item.icon}}</v-icon>
               <span> {{item.text}}</span>
                </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-btn text samll color="grey">
        <span>Sign Out</span>
      </v-btn>
      <v-icon>exit_to_app</v-icon>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-layout column align-center text-center wrap>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/img/2.jpg" alt="Nancy" />
          </v-avatar>
          <p class="white--text subheading mt-1">Jacky</p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
          <Popup></Popup>
        </v-flex>
      </v-layout>
      <MenuList />
    </v-navigation-drawer>
  </nav>
</template>

<script>
import MenuList from "../menu/MenuList";
import Popup from "./Popup"
export default {
  components: { MenuList,Popup },
  data() {
    return {
      items: [
        { text: 'Dashboard', icon: 'mdi-clock' ,route:'/dashboard'},
        { text: 'Projects', icon: 'mdi-flag' ,route:'/project'},
        { text: 'Team', icon: 'mdi-account' ,route:'/team'},
        { text: 'Home', icon: 'mdi-home' ,route:'/home'},
      ],
      drawer: null
    };
  }
};
</script>

<style>
</style>