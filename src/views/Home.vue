<template>
  <div class="home">
    <div>
      <h1 class="subheading grey--text">Home</h1>
    </div>
    <v-container class="my-5">
      <v-layout row wrap class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn small v-on="on" color="yellow" @click="sortBy('title') ">
              <v-icon left big>folder</v-icon>
              <span class="caption text-lowercase">By project</span>
            </v-btn>
          </template>
          <span>根据项目排序</span>
        </v-tooltip>

        <v-btn small class="mx-3" color="yellow" @click="sortBy('person')">
          <v-icon left big>person</v-icon>
          <span class="caption text-lowercase">By person</span>
        </v-btn>
        <v-btn small color="yellow" @click="sortBy('status')">
          <v-icon left big>star</v-icon>
          <span class="caption text-lowercase">By status</span>
        </v-btn>
      </v-layout>
      <v-card v-for="(project, index) in projects" :key="index">
        <v-layout text-center row wrap :class="`pa-4 project ${project.status}`">
          <v-flex xs12 sm6 md5 text-left>
            <div class="caption grey--text">Project title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs4 sm2 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs4 sm1 md2 text-right>
            <div class="caption grey--text">Date</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs2 sm1 md2>
            <div>
              <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
            </div>
          </v-flex>
          <v-flex xs2 sm2 md1>
            <v-btn color="primary" fab small dark>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn color="primary" fab small dark>
              <v-icon>mdi-minus</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "The Net Ninja",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>
<style>
.project.complete {
  border-left: 8px solid #33ccdd;
}
.project.ongoing {
  border-left: 8px solid orange;
}
.project.overdue {
  border-left: 8px solid tomato;
}
.v-chip.complete {
  background: #33ccdd !important;
}
.v-chip.ongoing {
  background: orange !important;
}
.v-chip.overdue {
  background: tomato !important;
}
</style>
