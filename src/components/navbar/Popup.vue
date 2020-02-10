<template>
  <div>
    <v-dialog v-model="dialog" max-width="800px">
      <template v-slot:activator="{ on }">
        <v-btn class="success" v-on="on">Add new project</v-btn>
      </template>

      <v-card>
        <v-card-title>Add new project</v-card-title>

        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              :value="project.title"
              label="Title"
              v-model="project.title"
              prepend-icon="folder"
              :rules="inputRules"
            ></v-text-field>
            <v-textarea  :rules="inputRules" label="Information" v-model="project.content" prepend-icon="edit"></v-textarea>
            <!-- add the due date -->
            <v-menu
              v-model="dmenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="formatDate"
                  label="create date"
                  prepend-icon="event"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="project.due" @input="dmenu = false"></v-date-picker>
            </v-menu>
          </v-form>
          <v-btn text class="success ml-3 mt-3" @click="submit">Add project</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
// import format from 'date-fns/format'
export default {
  data() {
    return {
      dialog: false,
      dmenu: false,
      inputRules: [v => v.length >= 3 || "至少3个字符"],
      project: {
        title: "",
        content: "",
        due: new Date().toISOString().substr(0, 10)
      }
    };
  },
  methods: {
    submit() {
      if(this.$refs.form.validate())
      console.log(this.project)
    }
  },
  computed: {
    formatDate() {
      return this.project.due;
    }
  }
};
</script>