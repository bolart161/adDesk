<template>
  <v-container>
    <v-row
      align='baseline'
      justify='space-around'
    >
      <v-col
        sm='8'
        md='6'
        lg='5'
        xl='4'
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
            dense
          >
            <v-toolbar-title>New ad</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form class="mb-4">
              <v-text-field
                label="Ad title"
                name="title"
                v-model="title"
                type="text"
              ></v-text-field>
              <v-textarea
                label="Ad description"
                name="description"
                v-model="description"
                type="text"
              ></v-textarea>
              <v-switch
                v-model="isPromo"
                :label="'Add to main page'"
                color="success"
              ></v-switch>
              <v-btn
                color="warning"
                small
                @click="triggerUpload"
              >
                Upload image
                <v-icon dark right>cloud_upload</v-icon>
              </v-btn>
              <input
                ref="fileInput"
                type="file"
                style="display: none"
                accept="image/*"
                @change="onFileChange"
              >
            </v-form>
            <v-img :src="imageSrc" />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary">Create ad</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      imageSrc: '',
      image: null,
      isPromo: false,
      description: '',
      title: ''
    }
  },
  methods: {
    triggerUpload () {
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
      const file = event.target.files[0]
      const reader = new FileReader()

      reader.onload = e => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
    }
  }
}
</script>
