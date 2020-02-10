<template>
  <div class="team">
    <div>
      <h1 class="subheading grey--text">Team</h1>
    </div>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(person, index) in team" :key="index">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100">
                <img :src="`${person.dddd}`" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="shubheading">{{person.name}}</div>
              <div class="grey--tex">{{person.role}}</div>
            </v-card-text>
            <VCardActions>
              <v-btn text small>
                <v-icon small left class="text--blue">message</v-icon>
                <span>message</span>
              </v-btn>
            </VCardActions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    team: [
      { name: "Ryu", role: "student", dddd: "/img/1.jpg" },
      { name: "Cun li", role: "teacher", dddd: "/img/2.jpg" },
      { name: "Goh tom", role: "database", dddd: "/img/3.jpg" },
      { name: "Tom Jackson", role: "dbs", dddd: "/img/4.jpg" },
      { name: "Liu Liping", role: "student", dddd: "/img/5.jpg" },
      { name: "Ryu", role: "student", dddd: "/img/6.jpg" },
      { name: "Cun li", role: "teacher", dddd: "/img/7.jpg" },
      { name: "Goh tom", role: "database", dddd: "/img/8.jpg" }
    ]
  })
};
</script>
